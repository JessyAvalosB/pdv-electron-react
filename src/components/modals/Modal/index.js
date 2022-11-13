import React from 'react';

import './index.css';

import ModalContainer from './ModalContainer';
import ModalContent from './ModalContent';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';


const Modal = ({ id, children, toggleShowFooter = false, ...rest }) => {
    return (
        <ModalContainer id={id}>
            <ModalHeader {...rest} />
            <ModalContent>
                {children}
            </ModalContent>
            {toggleShowFooter &&
                <ModalFooter {...rest} />}
        </ModalContainer>
    );
}

export default Modal;