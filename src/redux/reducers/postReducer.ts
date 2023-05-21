import { ActionType, TPost } from "../actions/postAction";
import { AnyAction } from "redux";

interface IState {
  isLoaded: boolean;
  posts: TPost[];
}

const initialState: IState = {
  isLoaded: false,
  posts: [],
};

const postReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionType.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ActionType.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };

    default:
      return state;
  }
};
export default postReducer;
