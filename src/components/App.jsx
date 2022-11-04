// import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import * as API from '../components/API/api';
import { Container } from './App.styled';
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
// import 'react-toastify/dist/ReactToastify.css';
import Modal from 'components/Modal';

export const App= () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {

    const loadImages = async (query, page) => {
      setIsLoading(true);

      try {
        const data = await API.receiveData(query, page);
        if (data.hits.length === 0) {
          setError  (
            `Sorry, there are no images matching your query. Please try again`
            
          );
          return;
        }
        setImages(images => [...images, ...data.hits]);
        setTotalPages(data.totalHits);
        
      

      } catch (error) {
        setError(error);

      } finally {
        setIsLoading(false);
      }
    };

  
    loadImages(query, page);
    
  }, [query, page]);


  const handleSearchSubmit = query => {
    setQuery(query);
    setImages([]);
    setPage(1);
    setTotalPages(0);

  };
  

  const loadMore = () => {
    setPage(prevState => (
      prevState.page + 1
    ));
  };

  const openModal = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  const closeModal = () => {
    setLargeImageURL('');
  };

  return (
    <Container>
      <Searchbar onSearch={handleSearchSubmit} />
        
      {error && (<p>Something went wrong</p>)}

      {images.length > 0 && (
        <ImageGallery images={images} onClick={openModal} />
      )}

      {isLoading && <Loader />}

      {page < Math.ceil(totalPages / 12) && (
        <Button loadMore={loadMore} />
      )}

      {largeImageURL && (
        <Modal onClose={closeModal} largeImageURL={largeImageURL} />
      )}
    </Container>
  );
    
};


export default App;
