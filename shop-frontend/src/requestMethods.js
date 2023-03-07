import axios from "axios";

const BASE_URL = "https://kpop-music-shop.herokuapp.com/api";

const token = localStorage.getItem('userToken');

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Bearer ${token}` }
});