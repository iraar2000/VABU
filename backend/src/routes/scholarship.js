import { Router } from "express";
import { createScholarship, getScholarships, createScholarshipCoverage, createScholarshipEducationLevel, createScholarshipType, createScholarshipUniversity } from "../controllers/scholarship.js";

const scholarshipRouter = Router();

scholarshipRouter.get('/', getScholarships);
scholarshipRouter.post('/add', createScholarship);
scholarshipRouter.post('/add-type', createScholarshipType);
scholarshipRouter.post('/add-coverage', createScholarshipCoverage);
scholarshipRouter.post('/add-university', createScholarshipUniversity);
scholarshipRouter.post('/add-education-level', createScholarshipEducationLevel);

export default scholarshipRouter;
