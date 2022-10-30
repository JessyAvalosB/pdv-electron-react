import React from 'react';

import Button from '../../../UI/Button';

import './index.css';

const ModalHeader = ({headerText, handleCloseModal, toogleCloseModal}) => {
    return (
        <div className="modal-header">
            <h5 className="modal-title">{headerText}</h5>
            {toogleCloseModal &&
            <Button
                type="button"
                btnClass="close"
                onClick={handleCloseModal}>
                <span aria-hidden="true"></span>
            </Button>}
        </div>
    );
};

export default ModalHeader;