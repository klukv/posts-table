import { TPost } from "../actions/postAction";
import { ActionPostsUser, ActionType } from "../actions/postUserAction";

export interface IStatePostsUser {
  isLoaded: boolean;
  postsUser: TPost[];
}

const initialState: IStatePostsUser = {
  isLoaded: false,
    postsUser: []
};

const postUserReducer = (state = initialState, action: ActionPostsUser) => {
  switch (action.type) {
    case ActionType.SET_LOADED_POSTS_USER:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ActionType.SET_USER_POSTS:
      return {
        ...state,
        postsUser: action.payload,
      };

    default:
      return state;
  }
};
export default postUserReducer;
