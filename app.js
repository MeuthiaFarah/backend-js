// impor express
const express = require("express");

// buat object/server
const app = express();

// definition port
app.listen(3000);

// middleware untuk ubah json ke objek yg bisa dibaca oleh express
app.use(express.json());

// definisikan dan pakai router
const router = require("./routes/api");
app.use(router);
