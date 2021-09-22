import axios from 'axios';
import camelCase from 'camelcase-keys';
import { API_URL } from '../configs';

const axiosClient = axios.create({
  baseURL: `${API_URL}/api/v1`,
  responseType: 'json',
  timeout: 15 * 1000,
});

axiosClient.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error),
);

axiosClient.interceptors.response.use(
  (response) => camelCase(response.data, { deep: true }),
  (error) => Promise.reject(error),
);

export default axiosClient;
