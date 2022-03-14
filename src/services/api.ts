import axios from 'axios';

const API_KEY = 'f2323eb016954b2a5370e5317c9f2398';

export const api = axios.create({
    baseURL: `https://api.themoviedb.org/3`
});