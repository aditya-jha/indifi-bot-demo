"use strict";

const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");
const config = require("./config");

// create our app
const app = express();

// create server
const server = http.createServer(app);
const io = require("socket.io").listen(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "public"));

// set the view engine to ejs
app.set("view engine", "ejs");

// send all requests to index so browserHistory in React Router works
app.get("*", function (req, res) {
    const {main, vendor} = config.bundle.js;
    res.render("index", {
        bundlePath: main,
        vendorPath: vendor
    });
});

io.on("connection", (client) => {
    client.emit("message", "Welcome to Indifi Bot");
});

server.listen(config.port, function () {
    console.log("listening on http://localhost:" + config.port);
});
