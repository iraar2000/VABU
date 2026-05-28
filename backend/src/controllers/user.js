import { db } from '../connection.js';
import bcrypt from 'bcrypt';

// function that adds a user role to the database
export const addUserRole = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to add a user role in the database.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to add a user role." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can add user roles." });

    const values = [req.body.name, req.body.description];

    // generate access_id based on the name of the role
    const accessId = bcrypt.hashSync(values[0], 10);
    values.push(accessId);

    const q = "INSERT INTO user_role (name, description, access_id) VALUES (?)";
    try {
        await db.query(q, [values]);
        res.status(201).json({ message: "User role added successfully" });
    } catch (error) {
        console.error("Error adding user role:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

// function that returns the user roles from the database
export const getUserRoles = async (req, res) => {
    const q = "SELECT id, name, access_id, description FROM user_role";

    try {
        const [result] = await db.query(q);
        res.status(200).json(result);
    } catch (error) {
        console.error("Error fetching user roles:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}