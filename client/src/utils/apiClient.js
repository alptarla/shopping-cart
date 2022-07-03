import axios from 'axios';

const TOKEN_STORAGE_KEY = 'token';
const BASE_URL = import.meta.env.VITE_API_HOST;
const AUTH_TOKEN = localStorage.getItem(TOKEN_STORAGE_KEY);

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {},
});

apiClient.defaults.headers.common['Authorization'] = AUTH_TOKEN;

export default apiClient;
