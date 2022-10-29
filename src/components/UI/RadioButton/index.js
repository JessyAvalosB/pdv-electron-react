import React from 'react';

const RadioButton = ({ id, name, value, checked, label, onChange }) => {
    return (
        <div className="form-check" style={{ paddingLeft: '2.5em' }}>
            <label
                className="form-check-label"
                htmlFor={id}>
                <input
                    className="form-check-input"
                    type="radio"
                    id={id}
                    name={name}
                    onChange={onChange}
                    value={value}
                    checked={checked} /> {label}
            </label>
        </div>
    );
}

export default RadioButton;