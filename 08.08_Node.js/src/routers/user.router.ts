import { Router } from "express";
import { getUser } from "../controllers/user.controller";

const userRouter = Router()

// userRouter ini actionnya getUser ngapain dari path '/users' tidak ada lanjutannya hanya ini '/' brarti stop url nya
userRouter.get('/', getUser)

export { userRouter }

