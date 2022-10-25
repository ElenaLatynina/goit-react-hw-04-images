import React, { Component } from 'react';
import * as API from '../components/API/api';
// import axios from "axios";
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import Loader from './Loader';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.loadImages(this.state.query,this.state.page);
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
    return (
      <Container>
        <Searchbar onSearch={this.handleSearchSubmit} />
        {this.state.error && <p>Something went wrong:{this.state.error.message}</p>}
        {this.state.items.length > 0 && (
          <ImageGallery images={this.state.images} onClick={this.openModal} />
        )}
        {this.state.isLoading && <Loader />}
        {this.state.page < Math.ceil(this.state.totalPages / 12) && (
          <Button loadMore={this.loadMore} />
        )}
        {this.state.largeImageURL && (
          <Modal onClose={this.state.closeModal} largeImageURL={this.state.largeImageURL} />
        )}
      </Container>
    );
  }
}

