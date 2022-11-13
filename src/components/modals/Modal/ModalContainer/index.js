import React from 'react';

import './index.css';

const ModalContainer = ({ id, children }) => {
    return (
        <div className="modal fade" id={id}>
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default ModalContainer;