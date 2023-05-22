import { put, takeEvery, call } from "redux-saga/effects";
import { getUserInfo, getUserPosts } from "../../service/requestInfo";
import { ActionType, setUser } from "../actions/userAction";
import { ActionType as ActionTypePost} from "../actions/postUserAction";
import { setPostsUser } from "../actions/postUserAction";

type actionUserSaga = {
    type: string,
    payload: number
}

function* setUserWorker(action: actionUserSaga): Generator<any, void, any> {
  const { data } = yield call(getUserInfo, action.payload);
  yield put(setUser(data));
}
function* setUserPostsWorker(action: actionUserSaga): Generator<any, void, any> {
    const { data } = yield call(getUserPosts, action.payload);
    yield put(setPostsUser(data));
  }

export function* userWatcher() {
  yield takeEvery(ActionType.FETCH_USER_INFO, setUserWorker);
  yield takeEvery(ActionTypePost.FETCH_USER_POSTS, setUserPostsWorker);
}
