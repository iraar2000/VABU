import Router from "express";
import { addUserRole, getUserRoles } from "../controllers/user.js";

const userRouter = Router();

userRouter.post('/add-role', addUserRole);
userRouter.get('/roles', getUserRoles);

export default userRouter;