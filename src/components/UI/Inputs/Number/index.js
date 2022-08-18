import React from "react";
import { InputNumberPropTypes } from "../../../../propTypes/Inputs";

export const InputNumber = ({ name, min, divClass = '', placeholder = '', style = {}, required = false, value = '', invalidText = '' }) => {
    return (
        <div className={`form-group ${divClass}`}>
            <input id={`input-${name}`}
                name={name}
                type="number"
                min={min}
                placeholder={placeholder}
                className="form-control"
                style={style}
                required={required}
                value={value} />
            <div className="invalid-feedback">{invalidText}</div>
        </div>
    );
};

InputNumber.propTypes = InputNumberPropTypes;