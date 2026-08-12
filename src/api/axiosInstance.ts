import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const API_KEY_HEADER_NAME = 'X-Api-Key';

const API_KEY = import.meta.env.VITE_API_KEY;

axiosInstance.interceptors.request.use(
    (config) => {
        if (API_KEY) {
            config.headers[API_KEY_HEADER_NAME] = API_KEY;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;