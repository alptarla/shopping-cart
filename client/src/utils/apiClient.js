import axios from 'axios';
import { TOKEN_STORAGE_KEY } from '../constants';

const BASE_URL = import.meta.env.VITE_API_HOST;

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

apiClient.interceptors.request.use((requestConfig) => {
  const token = localStorage.getItem(TOKEN_STORAGE_KEY);
  requestConfig.headers.common['Authorization'] = `bearer ${token}`;
  return requestConfig;
});

export default apiClient;
