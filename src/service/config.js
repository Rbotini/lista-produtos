import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://api-teste-produto.herokuapp.com/api/'
})