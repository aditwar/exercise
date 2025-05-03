// HANYA TERHUBUNG KE POSTMAN

import { Request, Response } from 'express'
import { IEvent } from '../type';

// fs dari FILE SYSTEM
import fs from 'fs'



export const getEvent = (req: Request, res: Response) => {

    // ini untuk mengubah (parse) fs yg di url itu menjadi js
    const event: IEvent[] = JSON.parse(fs.readFileSync('./src/data/event.json', 'utf-8'))

    //! FILTER BERDASAR TANGGAL DATE
    // ini untuk memFILTER data yg mw dihitung mana berdasarkan parameter start end di QUERY POSTMAN
    const { start, end } = req.query

    const data = event.filter((item) => {

        // ini artinya smua yg diFILTER bakalan TRUE atau smua dapat
        let isValid = true

        // Nah kalau ini untuk range FILTER dari tanggal berapa sesuaikan kolom KEY DAN VALUE
        if (start && end) {

            // ini start dari tgl brp (>=) sampai tgl brp (<=)
            isValid = isValid && new Date(item.date) >= new Date(start as string) &&
                                 new Date(item.date) <= new Date(end as string)
        }

        return isValid
    })

    //! FILTER
    // ini untuk total expense nya berapa
    // ini akan memfilter smua yg tipenya expense, lalu klw udh dpt, nilai (prev) preview ditambah (+) (curr)current dengan default nya 0 atau jika tidak ada nilainya itu diganti 0
    const totalExpense = data.filter((item) => item.type == "expense").reduce((prev, curr) => prev + curr.nominal, 0)

    // ini untuk total income nya berapa
    const totalIncome = data.filter((item) => item.type == "income").reduce((prev, curr) => prev + curr.nominal, 0)    

    res.status(200).send({
        status: 'Berhasil TIDAK ERROR',
        totalExpense, // ini brarti datanya total berapa
        totalIncome,
        event: data
    })
}

export const getEventId = (req: Request, res: Response) => {
    const event: IEvent[] = JSON.parse(fs.readFileSync('./src/data/event.json', 'utf-8'))
    const id = +req.params.id
    const data = event.find((item) => item.id == id)

    if (!data) {
        return res.status(404).send({
            status: 'error',
            msg: 'Event not found'
        })
    }

    res.status(200).send({
        status: 'ok',
        event: data
    })
}

export const createEvent = (req: Request, res: Response) => {
    const event: IEvent[] = JSON.parse(fs.readFileSync('./src/data/event.json', 'utf-8'))
    const id = Math.max(...event.map((item) => item.id)) + 1

    event.push({ id, ...req.body })

    fs.writeFileSync('./src/data/event.json', JSON.stringify(event), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "event ditambahkan yaa"
    })
}

export const editEvent = (req: Request, res: Response) => {
    const event: IEvent[] = JSON.parse(fs.readFileSync('./src/data/event.json', 'utf-8'))

    // ini untuk mendapat id ke berapanya sesuai url
    const id = +req.params.id

    // index keberapa yg mw diedit yg mana item.id = id, findIndex ini brarti dari 0 ke atas itu ada
    const idx = event.findIndex((item) => item.id == id)

    // nah kalau jika tidak ada findIndex itu akan kurang dari 0, maka idx itu -1
    if (idx == -1) {
        return res.status(400).send({
            status: 'error',
            msg: "event tidak ada"
        })
    }

    // event index keberapa "event[idx]" trus yg mw diganti body sesuai Request "req.body"
    event[idx] = { ...event[idx], ...req.body }

    fs.writeFileSync('./src/data/event.json', JSON.stringify(event), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "event edited!"
    })
}


export const deleteEvent = (req: Request, res: Response) => {
    const event: IEvent[] = JSON.parse(fs.readFileSync('./src/data/event.json', 'utf-8'))

    // untuk mendapatkan id ke berapa
    const id = +req.params.id

    // jika ingin delete, maka event akan difilter dengan mengambil smua data yg id selain 2
    const data = event.filter((item) => item.id !== id)

    fs.writeFileSync('./src/data/event.json', JSON.stringify(data), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "event didelete"
    })
}