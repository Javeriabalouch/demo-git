import axios from 'axios';

// Create an instance of axios
const api= axios.create({
    baseURL: 'https://postfast-c99269e302dd.herokuapp.com', // replace with your API URL
});

// Middleware that will be executed before each request
api.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token'); // replace with your token retrieval logic

    if ( token != null ) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // You can also add more headers here
    config.headers['Content-Type'] = 'application/json';

    return config;
}, function (error) {
    // If there's an error in the request phase, it will be handled here
    return Promise.reject(error);
});

// Middleware that will be executed before each response
api.interceptors.response.use(function (response) {
    // You can handle general HTTP responses here
    return response;
}, function (error) {
    // If there's an error in the response phase, it will be handled here
    return Promise.reject(error);
});

export default api;
