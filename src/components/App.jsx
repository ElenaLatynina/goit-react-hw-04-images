import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Searchbar from './Searchbar';

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


