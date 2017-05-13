"use strict";

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Row, Col, Grid} from "react-flexbox-grid";
import InputMessage from "./InputMessage/component";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import MessageDisplay from "./MessageDisplay/component";

class AppComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const {messages} = this.props;

        const styles = {
            inputSectionStyle: {
                backgroundColor: "#fff"
            }
        };

        return (
            <MuiThemeProvider>
                <Grid>
                    <Row className="content-wrapper">
                        <Col xs={12}>
                            <MessageDisplay messages={messages}/>
                        </Col>
                        <Col xs={12} style={styles.inputSectionStyle}>
                            <InputMessage/>
                        </Col>
                    </Row>
                </Grid>
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
