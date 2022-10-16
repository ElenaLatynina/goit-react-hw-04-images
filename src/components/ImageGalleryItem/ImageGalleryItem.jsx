import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component{


    render() {
        return (
            <ImageGalleryItem class="gallery-item">
            <img src="" alt="" />
            </ImageGalleryItem>
        )
    }
};

export default ImageGalleryItem;