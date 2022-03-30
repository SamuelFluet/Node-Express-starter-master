const User = require("../models/Users");
const jwt = require('jsonwebtoken')

exports.signup = async (req, res, next) => {
  try {
    let { email, password, username} = req.body;
    let user = new User(email, password, username);

    user = await user.save();

    res.status(201).json({ message: "User created" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let [user, _] = await User.findById(email);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    next(error);
  }
};
