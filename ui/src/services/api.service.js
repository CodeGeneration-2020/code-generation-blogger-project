import axios from 'axios';
import apiConfig from '../config/api-config';

export default class API {
  GET(url, options) {
    return axios.get(`${apiConfig.apiUrl}${url}`, options);
  }

  POST(url, data, options = {}) {
    return axios.post(`${apiConfig.apiUrl}${url}`, data, options);
  }

  PUT(url, data, options = {}) {
    return axios.put(`${apiConfig.apiUrl}${url}`, data, options);
  }

  DELETE(url, data, options = {}) {
    return axios.delete(`${apiConfig.apiUrl}${url}`, options);
  }
}
