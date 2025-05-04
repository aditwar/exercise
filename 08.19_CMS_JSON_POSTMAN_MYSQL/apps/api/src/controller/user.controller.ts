// HANYA TERHUBUNG KE JSON SERVER pada file users.json './src/data'

import { Request, Response } from 'express'
import { IUser } from "../type";

// fs dari FILE SYSTEM
import fs from 'fs'



export const getUser = (req: Request, res: Response) => {

    //! ini untuk mengubah data dari file users.json (database sementara) yg dari JSON ke JS biasa (.parse) | utf-8 ini tipe HTML
    const users: IUser[] = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf-8'))

    // ini untuk mengirim dan kasih status berhasil tidak
    res.status(200).send({
        status: "ok",
        users
    })
}

export const getUserId = (req: Request, res: Response) => {
    const users: IUser[] = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf-8'))
    const id = +req.params.id
    const data = users.find((item) => item.id == id)

    if (!data) {
        return res.status(404).send({
            status: 'error',
            msg: 'users not found'
        })
    }

    res.status(200).send({
        status: 'ok',
        users: data
    })
}


export const createUser = (req: Request, res: Response) => {
    const users: IUser[] = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf-8'))
    const id = Math.max(...users.map((item) => item.id)) + 1

    users.push({
        id,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    })

    fs.writeFileSync('./src/data/users.json', JSON.stringify(users), 'utf-8')

    res.status(200).send({
        status: 'ok',
        msg: "SELAMAT! BERHASIL CREATE PAKAI JSON SERVER"
    })
}