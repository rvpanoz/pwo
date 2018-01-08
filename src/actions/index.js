/**
* Redux actions-
*/

'use strict';

import * as types from '../actionTypes';

export function toggleMenu(menuIsOpen) {
  return {
    type: types.TOGGLE_MENU,
    menuIsOpen
  }
}

export function toggleLoader(loading) {
  return {
    type: types.TOGGLE_LOADER,
    loading
  }
}

export function switchAction(action) {
  return {
    type: types.SWITCH_ACTION,
    action
  }
}

export function requestRegister(username, email, password) {
  return {
    type: types.USER_REGISTER_REQUESTED,
    username,
    email,
    password
  }
}

export function requestLogin(email, password) {
  return {
    type: types.USER_ACCESS_REQUESTED,
    email,
    password
  }
}
