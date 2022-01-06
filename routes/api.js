// import modules
const express = require("express");

// import StudentController
const StudentController = require("../controllers/StudentController");

// buat objek route
const router = express.Router();

// route awal
router.get("/", (req, res) => {
  res.send("Hello My Task");
});

// routing students
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);


module.exports = router;