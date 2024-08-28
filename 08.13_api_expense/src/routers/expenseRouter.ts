import { Router } from "express";
import { createExpense, getExpense, getExpenseId, editExpense, deleteExpense } from "../controller/expenseController";

const expenseRouter = Router()

expenseRouter.get('/', getExpense)
expenseRouter.get('/:id', getExpenseId)
expenseRouter.post('/', createExpense)

// /:id itu siapa aja yg mw diedit, apa aja yg mw diedit lwt body (postman)
expenseRouter.patch('/:id', editExpense)

// ini sama seperti edit, tp pakai deleteExpense
expenseRouter.delete('/:id', deleteExpense)

export { expenseRouter }