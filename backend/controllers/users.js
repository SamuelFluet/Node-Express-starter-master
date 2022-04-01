const User = require("../models/Users");
const jwt = require('jsonwebtoken')

exports.signup = async (req, res, next) => {
  try {
    let { email, password, username} = req.body;
    let user = new User(email, password, username);

    user = await user.save();

    res.status(201).json({ message: "User created" });
  } catch (error) {
    res.status(500).json(error)
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;

    let result = await User.findByEmail(email);
    let user = result[0][0]
    console.log(user)
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error)
    next(error);
  }
};
