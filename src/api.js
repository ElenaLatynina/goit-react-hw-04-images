import axios from "axios";


export async function receiveData(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
  key: '29584253-cd90e7f8e2a20a00eedab1d09',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,

  
  };
 
  const url = `${BASE_URL}?q=${this.Searchquery}&page=${this.page}`;
      const response = await axios.get(url, { params });
      return response.data;

}


