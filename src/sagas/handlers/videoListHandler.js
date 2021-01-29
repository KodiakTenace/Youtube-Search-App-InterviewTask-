import {call, put} from 'redux-saga/effects';
import {requestGetVideos} from '../requests/videoListRequest';
import {handleError, setVideos} from '../../redux/actions';

export function* handleGetVideos(action) {
  try {
    const response = yield call(requestGetVideos, action.query, action.page);
    const {data} = response;
    yield put(setVideos(data));
  } catch (error) {
    console.log('videos_api', error);
    yield put(handleError());
  }
}
