import Router from "express";
import { getServices, createService } from "../controllers/services.js";

const servicesRouter = Router();

servicesRouter.get('/', getServices);
servicesRouter.post('/add', createService);

export default servicesRouter;