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
    const  id = await new Promise((resolve, reject) => {
      // insert data ke db
      const sql = "INSERT INTO students SET ?";
      db.query(sql, data, function (err, result) {
        resolve(result.insertId);
      });
    });

    // query dengan id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id, function(err, result) {
        resolve(result);
      })
    })
  }
}

// export class
module.exports = Student;
