import axios from "axios"
import { API_URL } from "../utils/const"

export const $request = axios.create({
    baseURL: API_URL
})

export const getPosts = () => $request.get("posts?_limit=10");

export const getComments = () => $request.get("comments?_limit=5");
