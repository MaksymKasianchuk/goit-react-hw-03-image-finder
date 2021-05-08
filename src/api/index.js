import setting from './settings';
import axios from 'axios';

const { BASE_URL, API_KEY } = setting;

axios.defaults.baseURL = BASE_URL;

const Api = {
  fetchPhotos({ query, page, perPage = 12 }) {
    return axios
      .get(
        `/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
      )
      .then(response => response.data);
  },
};

export default Api;