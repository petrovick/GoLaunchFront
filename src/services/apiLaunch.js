import axios from 'axios';

const apiLaunch = axios.create({
  baseURL: 'https://immense-tor-58043.herokuapp.com'
});
/**
 * Adicionar o token as requisições, quando existir.
 */
apiLaunch.interceptors.request.use(async request => {
  debugger;
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZGExYzBkZmE3YTBmMTFlZDIyZGI5YiIsImlhdCI6MTU1Nzg4MDIxNSwiZXhwIjoxNTU3OTY2NjE1fQ.X8C28gl4FIebh3k60eNyqC63FFWD8DJeooGWoXnOmKk";
  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  } else {
    delete request.headers.Authorization;
  }

  return request;
});

export default apiLaunch;
