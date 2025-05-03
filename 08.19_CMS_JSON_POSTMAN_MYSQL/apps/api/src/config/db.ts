// ! ini SETUP untuk ke DATABASE yg sudah nyambung ke MySQL

import "dotenv/config"
import mysql from "mysql2"
import dotenv from "dotenv"

// Ini untuk menginitial benar2 menggunakan dotenv sebagai config
dotenv.config()

const db = mysql.createPool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME
});

export default db

