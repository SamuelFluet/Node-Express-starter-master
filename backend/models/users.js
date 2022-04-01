const db = require("../config/db");

class User {
  constructor(email, password, username) {
    this.email= email;
    this.password = password;
    this.username = username;
  }

  save() {
    let sql = `
    INSERT INTO users(
      email,
      password,
      username
    )
    VALUES(
      '${this.email}',
      '${this.password}',
      '${this.username}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM users;";

    return db.execute(sql);
  }

  static findByEmail(email) {
    let sql = `SELECT * FROM users WHERE email = "${email}";`;

    return db.execute(sql);
  }
}

module.exports = User;
