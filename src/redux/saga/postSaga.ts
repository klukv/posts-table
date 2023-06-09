import { put, takeEvery, call } from "redux-saga/effects";
import { ActionType, setLoaded, setPosts } from "../actions/postAction";
import { getPosts } from "../../service/requestInfo";

function* setPostWorker(): Generator<any, void, any> {
  const { data } = yield call(getPosts);
  yield put(setPosts(data));
  yield put(setLoaded(true));
}

export function* postWatcher() {
  yield takeEvery(ActionType.SET_ASYNC_POSTS, setPostWorker);
}
