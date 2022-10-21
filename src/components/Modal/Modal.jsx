import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalPicture, Overlay  } from './Modal.styled';


export class Modal extends Component{

    handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
    };
    
    handleBackdropClick = event => {
        if (event.target === event.currentTarget) this.props.onClose();
    };

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    };

    componentDidUpdate() {
        window.removeEventListener('keydown', this.handleKeydown)
    };

    render() {
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalPicture>
                    <img src={this.props.largeImageURL} alt={this.props.tags} />
                </ModalPicture>
            </Overlay>
        )
    };
};

export default Modal;
Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose:PropTypes.func.isRequired,
}