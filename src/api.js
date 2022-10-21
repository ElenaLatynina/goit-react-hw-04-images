import axios from "axios";


export async function receiveData(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '30666553-8cd0d5769610a67a228363c5d';
  const PARAMS = 'image_type=photo&orientation=horizontal&safesearch=true';
  const Per_page = 12;
    
  const url = `${BASE_URL}?key=${API_KEY}&q=${query}&${PARAMS}&page=${page}&per_page=${Per_page}`;
  const response = await axios.get(url);
  return response.data;
  
}


