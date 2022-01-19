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
}

// export class
module.exports = Student;
