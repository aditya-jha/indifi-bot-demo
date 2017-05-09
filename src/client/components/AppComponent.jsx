"use strict";

import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Row, Col} from "react-flexbox-grid";
import InputMessage from "./InputMessage/component";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class AppComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const styles = {
            inputSectionStyle: {
                backgroundColor: "#fff"
            }
        };

        return (
            <MuiThemeProvider>
                <Row style={styles.inputSectionStyle}>
                   <Col xs={12}>
                       <InputMessage/>
                   </Col>
                </Row>
            </MuiThemeProvider>
        );
    }
}

AppComponent.propTypes = {};

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
