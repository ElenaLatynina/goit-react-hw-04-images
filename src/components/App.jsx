import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import { receiveData } from 'api';
import Button from './Button';

export class App extends Component{
    state = {
        
    };



    render() {
        return (
            <>
                <Searchbar></Searchbar>
                <ImageGallery>
                    <Button></Button>
                </ImageGallery>

                
            </>
        );
    };
}


