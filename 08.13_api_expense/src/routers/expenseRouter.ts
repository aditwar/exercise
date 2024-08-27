import { Router } from "express";
import { createExpense, getExpense, getExpenseId, editExpense } from "../controller/expenseController";

const expenseRouter = Router()

expenseRouter.get('/', getExpense)
expenseRouter.get('/:id', getExpenseId)
expenseRouter.post('/', createExpense)
expenseRouter.patch('/:id', editExpense)

export { expenseRouter }