import { Router } from "express";
import { createUser, getUser, getUserId } from "../controller/user.controller";

const userRouter = Router()

userRouter.get('/', getUser)
userRouter.get('/:id', getUserId)
userRouter.post('/', createUser)


export { userRouter }