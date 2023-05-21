import { Action } from "redux";

export type TComment = {};

export enum ActionType {
    SET_LOADED = "SET_LOADED",
    SET_COMMENTS = "SET_COMMENTS",
    SET_ASYNC_COMMENTS = "SET_ASYNC_COMMENTS",
}

export interface ISetLoaded extends Action<ActionType.SET_LOADED>{
    payload: boolean
}

export interface ISetComment extends Action<ActionType.SET_COMMENTS>{
    payload: TComment
}

export type CounterAction = ISetComment | ISetLoaded

export const setLoaded = (value: boolean):ISetLoaded => ({
    type: ActionType.SET_LOADED,
    payload: value
})

export const setComment = (Comment: TComment):ISetComment => ({
    type: ActionType.SET_COMMENTS,
    payload: Comment
})
export const setAsyncComments = () => ({
    type: ActionType.SET_ASYNC_COMMENTS
})

