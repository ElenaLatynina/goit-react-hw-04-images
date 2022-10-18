import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
    return (
        <List>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image}></ImageGalleryItem>
            ))}
  
        </List>
    );

};

export default ImageGallery;
ImageGallery.propTypes = {
    images: PropTypes.array.isRequired,
};