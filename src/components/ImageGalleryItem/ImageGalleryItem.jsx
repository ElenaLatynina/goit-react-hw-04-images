import React  from 'react';
import { Item, Img } from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
    largeImageURL, webformatURL, tags, onClick
}) {
    return (
        <Item>
            <Img src={webformatURL} alt={tags} onClick={() => (onClick(largeImageURL))} />
        </Item>
    );
};