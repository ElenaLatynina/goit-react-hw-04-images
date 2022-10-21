import React, { Component } from 'react';
import * as API from './API/api';
import axios from "axios";
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button/Button';
import Loader from './Loader';
// import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Modal from 'components/Modal';

export class App extends Component {
  state = {
    query: '',
    page:1,
    hits: [],
    isLoading: false,
    largeImageURL: '',
    totalPages: 0,
    error:null,
    
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadImages();
    }
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  };

  // togleModal = largeImageURL => { this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen, largeImageURL, })) };

  loadImages = async (query, page) => {
    this.setState({ isLoading: true  });

    try {
      const data = await API.receiveData(query, page);
      
      if (data.hits.length  === 0) {
        this.setState({
          error: { message: `Sorry, there are no images matching your query. Please try again`, },
        });
        return;
      }
      this.setState(prevState => prevState.page !== 1 ? { hits: prevState.hits.concat(hits), isLoading: false, } : { hits, isLoading: false });
    }
      
    


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
        
      </Container>
    )
  };

}

 