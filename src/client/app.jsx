"use strict";

import React from "react";
import {render} from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";
import {Provider} from "react-redux";
import configureStore from "./store";

require("style-loader!css-loader!./style.css");

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const store = configureStore();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>
    ,
    document.querySelector("#app")
);

