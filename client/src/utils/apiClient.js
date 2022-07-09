import axios from 'axios';
import { TOKEN_STORAGE_KEY } from '../constants';

const BASE_URL = import.meta.env.VITE_API_HOST;
const AUTH_TOKEN = localStorage.getItem(TOKEN_STORAGE_KEY);

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

apiClient.interceptors.request.use((requestConfig) => {
  requestConfig.headers.common['Authorization'] = `bearer ${AUTH_TOKEN}`;
  return requestConfig;
});

export default apiClient;
