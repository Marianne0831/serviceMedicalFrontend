import axios from 'axios';


export const API_URL = "http://127.0.0.1:8000/api/patients/";
export const APII_URL = "http://127.0.0.1:8000/api/consultations/";
export const APIII_URL = "http://127.0.0.1:8000/api/StockageMeds/";


axios.defaults.baseURL = 'http://127.0.0.1:8000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

//  Intercepteur REQUEST : Ajoute le token à chaque requête
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expiré ou invalide
      console.log('Session expirée. Redirection vers login...');
      localStorage.removeItem('token');
      localStorage.removeItem('refresh_token');
      
      // Rediriger uniquement si on n'est pas déjà sur /login
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);


export default axios;