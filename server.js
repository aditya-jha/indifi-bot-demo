"use strict";

const express = require('express');
const io = require("socket.io")();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

// create our app
const app = express();
app.io = io;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(4000, function () {
   console.log("listening on http://localhost:4000");
});