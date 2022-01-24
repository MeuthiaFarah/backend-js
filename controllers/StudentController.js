// TODO 3: Import data students dari folder data/students.js
const student = require("../models/Students");

// Membuat Class StudentController
class StudentController {
  async index(req, res) {
    const students = await student.all();

    // handle jika data kosong
    // data array harus lebih dari 0
    if (students.length > 0) {
      const data = {
        message: `Menampilkkan semua students`,
        data: students,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Data kosong`,
      };

      res.status(200).json(data);
    }
  }

  async store(req, res) {
    // destructing data
    const { nama, nim, email, jurusan } = req.body;

    // jika data undifined maka tampilkan pesan error
    if (!nama || !nim || !email || !jurusan) {
      const data = {
        message: `Semua data harus dikirim`,
      };

      return res.status(422).json(data);
    }

    // else
    const students = await student.create(req.body);
    const data = {
      message: `Menambahkan data student: `,
      data: students,
    };

    return res.status(201).json(data);
  }

  async update(req, res) {
    // menerima parameter id student
    const { id } = req.params;
    // find student by id
    const students = await student.find(id);

    // kalau data ditemukan
    if (students) {
      // update data
      const studentUpdated = await student.update(id, req.body);

      const data = {
        message: `Mengupdate data student id ${id}`,
        data: studentUpdated,
      };

      res.status(200).json(data);
    } else {
      // kirim respon error
      const data = {
        message: `Data tidak ditemukan`,
      };
      // respon status harus lebih dulu daripada respon data nya
      res.status(404).json(data);
    }
  }

  async destroy(req, res) {
    // menerima parameter id
    const { id } = req.params;
    // find student by id
    const students = await student.find(id);

    // kalau data ditemukan
    if (students) {
      // code dijalankan
      // ga perlu dimasukin ke variable karena data yg dihapus ga akan ditampilkan lagi
      await student.delete(id);
      const data = {
        message: `Data berhasil dihapus`,
      };
      // respon status harus lebih dulu daripada respon data nya
      res.status(200).json(data);
    } else {
      const data = {
        message: `Data tidak ditemukan`,
      };
      // respon status harus lebih dulu daripada respon data nya
      res.status(404).json(data);
    }
  }

  // menampilkan data student sesuai dengan id
  async show(req, res) {
    const { id } = req.params;

    const students = await student.find(id);

    // jika data ditemukan
    if (students) {
      const data = {
        message: `Menampilkan data student id ${id}`,
        data: students,
      };

      res.status(200).json(data);
    } else {
      const data = {
        message: `Data tidak ditemukan`,
      };

      res.status(404).json(data);
    }
  }
}

// buat objek untuk class StudentController
const object = new StudentController();

// export file
module.exports = object;
