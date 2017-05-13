/*
 * created by aditya on 14/5/17
 */

"use strict";

import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";
import {Row, Col} from "react-flexbox-grid";

const MessageDisplay = ({messages}) => {
    const styles = {
        wrapper: {
            height: "100%",
            overflow: "auto"
        },
        userStyle: {
            marginTop: 10,
            marginBottom: 10,
            textAlign: "right",
            display: "inline-block",
            padding: 10,
            float: "right"
        },
        agentStyle: {
            left: 0,
            marginTop: 10,
            marginBottom: 10,
            display: "inline-block",
            padding: 10
        }
    };

    return (
        <Row style={styles.wrapper}>
            {messages.map((message, index) => (
                <Col xs={12} key={index.toString()}>
                    <Paper style={message.user === "agent" ? styles.agentStyle : styles.userStyle}>
                        {message.message}
                    </Paper>
                </Col>))}
        </Row>
    );
};

MessageDisplay.propTypes = {
    messages: PropTypes.array.isRequired
};

export default MessageDisplay;