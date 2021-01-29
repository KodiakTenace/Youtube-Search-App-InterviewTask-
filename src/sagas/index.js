import {takeLatest} from 'redux-saga/effects';
import {handleGetVideos} from './handlers/videoListHandler';
import {GET_VIDEOS} from '../redux/actions';

export function* watcherSaga() {
  yield takeLatest(GET_VIDEOS, handleGetVideos);
}
