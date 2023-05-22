import axios from "axios"
import { API_URL } from "../utils/const"

export const $request = axios.create({
    baseURL: API_URL
})

export const getPosts = () => $request.get("posts?_limit=10");

export const getComments = (userId:number) => $request.get(`posts/${userId}/comments?_limit=8`);

export const getUserInfo = (userId:number) => $request.get(`users/${userId}`);

export const getUserPosts = (userId:number) => $request.get(`users/${userId}/posts`);
