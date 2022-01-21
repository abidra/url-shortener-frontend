import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost',
    withCredentials: true,
});

export default apiClient;