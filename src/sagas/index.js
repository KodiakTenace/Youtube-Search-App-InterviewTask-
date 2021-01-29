import {takeLatest} from 'redux-saga/effects';
import {handleGetVideos} from './handlers/videoListHandler';
import {GET_VIDEOS} from '../actions';

export function* watcherSaga() {
  yield takeLatest(GET_VIDEOS, handleGetVideos);
}
