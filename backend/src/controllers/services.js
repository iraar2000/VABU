import { db } from '../connection.js';

// this function helps in the addition of the services in the database by the admin.
export const createService = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to create a service.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a service." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create services." });

    const q = "INSERT INTO services (`name`, `description`) VALUES (?)";
    const values = [req.body.name, req.body.description];

    try {
        await db.query(q, [values]);
        res.status(201).json({ message: "Service created successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create service", details: err.message });
    }
}

// this function helps to fetch the services from the database.
export const getServices = async (req, res) => {
    const q = "SELECT id, name, description FROM services";
    try {
        const [results] = await db.query(q);
        res.status(200).json(results);
    }
    catch (err) {
        return res.status(500).json({ error: "failed to fetch services", details: err.message });
    }

}