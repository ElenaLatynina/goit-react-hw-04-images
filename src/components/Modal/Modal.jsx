import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ModalPicture, Overlay  } from './Modal.styled';


export class Modal extends Component{
    state = {
        isOpen: false,
    };

    handleKeydown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
    };
    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeydown)
    };

    componentDidUpdate() {
        window.removeEventListener('keydown', this.handleKeydown)
        
    };

     handleBackdropClick = event => {
    if (event.target === event.currentTarget) this.props.onClose();
  };

    render() {
        const { src, alt } = this.props;
        return (
            <Overlay onClick={this.handleBackdropClick}>
                <ModalPicture>
                    <img src={src} alt={ alt} />
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