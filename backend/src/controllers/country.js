import { db } from "../connection.js";

// --------------------------------- section 1 ---------------------------------------
// the functions which are used by the routes to create and fetch the country data from the database.

// this function helps to create a new country in the database with the given name and icon.
export const createCountry = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to create a country entry in the database.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a country entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create country entries." });

    const q = "INSERT INTO country (`name`, `flagLogo`) VALUES (?)";
    const values = [req.body.name, req.body.flagLogo];

    try {
        const [results] = await db.query(q, [values]);
        return res.status(201).json({ message: "Country created successfully", id: results.insertId });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create country", details: err.message });
    }
};

// this function helps to fetch all the countries from the database.
export const getCountries = async (req, res) => {
    const q = "SELECT * FROM country";

    try {
        const [results] = await db.query(q);
        return res.status(200).json(results);
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch countries", details: err.message });
    }
}

// ------------------------------------- section 2 -----------------------------------------
// function which are used by other controllers to fetch the country data by their name and id from the database.

// this function helps to fetch the countries by their names from the database.
export const getCountryByName = async (name) => {
    const q = "SELECT * FROM country WHERE name = ?";

    try {
        const [results] = await db.query(q, [name]);
        return results;
    } catch (err) {
        return { error: "Failed to fetch country", details: err.message };
    }
};

// this function helps to fetch the countires by their id from the database.
export const getCountryById = async (id) => {
    const q = "SELECT * FROM country WHERE id = ?";

    try {
        const [results] = await db.query(q, [id]);
        return results;
    } catch (err) {
        return { error: "Failed to fetch country", details: err.message };
    }
}

