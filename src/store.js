/**
* Redux store
**/

'use strict';

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers';
import initialState from './reducers/initialState';
// import logger from 'redux-logger';

//NODE runtime
const NODE_ENV = process.env.NODE_ENV;
const composeEnhancers = ((NODE_ENV === 'development') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : false) || compose;

export default function configureStore() {
  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(rootReducer, composeEnhancers(
      applyMiddleware(sagaMiddleware),
      // applyMiddleware(logger)
    )),
    runSaga: sagaMiddleware.run
  }
}
