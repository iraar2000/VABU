import { Router } from "express";
import { createCountry, getCountries } from "../controllers/country.js";

const countryRouter = Router();

countryRouter.get('/', getCountries);
countryRouter.post('/add', createCountry);

export default countryRouter;
