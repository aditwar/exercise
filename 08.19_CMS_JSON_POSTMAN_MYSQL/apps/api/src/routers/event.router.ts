import { Router } from "express";
import { getEvent, getEventId, createEvent, editEvent, deleteEvent } from "../controller/event.controller";

const eventRouter = Router()

eventRouter.get('/', getEvent)

// '/:id' adalah URL dengan PARAMS
eventRouter.get('/:id', getEventId)

eventRouter.post('/', createEvent)

// /:id itu params id yg mw diedit, apa aja yg mw diedit lwt body (postman)
eventRouter.patch('/:id', editEvent)

// ini sama seperti edit, tp pakai deleteEvent
eventRouter.delete('/:id', deleteEvent)

export { eventRouter }