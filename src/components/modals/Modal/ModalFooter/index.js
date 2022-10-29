import React from 'react';
import Button from '../../../UI/Button';

import './index.css';

const ModalFooter = ({ confirmText, closeText, handleCloseModal, handleClickConfirm, toggleCloseModal = false}) => {
    return (
        <div className="modal-footer">
            <Button
                type="button"
                btnClass="primary"
                onClick={handleClickConfirm}>
                {confirmText}
            </Button>
            {toggleCloseModal &&
            <Button
                type="button"
                btnClass="secondary"
                onClick={handleCloseModal}>
                {closeText}
            </Button>}
        </div>
    );
};

export default ModalFooter;