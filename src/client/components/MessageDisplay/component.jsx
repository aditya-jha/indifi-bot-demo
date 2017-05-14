/*
 * created by aditya on 14/5/17
 */

"use strict";

import React from "react";
import PropTypes from "prop-types";
import Paper from "material-ui/Paper";

const MessageDisplay = ({messages}) => {
    const styles = {
        wrapper: {
            maxheight: "20vh",
            overflow: "auto",
            maxWidth: "100vw"
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
        },
        messageWrapper: {
            display: "block",
            width: "100%",
            minHeight: 20,
            marginTop: "0.7em"
        }
    };

    return (
        <div style={styles.wrapper}>
            {messages.map((message, index) => (
                <div key={index.toString()} style={styles.messageWrapper}>
                    <Paper style={message.user === "agent" ? styles.agentStyle : styles.userStyle}>
                        {message.message}
                    </Paper>
                </div>
            ))}
        </div>
    );
};

MessageDisplay.propTypes = {
    messages: PropTypes.array.isRequired
};

export default MessageDisplay;