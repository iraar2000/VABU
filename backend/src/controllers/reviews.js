import { db } from "../connection.js";

// this function retrieves the review of a user by their user id
export const getReviewByUserId = async (req, res) => {
    try {


        const q = "SELECT user_id, service_id, rating, comment FROM reviews WHERE user_id = ?";
        const [result] = await db.query(q, [req.body.userId]);
        res.status(200).json(result);

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch reviews for user ID: " + req.body.userId, errorDetails: err.message });
    }
}

// this function retrieves all reviews from the database and includes the user details for each review.
export const getReviews = async (req, res) => {
    try {

        // query formation to get all the reviews from the database
        const q = "SELECT user_id, service_id, rating, comment FROM reviews";
        if (req.body.serviceId) q += " WHERE service_id = ?";

        const [result] = await db.query(q, [req.body.serviceId]);

        // from the result we need to add the user details
        const reviewsWithUserDetails = await Promise.all(
            result.map(async (review) => {
                const userQuery = "SELECT name, email, image, phone_number FROM users WHERE id = ?";
                const [userResults] = await db.query(userQuery, [review.user_id]);
                return { ...review, user: userResults[0] };
            })
        )

        // then returning the reviews with user details
        console.log(reviewsWithUserDetails);
        res.status(200).json(reviewsWithUserDetails);

    } catch (err) {
        res.status(500).json({ error: "Failed to fetch reviews", errorDetails: err.message });
    }
}

// this function helps to create a review for a service by a user and stores it in the database
export const createReview = async (req, res) => {
    try {
        // check is the user is allowed to create a review.
        if (!req.user) return res.status(401).json({ error: "Unauthorized. Please log in to create a review." });
        if (req.user.role_id !== 1) return res.status(403).json({ error: "Forbidden. Only customers can create reviews." });

        const values = [req.body.userId, req.body.serviceId, req.body.rating, req.body.comment];
        const q = "INSERT INTO reviews (user_id, service_id, rating, comment) VALUES (?)";

        // query to insert the review in the database
        await db.query(q, [values]);

        res.status(200).json({ message: "Review created successfully" });
    } catch (err) {
        res.status(500).json({ error: "Failed to create review.", errorDetails: err.message });
    }
}