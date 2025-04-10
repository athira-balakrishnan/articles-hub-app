import axios from 'axios';
import { API_BASEURL } from '@assets/envVariables';

const axiosInstance = axios.create({
  baseURL: API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
