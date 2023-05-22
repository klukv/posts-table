import { ActionComment, ActionType, TComment } from "../actions/commentAction";

export interface IStateComment {
  comments: TComment[];
  isLoaded: boolean;
}

const initialState: IStateComment = {
  comments: [],
  isLoaded: false,
};

const commentReducer = (state = initialState, action: ActionComment) => {
  switch (action.type) {
    case ActionType.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ActionType.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};
export default commentReducer;
