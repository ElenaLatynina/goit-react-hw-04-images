import React from 'react';
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

export const ImageGallery = ({ images, onClick }) => {
   
    return (
        <List>
            {images.map(({ webformatURL, largeImageURL, tags, id }) => (
                <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} onClick={onClick} ></ImageGalleryItem>
            ))}
  
        </List>
    );

};
export default ImageGallery;