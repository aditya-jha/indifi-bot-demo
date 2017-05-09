/**
 * Created by aditya on 9/5/17.
 */

import {
    UPDATE_INPUT_MESSAGE
} from "./actions";

const defaultState = {
    message: ""
};

export function inputMessageReducer(state = defaultState, action) {
    switch (action.type) {
        case UPDATE_INPUT_MESSAGE:
            return {
                ...state,
                message: action.message
            };
        default:
            return state;
    }
}

