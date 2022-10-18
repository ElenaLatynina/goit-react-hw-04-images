import axios from "axios";

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '30666553-8cd0d5769610a67a228363c5d';
const PARAMS = 'image_type=photo&orientation=horizontal&safesearch=true';
const Per_page = 12;

export const receiveData = async (query, page) => {
    const url = `${BASE_URL}?key=${API_KEY}&q=${query}&${PARAMS}&page=${page}&per_page=${Per_page}`;

    const response = await axios.get(url);
    const images = response.data.hits;
    let result = null;

    if (images.length === 0) {
    return Promise.reject(
      'Sorry, there are no images matching your search query. Please try again.'
    );
  } else {
    result = {
      images: images,
      total: Math.ceil(response.data.totalHits / Per_page),
    };
    return result;
  }
    


}


