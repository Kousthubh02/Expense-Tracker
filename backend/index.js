// import db  from './db/db.js'
const express = require("express");
const cors = require("cors");
const { db } = require("./db/db.js");
const { readdirSync } = require("fs");
const app = express();
// const Chat  = require("./models/incomeModel.js")

require("dotenv").config();
 // require and config the dotenv file
const PORT_NO = process.env.PORT;

// middlewares
app.use(express.json());
app.use(cors());

// const chat1 = new Chat({
//   title: "vighnesh",
//   amount: "4522",
//   date: new Date(),
//   category: "Salary",
//   description: "sasasa"
// });

// chat1.save().then(res => {
//   console.log(res);
// })

// routes
readdirSync('./routes').map((route) => app.use('/api/v1', require('./routes/' + route)))

const server = () => {
  db();

  app.listen(PORT_NO, () => {
    console.log("Listening to Port: ", PORT_NO);
  })
};

server();
