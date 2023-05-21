import { put, takeEvery, call } from "redux-saga/effects";
import { getComments } from "../../service/requestInfo";
import { ActionType, setComment } from "../actions/commentAction";

function* setCommentWorker(): Generator<any, void, any> {
  const { data } = yield call(getComments);
  yield put(setComment(data));
}

export function* commentWatcher() {
  yield takeEvery(ActionType.SET_ASYNC_COMMENTS, setCommentWorker);
}
