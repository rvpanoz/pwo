//application state
import {
  AUTH_LOGIN
} from '../constants';

const initialState = {
  auth: {
    action: AUTH_LOGIN,
    user: null,
    formValid: false,
    id_token: null,
    errors: []
  },
  menuIsOpen: false,
  loading: false
}

export default initialState;
