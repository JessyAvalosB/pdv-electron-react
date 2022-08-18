import React from "react";

import './index.css';

const Button = (props) => {
    return (
        <button type={props.type} className={`btn btn-${props.btnClass}`} onClick={props.onClick} style={props.style}>
            {props.children}
        </button>
    );
}

export default Button;