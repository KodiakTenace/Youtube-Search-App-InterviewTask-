import counterReducer from './counterReducer';
import videoListReducer from './videoListReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  videoList: videoListReducer,
});

export default rootReducer;
