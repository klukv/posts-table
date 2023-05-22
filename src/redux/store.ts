import { combineReducers, configureStore } from "@reduxjs/toolkit";
import postReducer, { IStatePost } from "./reducers/postReducer";
import commentReducer, { IStateComment } from "./reducers/commentReducer";
import userReducer, { IStateUser } from "./reducers/userReducer";
import postsUserReducer, { IStatePostsUser } from "./reducers/postsUserReducer";
import { Reducer } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootWatcher } from "./saga";
import { ActionPost } from "./actions/postAction";
import { ActionComment } from "./actions/commentAction";
import { ActionUser } from "./actions/userAction";
import { ActionPostsUser } from "./actions/postUserAction";

interface StateRootReducer {
  postReducer: IStatePost;
  commentReducer: IStateComment;
  userReducer: IStateUser;
  postsUserReducer: IStatePostsUser;
}

type RootAction = ActionPost | ActionComment | ActionUser | ActionPostsUser;

const sagaMiddleware = createSagaMiddleware();

const rootReducer: Reducer<StateRootReducer, RootAction> =
  combineReducers({
    postReducer,
    commentReducer,
    userReducer,
    postsUserReducer
  });

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
