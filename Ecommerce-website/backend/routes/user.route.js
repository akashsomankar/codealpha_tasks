import express from 'express';
import { adminLogin, loginUser, logoutUser, registerUser } from '../controllers/user.controllers.js';

const userRouter = express.Router();

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.post("/logout", logoutUser)
userRouter.post("/admin", adminLogin)

export default userRouter;
