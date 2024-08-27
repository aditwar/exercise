import { Request, Response } from "express";
import fs from 'fs';


interface IExpense {
    id: number;
    title: string;
    nominal: number;
    category: string;
    tipe: string;
    date: string;
}

export const getExpense = (req: Request, res: Response) => {
    const expense: IExpense[] = JSON.parse(fs.readFileSync('./src/data/expense.json', 'utf-8'))

    res.status(200).send({
        status: 'ok',
        expense
    })
}

export const getExpenseId = (req: Request, res: Response) => {
    const expense: IExpense[] = JSON.parse(fs.readFileSync('./src/data/expense.json', 'utf-8'))
    const id = +req.params.id
    const data = expense.find((item) => item.id == id)

    if (!data) {
        return res.status(404).send({
            status: 'error',
            msg: 'Expense not found'
        })
    }

    res.status(200).send({
        status: 'ok',
        expense: data
    })
}

export const createExpense = (req: Request, res: Response) => {
    const expense: IExpense[] = JSON.parse(fs.readFileSync('./src/data/expense.json', 'utf-8'))
    const id = Math.max(...expense.map((item) => item.id)) + 1

    expense.push({ id, ...req.body })

    fs.writeFileSync('./src/data/expense.json', JSON.stringify(expense), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "expense added!"
    })
}