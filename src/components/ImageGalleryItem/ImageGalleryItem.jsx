import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Img} from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component{


    render() {
        return (
            <Item>
            <Img src="" alt="" />
            </Item>
        )
    }
};

export default ImageGalleryItem;