/**
 Root reducer
**/

'use strict';

import initialState from './initialState';
import {
  TOGGLE_LOADER,
  TOGGLE_MENU,
  USER_ACCESS_REQUESTED,
  USER_FETCH_SUCCESS,
  USER_FETCH_FAILURE,
  SWITCH_ACTION
} from '../actionTypes';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return Object.assign({}, state, {
        menuIsOpen: action.menuIsOpen
      });
    case TOGGLE_LOADER:
      return Object.assign({}, state, {
        loading: action.loading
      });
    case USER_ACCESS_REQUESTED:
      return Object.assign({}, state, {
        loading: true
      });
    case USER_FETCH_SUCCESS:
      return Object.assign({}, state, {
        id_token: action.id_token,
        loading: false
      })
    case USER_FETCH_FAILURE:
      return Object.assign({}, state, {
        id_token: null,
        loading: false
      })
    case SWITCH_ACTION:
      return {
        ...state,
        auth: {
          ...state.auth,
          action: action.action
        }
      }
    default:
      return state
  }
}

export default rootReducer;
