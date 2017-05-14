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
            maxHeight: "90vh",
            overflow: "auto",
            maxWidth: "100vw",
            marginBottom: 10
        },
        messagePaper: {
            marginTop: 10,
            marginBottom: 10,
            display: "inline-block",
            padding: 10
        },
        messageWrapper: {
            textAlign: "right"
        }
    };

    return (
        <div style={styles.wrapper}>
            {messages.map((message, index) => (
                <div key={index.toString()} style={message.user === "user" ? styles.messageWrapper : {}}>
                    <Paper style={styles.messagePaper}>
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