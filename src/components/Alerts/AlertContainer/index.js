import React from 'react';

import './index.css';

import Alert from '../Alert';

const AlertContainer = ({ alerts }) => {
    return (
        <div className='bs-component'>
            {alerts && alerts.map((alert, index) => {
                return <Alert key={index} {...alert} />
            })}
        </div>
    );
};

export default AlertContainer;