// the address of the backend server is :
// http://localhost:3000 or http://localhost:3084
// the ip address of the backend server is :
// http://127.0.0.1:3000 or http://127.0.0.1:3084

import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import visaRouter from './routes/visa.js';
import authRouter from './routes/auth.js';
import faqRouter from './routes/faq.js';
import reviewRouter from './routes/reviews.js';
import scholarshipRouter from './routes/scholarship.js';
import countryRouter from './routes/country.js';
import userRouter from './routes/user.js';
import servicesRouter from './routes/services.js';
import verifyJWTToken from './middleware/verifyJWTToken.js';

const app = express();

// middleware to parse JSON request bodies
app.use(express.json());
app.use(cookieParser());
// app.use(cors());

// Load environment variables from .env file
dotenv.config();

// CRUD API endpoint for echoing back the request body
// Create-post for creating data
// Read-get for reading data
// Update-put for updating data
// Delete-delete for deleting data

// authentication routes
app.use('/api/auth', authRouter);

// middleware
app.use(verifyJWTToken); // token verification middleware for all routes

// routes for different endpoints
app.use('/api/user', userRouter);
app.use('/api/visa', visaRouter);
app.use('/api/faq', faqRouter);
app.use('/api/reviews', reviewRouter);
app.use('/api/scholarship', scholarshipRouter);
app.use('/api/country', countryRouter);
app.use('/api/services', servicesRouter);

// the port number is set to the value of SERVER_PORT environment variable or defaults to 3000 if not set
const port = process.env.SERVER_PORT || 3000;

// the application listening on port 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});