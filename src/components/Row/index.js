import React, { Component } from "react";
import "./Row.css";

class Row extends Component {

    render() {

        return (
            <div className={`row ${(this.props.center) ? "row-center" : ""} ${(this.props.marginTop) ? "row-margin-top" : ""} ${(this.props.puzzle) ? "row-puzzle" : ""} ${(this.props.message) ? "row-message" : ""} `} >
                {this.props.children}
            </div>
        )
    }
}

export default Row;