import React, { Component } from 'react';
import * as API from './API/api';
// import axios from "axios";
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import Loader from './Loader';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from 'components/Modal';

export class App extends Component {
  state = {
    query: '',
    page:1,
    images: [],
    isLoading: false,
    largeImageURL: '',
    totalPages: 0,
    error:null,
    
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  loadImages = async (query, page) => {
    this.setState({ isLoading: true  });

    try {
      const data = await API.receiveData(query, page);
      
      if (data.hits.length === 0) {
        this.setState({
          error: { message: `Sorry, there are no images matching your query. Please try again`, },
        });
        return;
      }
      this.setState(prevState => ({images:[...prevState.hits, ...data.hits], totalPages:data.totalHits,}));
    
    
  } catch(error) {
    this.setState([error]);
    } finally {
      this.setState({ isLoading: false });
  }
};

  handleSearchSubmit = query => {
    this.setState({
      query, hits: [], page: 1, totalPages: 0,
    })
  };

  openModal = (largeImageURL) => { this.setState({ largeImageURL }); };

  closeModal = () => { this.setState({ largeImageURL: '' }); };

  componentDidUpdate(prevProps, prevState) {
  if ( prevState.query !==this.state.query || prevState.page !== this.state.page) {
    this.loadImages(this.state.query, this.state.page);
  }
  };
  render() {
    return (
     
      <Container>
        <Searchbar onSearch={this.handleSearchSubmit} />
        {this.state.error && <p>Something went wrong</p>}

        {this.state.images.length > 0 &&( <ImageGallery images={this.images} onClick={this.openModal} />)}
        {this.state.isLoading && <Loader />}

        {this.state.page < Math.ceil(this.state.totalPages / 12) && (<Button loadMore={this.loadMore} />)}
        
        {this.state.largeImageURL && (<Modal closeModal={this.closeModal}largeImageURL={this.state.largeImageURL} />)}
       
        
      </Container>
    )
  };

}

 