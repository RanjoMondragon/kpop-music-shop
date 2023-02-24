import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
//login in postman then get access token
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZWIzN2Q4NmQwMzg4ZDQxMzg3MWQwYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3Njc2NDQyNSwiZXhwIjoxNjc3MDIzNjI1fQ.6WKs_Xqbn7W_vWyO9kAWFH6W74Yr60uVnuXkcXegufg"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header : {token:`Bearer ${TOKEN}`}
});