import axios from "axios";


export async function receiveData(searchQuery, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '29584253-cd90e7f8e2a20a00eedab1d09'
  const params = {
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,

  
  };
 
  const url = `${BASE_URL}?key=${API_KEY}&q=${searchQuery}&page=${page}`;
      const response = await axios.get(url, { params });
      return response.data;

}


