import counterReducer from './counterReducer';
import loggedReducer from './isLoggedReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default rootReducer;
