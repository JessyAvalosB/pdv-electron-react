import React from 'react';
import RadioButton from '../RadioButton';

const RadioGroup = ({ legend, buttons, groupClass }) => {
    return (
        <div className={`form-group ${groupClass}`}>
            <label>
                {legend}
            </label>
            {buttons && buttons.map(button => <RadioButton key={`${button.id}Id`} {...button} />)}
        </div>
    );
};

export default RadioGroup;