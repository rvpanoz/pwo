/**
  Auth container
  Handles Login and Register user process
**/

import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {requestLogin, requestRegister, switchAction} from '../actions';
import {AUTH_LOGIN, AUTH_REGISTER} from '../constants';

import AuthFormLogin from '../components/AuthFormLogin';
import AuthFormRegister from '../components/AuthFormRegister';

class Auth extends React.Component {
  constructor() {
    super()
  }
  render() {
    let {
      action,
      switchAction,
      requestLogin,
      requestRegister
    } = this.props;

    return (<div className="auth__container">
    <div className="form">
      {
        (action === AUTH_LOGIN)
          ? <AuthFormLogin onSubmit={requestLogin} />
          : <AuthFormRegister onSubmit={requestRegister} switchAction={switchAction}/>
      }
      </div>
    </div>)
  }
}

function mapStateToProps(state) {
  return {
    action: state.auth.action
  }
}

function mapDispatchToProps(dispatch) {
  return {
    switchAction: (e) => {
      e.preventDefault();
      const element = e.target;
      dispatch(switchAction(element.dataset.type));
    },
    requestRegister: (username, password, email) => {
      dispatch(requestRegister(username, password, email));
    },
    requestLogin: (email, password) => {
      dispatch(requestLogin(email, password));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth)
