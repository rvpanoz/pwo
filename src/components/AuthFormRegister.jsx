/**
  auth form register
**/

import React from 'react';
import './AuthFormStyles.css';
import FormValidator from './common/FormWithValidation';
import {AUTH_LOGIN} from '../constants';

const AuthFormRegister = (props) => {
  return (
    <div className="form">
      <form className="auth-signup-form" onSubmit={props.onSubmit}>
        <input type="text" name="username" placeholder="Username" onBlur={props.onBlur}/>
        <input type="text" name="email" placeholder="Email address" onBlur={props.onBlur}/>
        <input type="password" name="password" autoComplete="off" placeholder="Password" onBlur={props.onBlur}/>
        <button type="submit">create</button>
        <p className="message">Already a member?&nbsp;
          <a href="/" data-type={AUTH_LOGIN} onClick={props.switchAction}>Sign in</a>
        </p>
      </form>
    </div>
  )
}

export default FormValidator()(AuthFormRegister)
