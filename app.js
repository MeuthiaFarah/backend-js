// import module
const express = require("express");
// import router
const router = require("./routes/api");

// buat objek untuk server
const app = express();

// definisikan port
app.listen(3000);

// mengubah data menjadi json
app.use(express.json());

// gunakan router
app.use(router);
