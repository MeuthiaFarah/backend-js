// import db
const db = require("../config/database");

// buat class model
class Student {
  // method untuk query all data
  static all() {
    return new Promise((resolve, reject) => {
      // query ke database
      const sql = "SELECT * FROM students";
      db.query(sql, function (err, result) {
        resolve(result);
      });
    });
  }

  // method untuk query create data
  static async create(data) {
    const id = await new Promise((resolve, reject) => {
      // insert data ke db
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, function (err, result) {
        resolve(result.insertId);
      });
    });

    // query by id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, result) => {
        resolve(result);
      });
    });
  }

  // method untuk query update data
  // mencari id
  static find(id) {
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, (err, result) => {
        // destructing array
        const [student] = result;
        resolve(student);
      });
    });
  }

  static async update(id, data) {
    // query update data
    await new Promise((resolve, reject) => {
      const sql = "UPDATE students SET ? WHERE id = ?";
      // params data harus lbh dulu karena data nya dikirim dlu baru id nya
      db.query(sql, [data, id], (err, result) => {
        resolve(result);
      });
    });

    return this.find(id);
  }

  static async delete(id) {
    await new Promise((resolve, reject) => {
      const sql = "DELETE FROM students WHERE id = ?";
      db.query(sql, id, (err, result) => {
        resolve(result);
      })
    })
  }
}

// export class
module.exports = Student;
