import {  configureStore } from "@reduxjs/toolkit";
import postReducer from "./reducers/postReducer";
import commentReducer from "./reducers/commentReducer";
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { postReducer, commentReducer },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootWatcher);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
