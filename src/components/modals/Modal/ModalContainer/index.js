import React from 'react';

import './index.css';

const ModalContainer = ({ children }) => {
    return (
        <div className="modal fade" id="add-product-modal">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalContainer;