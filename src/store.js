import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers/index';

let store = createStore(rootReducers);

export default store;
