import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://eodhd.com/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
    params: {
        api_token: process.env.REACT_APP_API_TOKEN,
        fmt: 'json',
    }
});

export default instance;
