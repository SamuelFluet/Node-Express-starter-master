const express = require("express");
const commentControllers = require("../controllers/comment");
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").post(commentControllers.createNewComment);
router.route("/:id").delete(commentControllers.deleteComment);
router.route("/:id").get(commentControllers.getAllComment);

module.exports = router;
