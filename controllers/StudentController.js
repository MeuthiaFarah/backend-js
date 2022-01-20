// TODO 3: Import data students dari folder data/students.js
const student = require("../models/Students");

// Membuat Class StudentController
class StudentController {
  async index(req, res) {
    // TODO 4: Tampilkan data students
    // code here
    const students = await student.all();
    const data = {
      message: "Menampilkkan semua students",
      data: students,
    };

    res.json(data);
  }

  async store(req, res) {
    const students = await student.create(req.body);
    // TODO 5: Tambahkan data students
    // code here
    const data = {
      message: `Menambahkan data student: `,
      data: students,
    };

    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const { nama } = req.body;

    // TODO 6: Update data students
    // code here
    students[id] = nama;
    const data = {
      message: `Mengedit student id ${id}, nama ${nama}`,
      data: students,
    };

    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;

    // TODO 7: Hapus data students
    // code here
    students.splice(id, 1);
    const data = {
      message: `Menghapus student id ${id}`,
      data: students,
    };

    res.json(data);
  }
}

// buat objek untuk class StudentController
const object = new StudentController();

// export file
module.exports = object;
