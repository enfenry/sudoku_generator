import React, { Component } from "react";
import "./Row.css";

class Row extends Component {


    render() {

        return (
            <div className={`row ${(this.props.center) ? "row-center" : ""}`}>
                {this.props.children}
            </div>
        )
    }
}

export default Row;