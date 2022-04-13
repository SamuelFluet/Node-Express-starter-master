const User = require("../models/Users");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

exports.signup = async (req, res, next) => {
  try {
    let { email, password, username} = req.body;
    bcrypt.hash(password, 10).then((hash)=>{
      let user = new User(email, hash, username);
      console.log(hash)
      user.save().then(()=>{
        res.status(201).json({ message: "User created" });
      }).catch((error)=>{
        res.status(400).json(error)
      })      
    })
    .catch((error)=>{
      res.status(400).json(error)
    })    
  } catch (error) {
    res.status(500).json(error)
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    //vérifier si m'email existe et le stocker dans user
    let result = await User.findByEmail(email);
    const user = result[0][0]
    // comparer si le mdp est le même
    bcrypt.compare(password, user.password).then((valid)=>{
      // valid est false si le mdp est incorrect
      if(!valid){
        res.status(401).json("mot de passe incorrect")
      }else{
        // renvoie une réponse où il ya cet objet
        res.status(200).json({
          user:user,
          token: jwt.sign({
          userId:user.id
          }, "USER_TOKEN_SECRET", 
          {
            expiresIn:"24h"
          })
        })
      }
    })
  } catch (error) {
    res.status(500).json(error)
    next(error);
  }
};

exports.me = (req, res, next)=>{
  const user = req.auth
  res.status(200).json(user)
}
