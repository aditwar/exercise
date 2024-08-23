import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const userRouter = Router()

// userRouter ini mengambil getUser dari path '/', 
userRouter.get('/', getUser)

export { userRouter }