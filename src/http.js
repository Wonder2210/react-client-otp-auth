import axios from 'axios';

const http = axios.create({
  baseURL:'http://localhost:4000/api/auth',
});

export default http;
