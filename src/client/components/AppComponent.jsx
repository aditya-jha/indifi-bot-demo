"use strict";

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import InputMessage from "./InputMessage/component";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MessageDisplay from "./MessageDisplay/component";

class AppComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {messages} = this.props;

        return (
            <MuiThemeProvider>
                <div className="content-wrapper">
                    <MessageDisplay messages={messages}/>
                    <InputMessage/>
                </div>
            </MuiThemeProvider>
        );
    }
}

AppComponent.propTypes = {
    messages: PropTypes.array
};

const mapStateToProps = (state) => {
    return {
        messages: state.inputMessage.messages
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
