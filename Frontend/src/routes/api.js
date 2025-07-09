import axios from 'axios';

const api = axios.create({
    baseURL: 'https://ecommerceapp-1-yqy3.onrender.com/',
});

export default api;