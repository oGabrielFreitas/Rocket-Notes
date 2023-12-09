import axios from 'axios';

export const api = axios.create({
  // baseURL: 'http://localhost:10003/wp-json',
  baseURL: 'https://react.lancenodigital.com.br/wp-json',
});
