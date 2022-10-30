import React from 'react';

import './index.css';

const ModalContent = ({children}) => {
    return (
        <div className="modal-body">
            {children}
        </div>
    );
};

export default ModalContent;