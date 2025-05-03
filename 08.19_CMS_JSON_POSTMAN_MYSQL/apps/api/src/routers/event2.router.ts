import { Router } from "express";
import { createEvent2, deleteEvent2, getEvent2, getEvent2Id, updateEvent2 } from "../controller/event2.controller";

const eventRouter2 = Router()

eventRouter2.get('/', getEvent2)
eventRouter2.get('/:id', getEvent2Id)
eventRouter2.post('/', createEvent2)
eventRouter2.patch('/:id', updateEvent2)
eventRouter2.delete('/:id', deleteEvent2)

export { eventRouter2 }

