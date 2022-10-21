import React from 'react';
import PropTypes from 'prop-types';
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

export const ImageGallery = ({ hits }) => {
   
    return (
        <List>
            {hits.map(hit => (
                <ImageGalleryItem key={hit.id} hit={hit} ></ImageGalleryItem>
            ))}
  
        </List>
    );

};

export default ImageGallery;
ImageGallery.propTypes = {
    hits: PropTypes.arrayOf(PropTypes.object).isRequired,
};