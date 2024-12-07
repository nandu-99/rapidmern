import axios from 'axios';

const API_URL = 'http://localhost:3001/api/';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const createUser = (data) => axiosInstance.post('auth/signup', data);
const loginUser = (data) => axiosInstance.post('auth/login', data);

export default {
  createUser,
  loginUser
};
