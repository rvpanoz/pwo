/**
  auth form register
**/

import React from 'react';
import './AuthFormStyles.css';
import FormWithValidation from './common/FormWithValidation';
import InputWithValidation from './common/InputWithValidation';
import {AUTH_REGISTER} from '../constants';

import {
  EMAIL_REGEXP
} from '../constants';

const emailValidationRules = [{
  required: true,
  regExp: EMAIL_REGEXP
}];

const passwordValidationRules = [{required: true}];

const AuthFormLogin = props => {
  let {
    handleSubmit,
    onChange,
    onBlur,
    errors,
    ...rest
  } = props;
  return (
    <form className="auth-signup-form" onSubmit={handleSubmit}>
      <InputWithValidation>
        <input type="text" name="email" autoComplete="off" placeholder="email address" onChange={onChange} onBlur={onBlur}/>
      </InputWithValidation>
      <button type="submit">login</button>
      <p className="message">Already a member?&nbsp;
        <a href="#" data-type={AUTH_REGISTER} onClick={props.switchAction}>Sign up</a>
      </p>
    </form>
  )
}

const validations = {
  email: (value) => {
    if (!value || value==='') {
      return 'Field email is required'
    } else if (!value.match(EMAIL_REGEXP)){
      return 'Field email is not a valid email address'
    }
    return null
  },
  password: (value) => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters'
    }
    return null
  }
}

export default FormWithValidation(validations)(AuthFormLogin);
