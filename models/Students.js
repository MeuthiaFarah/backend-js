// import db
const db = require("../config/database");

// buat class model
class Student {
  // method untuk query all data
  static all(callback) {
    // query ke database
    const sql = "SELECT * FROM students";
    db.query(sql, function (err, result) {
      callback(result);
    });
  }
}

// export class
module.exports = Student;
