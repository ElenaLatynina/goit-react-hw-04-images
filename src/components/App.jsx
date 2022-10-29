import React, { Component } from 'react';
import * as API from '../components/API/api';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
// import 'react-toastify/dist/ReactToastify.css';
import Modal from 'components/Modal';

export class App extends Component{
  state = {
    page: 1,
    query: '',
    images: [],
    largeImageURL: '',
    isLoading: false,
    totalPages: 0,
    error: null,
  };

  loadImages = async (query, page) => {
    this.setState({ isLoading: true });

    try {
      const data = await API.receiveData(query, page);
      if (data.hits.length === 0) {
        this.setState({
          error: {
            message: `Sorry, there are no images matching your query. Please try again`,
          },
        });
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        totalPages: data.totalHits,
      }));

    } catch (error) {
      this.setState({ error });

    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.loadImages(query, page);
    }
  }

  handleSearchSubmit = query => {
    this.setState({
      query,
      images: [],
      page: 1,
      totalPages: 0,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  openModal = largeImageURL => {
    this.setState({ largeImageURL });
  };

  closeModal = () => {
    this.setState({ largeImageURL: '' });
  };

  render() {
    const { images, largeImageURL, page, totalPages, isLoading, error } = this.state;

    return (
      <Container>
        <Searchbar onSearch={this.handleSearchSubmit} />
        
        {error && <p>Something went wrong: {error.message}</p>}

        {images.length > 0 && (
          <ImageGallery images={images} onClick={this.openModal} />
        )}

        {isLoading && <Loader />}

        {page < Math.ceil(totalPages / 12) && (
          <Button loadMore={this.loadMore} />
        )}

        {largeImageURL && (
          <Modal onClose={this.closeModal} largeImageURL={largeImageURL} />
        )}
      </Container>
    );
  }
}

