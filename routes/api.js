// impor express
const express = require("express");

// Import StudentController
const StudentController = require("../controllers/StudentController");

// buat route modular
const router = express.Router();

//mendefinisikan routing
router.get("/", (req, res) => {
  res.send("Hello Meuthia");
});

// Routing untuk student
router.get("/students", StudentController.index);
router.post("/students", StudentController.store);
router.put("/students/:id", StudentController.update);
router.delete("/students/:id", StudentController.destroy);

module.exports = router;
