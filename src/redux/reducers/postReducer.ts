import { ActionType, TPost, ActionPost } from "../actions/postAction";

export interface IStatePost {
  isLoaded: boolean;
  posts: TPost[];
}

const initialState: IStatePost = {
  isLoaded: false,
  posts: [],
};

const postReducer = (state = initialState, action: ActionPost) => {
  switch (action.type) {
    case ActionType.SET_LOADED_POST:
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
