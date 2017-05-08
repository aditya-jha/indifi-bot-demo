"use strict";

const http = require("http");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const path = require("path");

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
    const manifest = require("./manifest.json");

    res.render("index", {
        bundlePath: manifest.main.js.substring(8),
        vendorPath: manifest.vendor.js.substring(8)
    });
});


io.on("connection", (client) => {
    debugger;
    client.emit("message", "Welcome");
});

const port = process.env.PORT || 4000;

server.listen(port, function () {
    console.log("listening on http://localhost:" + port);
});
