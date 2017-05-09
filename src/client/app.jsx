"use strict";

import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import {Provider} from "react-redux";
import {connect, setUpListeners} from "./socket";
import configureStore from "./store";
import App from "./components/AppComponent";

require("style-loader!css-loader!./style.css");

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();
connect();
setUpListeners();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    ,
    document.querySelector("#app")
);
