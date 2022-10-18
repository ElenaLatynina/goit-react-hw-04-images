import React, { Component } from 'react';
import PropTypes from 'prop-types';


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

    render() {
        return (
            <Overlay>
                <ModalPicture>
                   <img/>
                </ModalPicture>
            </Overlay>
        )
    };
}