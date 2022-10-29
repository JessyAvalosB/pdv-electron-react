import React from "react";

import './index.css';

const Button = ({ type, btnClass, onClick, style, children, ...rest }) => {
    return (
        <button
            {...rest}
            type={type}
            style={style}
            onClick={onClick}
            className={`btn btn-${btnClass}`} >
            {children}
        </button>
    );
}

export default Button;