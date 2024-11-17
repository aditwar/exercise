// INI MERUPAKAN ACTION nya mau ngapain

import { Request, Response } from 'express';
import fs from 'fs';

// ini untuk menampung tipe data user menggunakan interface IUser yg berupa ARRAY
interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
}

// ini actionnya request users IUser, dan ngirim response sebagai status
// parameter req itu tipe datanya Request dari express, dan res tipe datanya Response
export const getUser = (req: Request, res: Response) => {

    // db dari user akan membaca data/users.json ini harus diubah ke biasa dengan method JSON.parse
    // cara aksesnya dengan Parameter fs file sistem yg membaca data url itu dengan option utf-8
    const users: IUser[] = JSON.parse(fs.readFileSync('./src/data/users.json', 'utf-8'))

    // setelah membaca data users.json itu akan mengirim respon 200
    // ini untuk memberi response dengan status 200 dan dikirim status ok dengan data users
    res.status(200).send({
        status: "ok",
        users
    })
}

