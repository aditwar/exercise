// SETUP KEDUA

import { Request, Response } from "express";
import prisma from "../prisma";

export class AuthorController {
    async getAuthor(req: Request, res: Response) {
        try {
            // findMany() mencari banyak 
            const author = await prisma.author.findMany()

            res.status(200).send({
              status: 'ok',
              msg: 'Selamat! GET Author dengan PRISMA',
              author,
            });
        } catch (err) {
            res.status(400).send({
              status: 'error',
              msg: err,
            });
        }
    }

    async getAuthorId(req: Request, res: Response) {
        try {
            const author = await prisma.author.findUnique({

                // "+" ini untuk mengkonversi ke number
                where: { id: +req.params.id }
            })

            // jika ID nya tidak ada di database
            if (!author) throw 'MAAF! ID Author tidak ditemukan'

            res.status(200).send({
              status: 'ok',
              msg: 'Selamat! GET ID Author dengan PRISMA',
              author,
            });
        } catch (err) {
            res.status(400).send({
              status: 'error',
              msg: err,
            });
        }
    }

    async createAuthor(req: Request, res: Response) {
        try {
            // menginitial ITEM di body yg akan dibuat
            const { name, email, password } = req.body

            // MEMBUAT AUTHOR dengan PRISMA yg berupa data nama, email, password
            const author = await prisma.author.create({
                data: { name, email, password }
            })

            // INI JIKA BERHASIL, MAKA MENJALANKAN author
            res.status(200).send({
                status: 'ok',
                msg: 'Selamat! Author CREATED dengan PRISMA',
                author
            })

        // NANGKEP ERROR
        } catch (err) {
            res.status(400).send({
                status: 'error',
                msg: err
            })
        }
    }

    async updateAuthor(req: Request, res: Response) {
        try {
            const author = await prisma.author.update({
                where: { id: +req.params.id },
                data: req.body
            })

            // jika ID nya tidak ada di database
            if (!author) throw 'MAAF! ID Author tidak ditemukan'

            res.status(200).send({
              status: 'ok',
              msg: 'Selamat! UPDATE Author dengan PRISMA',
              author,
            });
        } catch (err) {
            res.status(400).send({
              status: 'error',
              msg: err,
            });
        }
    }

    async deleteAuthor(req: Request, res: Response) {
        try {

            const author = await prisma.author.delete({
                where: { id: +req.params.id }
            })
            
            // jika ID nya tidak ada di database
            if (!author) throw 'MAAF! ID Author tidak ditemukan'

            res.status(200).send({
              status: 'ok',
              msg: 'Selamat! DELETE Author dengan PRISMA',
              author,
            });
        } catch (err) {
            res.status(400).send({
              status: 'error',
              msg: err,
            });
        }
    }
}