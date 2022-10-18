import React, { Component } from 'react';
import { Container } from './App.styled';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { receiveData } from 'api';
import Button from './Button/Button';
import Loader from './Loader';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component{
    state = {
    images: [],
    query: '',
    loading: false,
    error: null,
    page: 1,
    total: 1,
  };

    async componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
            this.receiveData();
        }
        if (prevState.query === this.state.query && prevState.page !== this.state.page) {
            this.receiveData();
        }
        this.scrollPage();
    };

    scrollPage() {
        window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
    
    searchImage = query => {
    this.setState({
      loading: true,
      query: query,
      error: null,
      images: [],
      page: 1,
    });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    };
    
    async getImages() {
    await receiveData(this.state.query, this.state.page)
      .then(result => {
        const newImages = [...this.state.images, ...result.images];
        this.setState({ images: newImages, total: result.total });
      })
      .catch(error => this.setState({ error: error }))
      .finally(() => this.setState({ loading: false }));
  }

    render() {
        return (
            <Container>
                <Searchbar onSubmit={this.searchImage}></Searchbar>
                <ImageGallery >
                    {this.state.loading && <Loader />}
          {this.state.error && <div>Opsss...something is wrong {this.state.error}</div>}
                    <Button onClick={this.loadMore}></Button>
                </ImageGallery>
                <ToastContainer />

                
            </Container>
        );
    };
}


