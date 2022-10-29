import React from 'react';
import Button from '../../UI/Button';

const Alert = ({ dismissible = false, typeAlert, title, body }) => {
    return (
        <div className={`alert ${dismissible && 'alert-dismissible'} ${typeAlert}`}>
            {dismissible &&
                <Button
                    btnClass='close'
                    data-bs-dismiss='alert' />}
            <h4 className="alert-heading">{title}</h4>
            <p className="mb-0">{body}</p>
        </div>
    );
};

export default Alert;