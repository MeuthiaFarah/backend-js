// impor mysql
const mysql = require("mysql");

// import dotenv
require("dotenv").config();

// buat koneksi: createConnection
const database = mysql.createConnection({
  // host, uuser, password, database
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

// connect ke database
database.connect(function (err) {
  if (err) {
    console.log("Koneksi error" + err);
    return;
  } else {
    console.log("Koneksi berhasil");
    return;
  }
});

// export db
module.export = database;
