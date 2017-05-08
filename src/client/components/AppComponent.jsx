"use strict";

import React, {PropTypes} from "react";
import {connect} from "react-redux";

class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <h1>Bot Demo Test</h1>
        );
    }
}

AppComponent.propTypes = {

};

const mapStateToProps = (state) => {
    return {

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
