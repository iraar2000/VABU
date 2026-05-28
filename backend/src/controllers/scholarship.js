import { db } from "../connection.js";
import { getCountryById } from "./country.js";

// ----------- ---------------------- section 1 -----------------------------------------
// the functions which are used by the routes to create and fetch the scholarship data from the database.

// this function helps to fetch all the scholarships data which are in the database.
export const getScholarships = async (req, res) => {
    const query = `SELECT education_level_id, university_id, type_id, coverage_id_list, deadline, description FROM scholarships`;

    try {
        const [results] = await db.query(query);

        // for each scholarship, we need to fetch the education level, university, type and coverage data from the database and add it to the scholarship data.
        for (let i = 0; i < results.length; i++) {

            // retrieving data using id from database
            const educationLevel = await getScholarshipEducationLevelById(results[i].education_level_id);
            const university = await getScholarshipUniversityById(results[i].university_id);
            const type = await getScholarshipTypeById(results[i].type_id);
            const coverageIds = results[i].coverage_id_list.split(',').map(id => parseInt(id));
            const country = await getCountryById(university[0].country_id);

            // fetching the coverage data for each coverage id and adding it to the scholarship data.
            const coverage = [];
            for (let j = 0; j < coverageIds.length; j++) {
                const coverageItem = await getScholarshipCoverageById(coverageIds[j]);
                coverage.push(coverageItem);
            }

            // forming and appending the scholarship data to the response data array.
            const scholarshipData = {
                universityLogo: university[0].logo,
                universityName: university[0].name,
                universityWebsite: university[0].website,
                information: {
                    location: country[0].name,
                    level: educationLevel[0].name,
                    deadline: results[i].deadline,
                    funding_type: type[0].name
                },
                details: results[i].description,
                coverage: coverage
            };

            // creating the scholarship details of the response data array.
            results[i].details = scholarshipData;
        }

        // console.log(results);

        return res.status(200).json(results);
    } catch (err) {
        return res.status(500).json({ error: "failed to fetch scholarship data", details: err.message });
    }
}

// this function helps to create a new scholarship entry in the database.
export const createScholarship = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to create a scholarship entry in the database.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a scholarship entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create scholarship entries." });

    // createing the deadline date object from the request body and inspecting if it is valid or not.
    const deadline = new Date(req.body.deadline);

    const q = "INSERT INTO scholarships (`education_level_id`, `university_id`, `type_id`, `coverage_id_list`, `deadline`, `description`) VALUES (?)";
    const values = [req.body.education_level_id, req.body.university_id, req.body.type_id, req.body.coverage_id_list, deadline, req.body.description];

    try {
        await db.query(q, [values]);
        return res.status(200).json({ message: "Scholarship created successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create scholarship", details: err.message });
    }
}

// the function that helps to create a new scholarship type entry in the database.
export const createScholarshipType = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to create a scholarship type entry.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a scholarship type entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create scholarship type entries." });

    const q = "INSERT INTO scholarship_type (`name`, `description`) VALUES (?)";
    const values = [req.body.name, req.body.description];

    try {
        await db.query(q, [values]);
        return res.status(200).json({ message: "Scholarship type created successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create scholarship type", details: err.message });
    }
}

// the function that helps to create what the scholarship covers data in the database.
export const createScholarshipCoverage = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to create a scholarship coverage entry.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a scholarship coverage entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create scholarship coverage entries." });

    const q = "INSERT INTO scholarship_coverage (`logo`,`name`) VALUES (?)";
    const values = [req.body.icon, req.body.name];

    try {
        await db.query(q, [values]);
        return res.status(200).json({ message: "Scholarship coverage created successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create scholarship coverage", details: err.message });
    }
}

// this function helps to create a new scholarship university entry in the database.
export const createScholarshipUniversity = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to create a scholarship university entry.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a scholarship university entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create scholarship university entries." });

    // inspect if the country exists in the database or not
    var country = await getCountryById(req.body.country_id);
    if (country.length === 0) return res.status(404).json({ error: "failed to create university: country not found!" });

    const q = "INSERT INTO universities (`logo`,`name`, `website`, `country_id`) VALUES (?)";
    const values = [req.body.logo, req.body.name, req.body.website, req.body.country_id];

    try {
        await db.query(q, [values]);
        return res.status(200).json({ message: "Scholarship university created successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create scholarship university", details: err.message });
    }
}

// this function helps to create a new scholarship education level entry in the database.
export const createScholarshipEducationLevel = async (req, res) => {

    // Security check to verify if the user is logged in and has the admin role to create a scholarship education level entry.
    if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a scholarship education level entry." });
    if (req.user.role_id !== 2) return res.status(403).json({ error: "Forbidden. Only admins can create scholarship education level entries." });

    const q = "INSERT INTO education_level (`name`) VALUES (?)";
    const values = [req.body.name];

    try {
        await db.query(q, [values]);
        return res.status(200).json({ message: "Scholarship education level created successfully" });
    } catch (err) {
        return res.status(500).json({ error: "Failed to create scholarship education level", details: err.message });
    }
}

// ------------------------------------- section 2 -----------------------------------------
// function which are used by other controllers to fetch the scholarship data by their name and id from the database.
export const getScholarshipEducationLevelById = async (id) => {
    const q = "SELECT id, name FROM education_level WHERE id = ?";
    try {
        const [results] = await db.query(q, [id]);
        return results;
    } catch (err) {
        return { error: "Failed to fetch scholarship education level", details: err.message };
    }
};

export const getScholarshipUniversityById = async (id) => {
    const q = "SELECT id, name, logo, country_id FROM universities WHERE id = ?";
    try {
        const [results] = await db.query(q, [id]);
        return results;
    } catch (err) {
        return { error: "Failed to fetch scholarship university", details: err.message };
    }
};

export const getScholarshipTypeById = async (id) => {
    const q = "SELECT id, name, description FROM scholarship_type WHERE id = ?";
    try {
        const [results] = await db.query(q, [id]);
        return results;
    }
    catch (err) {
        return { error: "Failed to fetch scholarship type", details: err.message };
    }
};

export const getScholarshipCoverageById = async (id) => {
    const q = "SELECT * FROM scholarship_coverage WHERE id = ?";
    try {
        const [results] = await db.query(q, [id]);
        return results;
    }
    catch (err) {
        return { error: "Failed to fetch scholarship coverage", details: err.message };
    }
};
