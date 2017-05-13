/**
 * Created by aditya on 9/5/17.
 */

import {
    UPDATE_INPUT_MESSAGE,
    ADD_MESSAGE
} from "./actions";

const defaultState = {
    message: "",
    messages: []
};

export function inputMessageReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_INPUT_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    action.message
                ]
            };
        default:
            return state;
    }
}

