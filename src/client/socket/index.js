/**
 * Created by aditya on 9/5/17.
 */

import io from "socket.io-client";
import {
    SOCKET_MESSAGE,
    SOCKET_CONNECTION
} from "../../shared/socketContants";
import {addMessage} from "./../components/InputMessage/actions";
import store from "../store";

let socket;

export function connect(connectionString) {
    if (!socket) {
        socket = connectionString ? io(connectionString) : io();
        console.log("socket connection established", socket);
    }
    return socket;
}

export function setUpListeners() {
    if (!socket) {
        throw new Error("Socket not initialized", socket);
    }
    socket.on(SOCKET_CONNECTION, (data) => {
        console.log(data);
    });

    socket.on(SOCKET_MESSAGE, (message) => {
        store.dispatch(addMessage({
            user: "agent",
            message
        }));
    });
}

export function emitMessage(message) {
    if (!socket) {
        throw new Error("Socket not initialized", socket);
    }
    socket.emit(SOCKET_MESSAGE, message);
}

export function removeListener(name) {
    if (!name) {
        throw new Error("No listener name provided");
    } else if (!socket) {
        throw new Error("Socket not initialized", socket);
    }
    socket.removeListener(name);
}

export function removeAllListeners() {
    socket.removeAllListeners();
}
