import express, { Application, Request, Response } from 'express';
import router from './router';
import db from './config/db';
import 'dotenv/config';
import dotenv from 'dotenv';


//! ini URL untuk BACKENDnya [API], dan FRONTEND URL nya 3000 di .env.local (pengaturan untuk nyambung ke API juga disitu)
const PORT: number = 9000

const app: Application = express ()

// SETUP untuk MEMBACA REQUEST BODYnya
app.use(express.json())

//! GUNAKAN URL ENDPOINT (TERAKHIR) /api
app.get('/api', (req: Request, res: Response)=> {
    res.status(200).send({
        status: 'TERKONEKSI',
        msg: 'Selamat!!! Sudah nyambung API'
    })
})

app.use('/api', router)

// ini untuk menampilkan settingan .env sambungan ke database
console.log(dotenv.config())

//! SAMBUNGIN KE DATABSE MYSQL
db.getConnection((err, connection) => {
    if(err) {
        return console.log(err);
    }
    console.log("SELAMAT SUDAH NYAMBUNG KE DATABSE", connection.threadId);
})

app.listen(PORT, ()=> {
    //! PERHATIKAN INI URL untuk BACKEND TERAKHIR /api
    console.log(`[API] : http://localhost:${PORT}/api`)
})