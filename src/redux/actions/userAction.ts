export type TUser = {
  id: number | null;
  username: string;
  website: string;
};

export enum ActionType {
    SET_LOADED_USER = "SET_LOADED_USER",
  SET_USER_INFO = "SET_USER_INFO",
  FETCH_USER_INFO = "FETCH_USER_INFO",
}

export interface ISetLoadedUser {
  type: ActionType.SET_LOADED_USER;
  payload: boolean;
}

export interface ISetUser {
  type: ActionType.SET_USER_INFO;
  payload: TUser;
}

export interface IFetchUser {
  type: ActionType.FETCH_USER_INFO;
  payload: number;
}

export type ActionUser = ISetUser | ISetLoadedUser | IFetchUser;

export const setLoadedUser = (value: boolean): ISetLoadedUser => ({
  type: ActionType.SET_LOADED_USER,
  payload: value,
});

export const setUser = (user: TUser): ISetUser => ({
  type: ActionType.SET_USER_INFO,
  payload: user,
});

export const fetchUser = (userId: number): IFetchUser => ({
  type: ActionType.FETCH_USER_INFO,
  payload: userId,
});
