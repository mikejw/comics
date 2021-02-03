

import * as Action from '../actions';
import {
  call,
  put,
  takeLatest,
  delay
} from 'redux-saga/effects';
import { callAPI } from '../misc/api'


/**
 * Fetch comics.
 *
 * @param {Object} action
 */
export function* initFetchComics(action: any): any {
  const [ data, error ] = yield call(callAPI);
  yield put({
    type: Action.APPLY_FETCH_COMICS,
    payload: data
  });
}

/**
 * All sagas.
 * need to be exported at all?
 */
export default function* rootSaga() {
  yield takeLatest(Action.FETCH_COMICS, initFetchComics);
}
