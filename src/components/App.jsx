import React, { Component } from 'react';
import axios from "axios";
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { receiveData } from 'api';
import Button from './Button/Button';
import Loader from './Loader';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from 'components/Modal';

export class App extends Component {
  state = {
    query: '',
    hits: [],
    isLoading: false,
    isBattonVisible: true,
    page: 1,
    largeImageURL: '',
    
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadImages();
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  togleModal = largeImageURL => { this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen, largeImageURL, })) };

  loadImages = async query => {
    this.setState({ query, isLoading: true, isBattonVisible: true });

    try {
      const url = receiveData(query, this.state.page);
      const response = await axios.get(url);
      const {
        data: { hits, totalHits }
      } = response;

      if (hits.length < 1 && this.state.page === 1) {
        this.setState({ isLoading: false, hits: [] });

        throw new Error(Promise.reject('Sorry, there are no images matching your search query. Please try again.'));
         
      };

      if (this.state.page >= Math.ceil(totalHits / 12)) {
      this.setState({ isBattonVisible: false });
    }
      
    this.setState(prevState => prevState.page !== 1 ? { hits: prevState.hits.concat(hits), isLoading: false, } : { hits, isLoading: false });


    // await receiveData(this.state.query, this.state.page)
    // .then(result => {
    //   const newImages = [...this.state.images, ...result.images];
    //   this.setState({ images: newImages, total: result.total });
    // })
    // .catch(error => this.setState({ error: error }))
    // .finally(() => this.setState({ isLoading: false }));
    
  } catch(error) {
    console.log(error);
  }
};

  render() {
    return (
     
      <Container>
        <Searchbar onSubmit={this.loadImages}></Searchbar>
        {this.state.isLoading && <Loader />}
        {/* {this.state.error && toast.error('Something went wrong')} */}
        <ImageGallery images={this.hits} />
        {this.state.page < this.totalHits && <Button onClick={this.loadMore}>Load More</Button>}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"/>
      </Container>
    )
  };

}

 