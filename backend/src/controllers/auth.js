import { db } from "../connection.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// this function helps to register a user and stores the user details in the database
export const register = async (req, res) => {
    try {
        // hashing the password before storing it in the database
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        // registering the user in the database
        const q = "INSERT INTO users (`name`, `email`, `password`, `image`, `phone_number`, `role_id`) VALUES (?)";
        const values = [req.body.name, req.body.email, hashedPassword, req.body.image, req.body.phoneNumber, req.body.roleId];

        await db.query(q, [values]);
        return res.status(200).json({ message: "User registered successfully" });

    } catch (err) {
        res.status(500).json({ error: "Failed to register user", details: err.message });
    }
}

// this function helps to login a user by verifying the email and password and returns a jwt token if the credentials are valid
export const login = async (req, res) => {
    try {
        const q = "SELECT * FROM users where email = ?";
        const [results] = await db.query(q, [req.body.email]);

        // check if user exist by email
        if (results.length === 0) return res.status(404).json({ error: "user not found!" });

        // verify the password
        const isPasswordValid = bcrypt.compareSync(req.body.password, results[0].password);
        if (!isPasswordValid) return res.status(400).json({ error: "Invalid password or email!" });

        // TODO:
        //
        // the role_id should be replaced by the access id for security purpose
        // but for now we are using role_id to generate the jwt token and to verify the access of the user in the middleware.
        //
        // ------------------- need to change the role_id to access_id in the database and in the codebase -------------------

        // generate a jwt token
        const token = jwt.sign({ id: results[0].id, roleId: results[0].role_id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        // setting the jwt token in the cookie
        res.cookie("access_token", token, {
            httpOnly: true,
            secure: true, // set secure flag in production
            sameSite: "none", // prevent CSRF attacks
        });

        return res.status(200).json({ token });

    } catch (err) {
        res.status(500).json({ error: "Failed to login user", details: err.message });
    }
}

// this function helps user to logout by clearing the jwt token from the client side.
export const logout = async (req, res) => {
    // since we are using jwt token for authentication, we cannot invalidate the token on the server side. 
    // so we can only clear the token from the client side to logout the user.
    res.clearCookie("access_token");
    return res.status(200).json({ message: "User logged out successfully" });
}
