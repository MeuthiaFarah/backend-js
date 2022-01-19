// import mysql
const mysql = require("mysql");

// import dotenv dan jalankan method config
require("dotenv").config();

// membuat koneksi database
// method menerima parameter host, user, password, database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// membuat koneksi dengan database menggunakan db.connect
db.connect((err) => {
  if (err) {
    console.log("Error Connecting" + err);
    return;
  } else {
    console.log("Connected to Database");
    return;
  }
});

module.exports = db;
