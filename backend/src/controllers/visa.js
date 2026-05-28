import { db } from "../connection.js";
import { getCountryById } from "./country.js";

// --------------------------------- section 1 ---------------------------------------
// the functions which are used by the routes to create and fetch the visa data from the database.

// the function helps to fetch all visa data from the database.
export const getVisa = async (req, res) => {
    const query = `SELECT vt.name as type, vt.icon as icon, vt.description as description 
    from visa as v join visa_type as vt on v.visa_type_id = vt.id;`;

    try {
        const [results] = await db.query(query);
        return res.status(200).json(results);
    } catch (err) {
        return res.status(500).json({ error: "Failed to fetch visa data", details: err.message });
    }
};

// the function helps to create a new visa entry in the database.
export const createVisa = async (req, res) => {

    // the secuty check to verify if the user is logged in and has the admin role to create a visa entry in the database.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a visa entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create visa entries." });

    // check if the country exists in the database
    var country = await getCountryById(req.body.country_id);
    if (country.length === 0) return res.status(404).json({ error: "country not found" });

    // check if the visa type exists in the database
    var visaType = await getVisaTypeById(req.body.visa_type_id);
    if (!visaType) return res.status(404).json({ error: "Visa type not found" });

    const issue_date = new Date(req.body.issue_date);
    const expiry_date = new Date(req.body.expiry_date);

    // inspect if the visa issue date and expiry date is available in database and valid or not
    if (isNaN(issue_date.getTime()) || isNaN(expiry_date.getTime())) return res.status(400).json({ error: "Invalid date format. Please provide valid issue and expiry dates." });
    if (issue_date >= expiry_date) return res.status(400).json({ error: "Invalid date range. Issue date must be before expiry date." });

    const q = "INSERT INTO visa (`country_id`, `visa_type_id`, `fee`, `issue_date`, `expiry_date`) VALUES (?)";
    const values = [country[0].id, req.body.visa_type_id, req.body.fee, issue_date, expiry_date];

    try {
        await db.query(q, [values]);
        return res.status(200).json({ message: "Visa created successfully" });
    } catch (err) {
        console.log({ error: "Failed to create visa", details: err.message });
        return res.status(500).json({ error: "Failed to create visa", details: err.message });
    }
};

// creating/adding the visa type in the database.
export const createVisaType = async (req, res) => {
    // the secuty check to verify if the user is logged in and has the admin role to create a visa type entry in the database.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a visa type entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create visa type entries." });

    const q = "INSERT INTO visa_type (`icon`, `name`, `description`) VALUES (?)";
    const values = [req.body.icon, req.body.name, req.body.description];

    try {
        await db.query(q, [values]);
        return res.status(200).json({ message: "Visa type created successfully" });
    } catch (err) {
        console.log({ error: "Failed to create visa type", details: err.message });
        return res.status(500).json({ error: "Failed to create visa type", details: err.message });
    }
};

// the function helps to fetch the visa type by their id from the database.
export const getVisaTypeById = async (id) => {
    const q = "SELECT * FROM visa_type WHERE id = ?";
    try {
        const [results] = await db.query(q, [id]);
        return results;
    } catch (err) {
        return { error: "Failed to fetch visa type", details: err.message };
    }
};

// ------------------------------------- section 2 -----------------------------------------
// the functions which are used by other controllers to fetch the visa data by their name and id from the database.