import { Router } from "express";
import { userRouter } from "./routers/user.router";
import { eventRouter } from "./routers/event.router";
import { eventRouter2 } from "./routers/event2.router";

const router = Router()

router.use('/users', userRouter)

router.use('/event', eventRouter)

router.use('/event2', eventRouter2)

export default router