import { ActionType, ActionUser, TUser } from "../actions/userAction";

export interface IStateUser {
  isLoaded: boolean;
  user: TUser;
}

const initialState: IStateUser = {
  isLoaded: false,
  user: {
    id: null,
    username: "",
    website: ""
  },
};

const userReducer = (state = initialState, action: ActionUser) => {
  switch (action.type) {
    case ActionType.SET_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case ActionType.SET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
