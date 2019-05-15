import axios from 'axios';

const api = axios.create({
  baseURL: 'http://immense-tor-58043.herokuapp.com',
});

export default api;
