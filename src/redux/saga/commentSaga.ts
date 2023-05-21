import { put, takeEvery, call } from "redux-saga/effects";
import { AnyAction } from 'redux';
import { getComments } from "../../service/requestInfo";
import { ActionType, setComment } from "../actions/commentAction";

function* setCommentWorker(action: AnyAction): Generator<any, void, any> {
  const { data } = yield call(getComments, action.payload);
  yield put(setComment(data));
}

export function* commentWatcher() {
  yield takeEvery(ActionType.SET_ASYNC_COMMENTS, setCommentWorker);
}
