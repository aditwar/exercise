import { Request, Response } from "express";
import fs from 'fs';


interface IExpense {
    type: string;
    id: number;
    title: string;
    nominal: number;
    category: string;
    tipe: string;
    date: string;
}

export const getExpense = (req: Request, res: Response) => {

    // ini untuk mengubah (parse) fs yg di url itu menjadi js
    const expense: IExpense[] = JSON.parse(fs.readFileSync('./src/data/expense.json', 'utf-8'))

    // ini untuk menampilkan QUERY di TERMINAL
    console.log(req.query);    

    // ini untuk memFILTER data yg mw dihitung mana
    const { start, end } = req.query

    // ini artinya smua yg diFILTER bakalan TRUE atau smua dapat
    const data = expense.filter((item) => {
        let isValid = true

        // Nah kalau ini untuk range FILTER dari tanggal berapa gtu
        if (start && end) {

            // ini start dari tgl brp (lebih besar) sampai tgl brp (lebih kecil)
            isValid = isValid && new Date(item.date) >= new Date(start as string) &&
                                 new Date(item.date) <= new Date(end as string)
        }

        return isValid
    })

    // ini untuk total expense nya berapa
    // ini akan memfilter smua yg tipenya expense, lalu klw udh dpt direduce nilai (prev) preview + (curr)current dengan default nya 0 atau dimulai dari 0
    const totalExpense = data.filter((item) => item.type == "expense").reduce((prev, curr) => prev + curr.nominal, 0)

    // ini untuk total income nya berapa
    const totalIncome = data.filter((item) => item.type == "income").reduce((prev, curr) => prev + curr.nominal, 0)    

    res.status(200).send({
        status: 'Berhasil TIDAK ERROR',
        totalExpense, // ini brarti datanya total berapa
        totalIncome,
        expense: data
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
        msg: "expense ditambahkan yaa"
    })
}

export const editExpense = (req: Request, res: Response) => {
    const expense: IExpense[] = JSON.parse(fs.readFileSync('./src/data/expense.json', 'utf-8'))

    // ini untuk mendapat id ke berapanya sesuai url
    const id = +req.params.id

    // index keberapa yg mw diedit yg mana item.id = id, findIndex ini brarti dari 0 ke atas itu ada
    const idx = expense.findIndex((item) => item.id == id)

    // nah kalau jika tidak ada findIndex itu akan kurang dari 0, maka idx itu -1
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

    // untuk mendapatkan id ke berapa
    const id = +req.params.id

    // jika ingin delete, maka expense akan difilter dengan mengambil smua data yg id selain 2
    const data = expense.filter((item) => item.id !== id)

    fs.writeFileSync('./src/data/expense.json', JSON.stringify(data), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "expense didelete"
    })
}