import { Router } from "express";
import { getReviews, getReviewByUserId, createReview } from '../controllers/reviews.js';

const reviewRouter = Router();

reviewRouter.get('/', getReviews);
reviewRouter.get('/user', getReviewByUserId);
reviewRouter.post('/add', createReview);

export default reviewRouter;
