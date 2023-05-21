import { ActionType, TComment } from "../actions/commentAction";
import { AnyAction } from 'redux'

interface IState  {
    comments : TComment[],
    isLoaded: boolean
}

const initialState:IState = {
    comments: [],
    isLoaded: false,
  };
  
const commentReducer = (state = initialState, action:AnyAction) => {
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