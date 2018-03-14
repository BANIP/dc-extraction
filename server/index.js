// [LOAD PACKAGES]
const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();

// [CONFIGURE EXPRESS BODYPARSER ENGINE]
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// [CONFIGURE ROUTER]
var router = require("./router")(app);

// CONNECT TO MONGODB SERVER
var db = mongoose.connection;
db.on("error", console.error);
db.once("open", function(){
    console.log("Connected to mongod server");
})

mongoose.connect("mongodb://localhost/dcinside");

// [console]
console.log("dc module start")

 module.exports = app;