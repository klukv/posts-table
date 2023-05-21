import { Action } from "redux";

export type TPost = {
    userId: number,
    id: number,
    title: string,
    body: string
};

export enum ActionType {
    SET_LOADED = "SET_LOADED",
    SET_POSTS = "SET_POSTS",
    SET_ASYNC_POSTS = "SET_ASYNC_POSTS"
}

export interface ISetLoaded extends Action<ActionType.SET_LOADED>{
    payload: boolean
}

export interface ISetPosts extends Action<ActionType.SET_POSTS>{
    payload: TPost
}

export type CounterAction = ISetPosts | ISetLoaded

export const setLoaded = (value: boolean):ISetLoaded => ({
    type: ActionType.SET_LOADED,
    payload: value
})

export const setPosts = (post: TPost):ISetPosts => ({
    type: ActionType.SET_POSTS,
    payload: post
})
export const setAsyncPosts = () => ({
    type: ActionType.SET_ASYNC_POSTS
})


