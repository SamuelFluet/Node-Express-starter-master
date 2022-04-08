const express = require('express')
const app = express()
const userRouter = require('./routes/auth')
const postRouter = require('./routes/post')


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(express.json())
app.use("/api/auth", userRouter)
app.use("/api/post", postRouter)

module.exports = app;