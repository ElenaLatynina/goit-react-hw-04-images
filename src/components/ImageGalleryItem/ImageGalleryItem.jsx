import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component{


    render() {
        return (
            <li class="gallery-item">
            <img src="" alt="" />
            </li>
        )
    }
};

export default ImageGalleryItem;