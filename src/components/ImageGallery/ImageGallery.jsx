import React from 'react';
import { List } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

export const ImageGallery = ({ hits, onClick }) => {
   
    return (
        <List>
            {hits.map(({ webformatURL, largeImageURL, tags, id }) => (
                <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} tags={tags} onClick={onClick} ></ImageGalleryItem>
            ))}
  
        </List>
    );

};
