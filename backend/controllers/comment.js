const Comment = require("../models/Comment");

exports.getAllComment = async (req, res, next) => {
  try {
      //trouver tous les commentaires par post
    const [comments] = await Comment.findAll(req.params.id);

    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json(error)
  }
};

exports.createNewComment = async (req, res, next) => {
  try {
    
    result = await Comment.save(req.body);

    res.status(201).json({ id: result[0].insertId,...req.body });
  } catch (error) {
    res.status(500).json(error)
  }
};


exports.deleteComment = async (req, res, next) => {
  try {
    let commentId = req.params.id;

    await Comment.deleteOne(commentId);

    res.status(200).json("commentaire supprimé");
  } catch (error) {
    res.status(500).json(error)
  }
};
