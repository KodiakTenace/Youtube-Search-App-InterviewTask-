import {call, put} from 'redux-saga/effects';
import {requestGetVideos} from '../requests/videoListRequest';
import {setVideos} from '../../actions';

export function* handleGetVideos(action) {
  try {
    const response = yield call(requestGetVideos);
    const {data} = response;
    yield put(setVideos(data));
  } catch (error) {
    console.log(error);
  }
}
