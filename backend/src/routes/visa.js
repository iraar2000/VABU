import { Router } from "express";
import { getVisa, createVisa, createVisaType } from '../controllers/visa.js';

const visaRouter = Router();

visaRouter.get('/', getVisa);
visaRouter.post('/add', createVisa);
visaRouter.post('/add-type', createVisaType);

export default visaRouter;
