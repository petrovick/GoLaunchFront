import axios from 'axios';
import { getToken } from './auth';

const api = axios.create({
  baseURL: 'https://immense-tor-58043.herokuapp.com',
});

api.interceptors.request.use(async (config) => {
  console.log(config);
  // debugger;
  if (config.url.includes('session/') || config.url.includes('user/')) {
    // No header neeeded
    return config;
  }
  // debugger;
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
