import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
// import { receiveData } from 'api';
import Button from './Button/Button';
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



    render() {
        return (
            <>
                <Searchbar></Searchbar>
                <ImageGallery>
                    <Button></Button>
                </ImageGallery>
                <ToastContainer />

                
            </>
        );
    };
}


