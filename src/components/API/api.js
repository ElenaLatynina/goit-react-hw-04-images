import axios from "axios";

export async function receiveData(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = {
  key: '29584253-cd90e7f8e2a20a00eedab1d09',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
  query,
  page,
  
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    }
  
};

export default receiveData;


