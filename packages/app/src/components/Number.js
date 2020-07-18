import React from "react";
import PropTypes from "prop-types";
import { isNumber } from "MM:shared/scripts/core/number";

function Number({ num }) {
    return (
        <div style={{ background: "lightgrey", margin: 20, padding: 10 }}>
            Number provided: <span style={{ color: "blue" }}>{num}</span>
            <br />
            {isNumber(num) ? (
                <span style={{ color: "green" }}>It is a number!</span>
            ) : (
                <span style={{ color: "red" }}>Uh oh, not a number...</span>
            )}
        </div>
    );
}

Number.defaultProps = {};

Number.propTypes = {
    // Required
    // ...
    // Optional
    num: PropTypes.number
};

export default Number;
