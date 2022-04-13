const db = require("../config/db");

class Comment {
 
  static save(comment) {
    let sql = `
    INSERT INTO comment(
      content,
      userid,
      postid
    )
    VALUES(
      '${comment.content}',
      '${comment.userid}',
      '${comment.postid}'
    )
    `;

    return db.execute(sql);
  }

  static findAll(postid) {
    let sql = `SELECT * FROM comment WHERE postid = "${postid}"`;

    return db.execute(sql);
  }

  static deleteOne(id){
    let sql = `DELETE FROM comment WHERE id = "${id}";`;

    return db.execute(sql);
  }

}

module.exports = Comment;
