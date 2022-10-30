import React from 'react';

import './index.css';

const CheckBox = ({ id, name, label, ...rest }) => {
    return (
        <div className="form-check">
            <input
                type="checkbox"
                id={id}
                name={name}
                className="form-check-input"
                {...rest} />
            <label htmlFor={id} className="form-check-label">{label}</label>
        </div>
    );
};

export default CheckBox;