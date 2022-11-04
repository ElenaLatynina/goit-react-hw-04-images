// import React, { Component } from 'react';
import { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { ModalPicture, Overlay  } from './Modal.styled';

export const Modal=({onClose, largeImageURL, tags}) => {
    const  handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    useEffect(() => {
        const handleKeydown = element => {
            if (element.code === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeydown);

        return () => {
            window.removeEventListener('keydown', handleKeydown);
        };
    });

    return (
            <Overlay onClick={handleBackdropClick}>
                <ModalPicture>
                    <img src={largeImageURL} alt={tags} />
                </ModalPicture>

            </Overlay>
        );
}




export default Modal;
// Modal.propTypes = {
//     src: PropTypes.string.isRequired,
//     alt: PropTypes.string.isRequired,
//     onClick:PropTypes.func.isRequired,
// }