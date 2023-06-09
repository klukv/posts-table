export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export enum ActionType {
  SET_LOADED_COMMENT = "SET_LOADED_COMMENT",
  SET_COMMENTS = "SET_COMMENTS",
  SET_ASYNC_COMMENTS = "SET_ASYNC_COMMENTS",
}

export interface ISetLoaded {
  type: ActionType.SET_LOADED_COMMENT;
  payload: boolean;
}

export interface ISetComment {
  type: ActionType.SET_COMMENTS;
  payload: TComment[];
}

export interface ISetAsyncComment {
  type: ActionType.SET_ASYNC_COMMENTS;
  payload: number;
}

export type ActionComment = ISetComment | ISetLoaded | ISetAsyncComment;

export const setLoadedComment = (value: boolean): ISetLoaded => ({
  type: ActionType.SET_LOADED_COMMENT,
  payload: value,
});

export const setComment = (Comment: TComment[]): ISetComment => ({
  type: ActionType.SET_COMMENTS,
  payload: Comment,
});
export const setAsyncComments = (userId: number): ISetAsyncComment => ({
  type: ActionType.SET_ASYNC_COMMENTS,
  payload: userId,
});
