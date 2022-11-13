import React from "react";

import './index.css';

export const Label = ({ value, label, toggleLabel = false }) => {
    const toggleMoveLabel = value => value !== '' ? 'show' : 'hide';
    return (
        <label
            className={`label ${toggleLabel && toggleMoveLabel(value)}`}>
            {label}
        </label>
    );
};

