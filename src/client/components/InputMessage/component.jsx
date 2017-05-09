/*
 * created by aditya on 9/5/17
 */

"use strict";

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import TextField from "material-ui/TextField";
import {Row, Col} from "react-flexbox-grid";
import SendIcon from "react-material-icons/icons/content/send";
import AttachIcon from "react-material-icons/icons/editor/attach-file";
import IconButton from "material-ui/IconButton";

import {
    updateInputMessage,
    sendInputMessage
} from "./actions";

class InputMessage extends Component {
    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    render() {
        const {message, onMessageChange, sendMessage} = this.props;

        return (
            <Row className="input-message-wrapper">
                <Col xs={8} sm={10}>
                    <TextField name="message" placeholder="Whats on your mind?" value={message}
                               fullWidth={true} multiLine={true} rowsMax={1} rows={1} onChange={onMessageChange}/>
                </Col>
                <Col xs={4} sm={2}>
                    <div className="icon-wrapper">
                        <Row>
                            <Col xs>
                                <IconButton onClick={sendMessage}>
                                    <SendIcon/>
                                </IconButton>
                            </Col>
                            <Col xs>
                                <IconButton onClick={sendMessage}>
                                    <AttachIcon/>
                                </IconButton>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        );
    }
}

InputMessage.propTypes = {
    message: PropTypes.string || PropTypes.number,
    onMessageChange: PropTypes.func,
    sendMessage: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        ...state.inputMessage
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onMessageChange: (event, message) => {
            dispatch(updateInputMessage(message));
        },

        sendMessage: () => {
            dispatch(sendInputMessage());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputMessage);
