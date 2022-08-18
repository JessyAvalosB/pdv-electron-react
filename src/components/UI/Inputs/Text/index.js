import React from "react";
import { InputTextPropTypes } from "../../../../propTypes/Inputs";

export const InputText = ({name, placeholder = '', style = {}, required = false, value = '', invalidText = ''}) => {
    return (
        <div className="form-group">
            <input name={name}
                type="text"
                placeholder={placeholder}
                className="form-control"
                style={style}
                required={required}
                value={value} />
            <div className="invalid-feedback">{invalidText}</div>
        </div>
    );
};

InputText.propTypes = InputTextPropTypes;