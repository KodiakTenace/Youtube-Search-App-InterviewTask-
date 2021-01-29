import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducers from './reducers/index';
import {watcherSaga} from './sagas';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

let store = createStore(rootReducers, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;
