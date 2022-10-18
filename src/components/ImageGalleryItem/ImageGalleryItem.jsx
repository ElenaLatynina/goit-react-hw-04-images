import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Img} from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component{
    state = {
        isModalOpen: false,
    };


    render() {
        return (
            <Item>
                <Img src="" alt="" />
                {this.state.isModalOpen&&(<Modal/>)}
            </Item>
        )
    }
};

export default ImageGalleryItem;