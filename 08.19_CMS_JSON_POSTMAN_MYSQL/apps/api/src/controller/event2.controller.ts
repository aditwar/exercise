//! HANYA TERHUBUNG KE MYSQL maupun POSTMAN DAN DATABASE SUDAH DI SERVER ONLINE MYSQL

import { Request, Response } from 'express';
import db from '../config/db';
import { IEvent } from '../type';
import { QueryError } from 'mysql2';


export const getEvent2 = (req: Request, res: Response) => {

  // ini agar DATABASE_NAME selalu sama dengan .env, sehingga tinggal dipanggil dengan ${dbname}
  const dbname = process.env.DATABASE_NAME;

  // ini untuk pengaturan di MySQL dalam QUERY
  db.query(
    //! ini sesuai dengan QUERY dalam MySQL
    //! SAMAKAN DENGAN NAMA SCHEMA
    `SELECT * FROM ${dbname}`,

    (err: QueryError, result: IEvent[]) => {
      if (err) {
        return res.status(400).send({
          status: 'error',
          msg: err,
        });
      }
      return res.status(200).send({
        status: 'ok',
        msg: 'SELAMAT! SUDAH GET ALL PAKAI MYSQL LHO',
        event: result,
      });
    },
  );
};

export const getEvent2Id = (req: Request, res: Response) => {
  const dbname = process.env.DATABASE_NAME;

  db.query(
    // ! Ini jika ingin SELECT item pakai WHERE dan id pakai DYNAMIC PARAMS
    `SELECT * FROM ${dbname} WHERE id = ${req.params.id}`,

    (err: QueryError, result: IEvent[]) => {
      if (err) {
        return res.status(400).send({
          status: 'error',
          msg: err,
        });
      }
      return res.status(200).send({
        status: 'ok',
        msg: 'SELAMAT! SUDAH GET ITEM PAKAI MYSQL LHO',
        event: result,
      });
    },
  );
};

export const createEvent2 = (req: Request, res: Response) => {
  const dbname = process.env.DATABASE_NAME;
    
  //! Karena ingin sesuai dengan yg di INPUT apa jdi pakai variabel penampung
  const { title, type, category, nominal, date } = req.body;

  db.query(
    //! Ini jika ingin INSERT
    `INSERT INTO ${dbname}(title, type, category, nominal, date)
    VALUES
	    ('${title}', '${type}', '${category}', ${nominal}, '${date}')`,

    (err: QueryError) => {
      if (err) {
        return res.status(400).send({
          status: 'error',
          msg: err,
        });
      }
      return res.status(200).send({
        status: 'ok',
        msg: 'SELAMAT! SUDAH CREATE PAKAI MYSQL LHO',
      });
    },
  );
};

export const updateEvent2 = (req: Request, res: Response) => {
  const dbname = process.env.DATABASE_NAME;

  // INI UNTUK VARIABEL PENAMPUNG
  const query = [];

  // VARIABEL INI kemudian di PUSH dengan KEY didalam req.body, tapi req.body ini memakai "" shg di MySQL OTO dikoreksi
  for (let key in req.body) {
    query.push(`${key} = "${req.body[key]}"`);
  }

  db.query(
    `UPDATE ${dbname} SET ${query.join(', ')} WHERE id = ${req.params.id}`,
    (err: QueryError) => {
      if (err) {
        return res.status(400).send({
          status: 'error',
          msg: err,
        });
      }
      return res.status(200).send({
        status: 'ok',
        msg: 'SELAMAT! SUDAH UPDATE PAKAI MYSQL LHO',
      });
    },
  );
};

export const deleteEvent2 = (req: Request, res: Response) => {
    const dbname = process.env.DATABASE_NAME;

  db.query(
    // ! Ini jika ingin SELECT item pakai WHERE dan id pakai DYNAMIC PARAMS
    `DELETE FROM ${dbname} WHERE id = ${req.params.id}`,

    (err: QueryError) => {
      if (err) {
        return res.status(400).send({
          status: 'error',
          msg: err,
        });
      }
      res.status(200).send({
        status: 'ok',
        msg: 'SELAMAT! SUDAH DELETE PAKAI MYSQL LHO'
      });
    },
  );
};

