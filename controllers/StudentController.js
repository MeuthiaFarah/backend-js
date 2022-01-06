// buat Class Controller
class StudentController {
  index(req, res) {
    const data = {
      message: "Menampilkan semua student",
      data: [],
    };

    res.json(data);
  }

  store(req, res) {
    const { nama, alamat } = req.body;
    const data = {
      message: `Menambahkan Data Student :  nama ${nama}  alamat ${alamat}`,
      data: [],
    };
    res.json(data);
  }

  update(req, res) {
    const { id } = req.params;
    const data = {
      message: `Mengedit Data Student id ${id}`,
      data: [],
    };
    res.json(data);
  }

  destroy(req, res) {
    const { id } = req.params;
    res.send("Menghapus Data Student id: " + id);
  }
}

// buat objek
const object = new StudentController();

// export
module.exports = object;
