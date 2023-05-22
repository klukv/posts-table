import { TPost } from "./postAction";

  export enum ActionType {
    SET_LOADED = "SET_LOADED",
    SET_USER_POSTS = "SET_USER_POSTS",
    FETCH_USER_POSTS = "FETCH_USER_POSTS",
  }
  
  export interface ISetLoadedPostsUser {
    type: ActionType.SET_LOADED;
    payload: boolean;
  }
  
  export interface ISetPostsUser {
    type: ActionType.SET_USER_POSTS;
    payload: TPost[];
  }
  
  export interface IFetchUserPosts {
    type: ActionType.FETCH_USER_POSTS;
    payload: number;
  }
  
  export type ActionPostsUser = ISetPostsUser | ISetLoadedPostsUser | IFetchUserPosts;
  
  export const setLoadedPostsUser = (value: boolean): ISetLoadedPostsUser => ({
    type: ActionType.SET_LOADED,
    payload: value,
  });
  
  export const setPostsUser = (posts: TPost[]): ISetPostsUser => ({
    type: ActionType.SET_USER_POSTS,
    payload: posts,
  });
  
  export const fetchPostsUser = (userId: number): IFetchUserPosts => ({
    type: ActionType.FETCH_USER_POSTS,
    payload: userId,
  });
  