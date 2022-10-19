import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Img } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';

class ImageGalleryItem extends Component{
    state = {
        isModalOpen: false,
    };

  toggleModal = () => {
    this.setState(prevState => ({
      isModalOpen: !prevState.isModalOpen,
    }));
  };

    render() {
        const { largeImageURL, webformatURL, tags } = this.props.hit;
        return (
            <Item>
                <Img src={webformatURL} alt={tags} onClick={ this.toggleModal} />
                {this.state.isModalOpen && (<Modal srs={largeImageURL} alt={tags}
                    onClick={this.toggleModal} />)}
            </Item>
        )
    }
};

export default ImageGalleryItem;
Item.propTypes = {
    image: PropTypes.shape({
        largeImageURL: PropTypes.string.isRequired,
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
    }).isRequired,
};