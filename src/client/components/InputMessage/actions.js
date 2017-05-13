/**
 * Created by aditya on 9/5/17.
 */

import {
    emitMessage
} from "./../../socket";

export const UPDATE_INPUT_MESSAGE = "UPDATE_INPUT_MESSAGE";

export function updateInputMessage(message) {
    return {
        type: UPDATE_INPUT_MESSAGE,
        message
    };
}

export function sendInputMessage() {
    return (dispatch, getState) => {
        // send message in state to server, through socket
        const {message} = getState().inputMessage;
        if (!message) {
            return;
        }
        emitMessage(message);
        dispatch(updateInputMessage(""));
    };
}
