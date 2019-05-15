import axios from 'axios';

const api = axios.create({
  //baseURL: 'https://immense-tor-58043.herokuapp.com',
  baseURL: 'https://api.github.com',
});

export default api;
