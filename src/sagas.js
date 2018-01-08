/**
 Sagas
**/

import { delay } from 'redux-saga';
import { select, all, call, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { login, register } from './api';

/**
  worker saga
  will be fired on any dispatched action for logging purposes
**/
function* loggerWorker(action) {
  try {
    const state = yield select();
    console.log('action: ', action)
    console.log('state after ', state)
  } catch (e) {
    throw new Error(e);
  }
}

function* loggerWatcher() {
  yield takeEvery('*', loggerWorker);
}

/**
  worker saga
  will be fired on USER_ACCESS_REQUESTED action
**/
function* loginWorker(action) {
  try {
    const response = yield call(login, action.email, action.password);
    const statusCode = response && response.statusCode;

    if(response.success) {
      yield put({
        type: 'USER_FETCH_SUCCESS',
        id_token: response.data.id_token
      });
    } else {
      if(statusCode) {
        yield put({
          type: 'SET_HTTP_CODE',
          errorCode: response.statusCode,
          errorMessage: response.message
        })
      } else {
        throw new Error('loginWorker error');
      }
    }
  } catch(e) {
    console.log(e);
    yield put({
      type: 'USER_FETCH_FAILURE',
      errorCode: 0,
      errorMessage: ''
    });
  }
}

function* loginWatcher() {
  yield takeEvery('USER_ACCESS_REQUESTED', loginWorker);
}

/**
  worker saga
  will be fired on USER_REGISTER_REQUESTED action
**/
function* registerWorker(action) {
  try {
    const response = yield call(register, action.username, action.email, action.password);
    const statusCode = response && response.statusCode;

    console.log(response);
    if(response.success) {
      yield put({
        type: 'USER_REGISTER_SUCCESS',
        id_token: response.data.id_token
      });
    } else {
      if(statusCode) {
        console.log('Error', statusCode);
      } else {
        throw new Error('registerWorker error');
      }
    }
  } catch(e) {
    console.log(e);
  }
}

function* registerWatcher() {
  yield takeEvery('USER_REGISTER_REQUESTED', registerWorker);
}

export default function* rootSaga() {
  yield all([
    loggerWatcher(),
    loginWatcher(),
    registerWatcher()
  ])
}
