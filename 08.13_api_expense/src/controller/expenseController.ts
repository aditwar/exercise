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

export const editExpense = (req: Request, res: Response) => {
    const expense: IExpense[] = JSON.parse(fs.readFileSync('./src/data/expense.json', 'utf-8'))

    // ini untuk mendapat id ke berapanya sesuai url
    const id = +req.params.id

    // index keberapa yg mw diedit yg mana item.id = id
    const idx = expense.findIndex((item) => item.id == id)

    // ini untuk validasi jika req melebihi index yg ada
    if (idx == -1) {
        return res.status(400).send({
            status: 'error',
            msg: "expense tidak ada"
        })
    }

    // expense index keberapa "expense[idx]" trus yg mw diganti body sesuai Request "req.body"
    expense[idx] = { ...expense[idx], ...req.body }

    fs.writeFileSync('./src/data/expense.json', JSON.stringify(expense), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "expense edited!"
    })
}


export const deleteExpense = (req: Request, res: Response) => {
    const expense: IExpense[] = JSON.parse(fs.readFileSync('./src/data/expense.json', 'utf-8'))

    // untuk mendapatkan id
    const id = +req.params.id

    // jika ingin delete, maka expense akan difilter dengan mengambil smua data yg id selain 2
    const data = expense.filter((item) => item.id !== id)

    fs.writeFileSync('./src/data/expense.json', JSON.stringify(data), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "expense didelete"
    })
}