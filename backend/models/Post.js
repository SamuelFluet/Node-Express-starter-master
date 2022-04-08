const db = require("../config/db");

class Post {
 
  static save(post) {
    let sql = `
    INSERT INTO post(
      content,
      imageurl,
      userid
    )
    VALUES(
      '${post.content}',
      '${post.imageurl}',
      '${post.userid}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM post;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM post WHERE id = "${id}";`;

    return db.execute(sql);
  }

  static deleteOne(id){
    let sql = `DELETE FROM post WHERE id = "${id}";`;

    return db.execute(sql);
  }

}

module.exports = Post;
