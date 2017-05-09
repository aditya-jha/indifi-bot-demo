"use strict";

import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import {combineReducers} from "redux";
import {inputMessageReducer} from "./components/InputMessage/reducer";

const reducers = combineReducers({
    inputMessage: inputMessageReducer
});

export default function configureStore(initialState) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    return createStore(
        reducers,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
}
