"use strict";

import http from "http";
import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path";
import config from "./config";
import {
    SOCKET_CONNECTION,
    SOCKET_DISCONNECTION,
    SOCKET_MESSAGE
} from "./src/shared/socketContants";

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

io.on(SOCKET_CONNECTION, (client) => {
    client.emit(SOCKET_MESSAGE, "Welcome to Indifi Bot");

    client.on(SOCKET_DISCONNECTION, () => {
        console.log("client disconnected from server");
    });

    client.on(SOCKET_MESSAGE, (message) => {
        console.log("message from client", message);
    });
});

server.listen(config.port, function () {
    console.log("listening on http://localhost:" + config.port);
});
