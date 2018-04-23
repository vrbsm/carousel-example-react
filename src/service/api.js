import axios from 'axios';

const URL = 'http://roberval.chaordicsystems.com/challenge/challenge.json';
const api = axios.create({
  baseURL: URL,
  timeout: 10000,
  headers: { 'Access-Control-Allow-Origin' : '*'},
});
export default api;
