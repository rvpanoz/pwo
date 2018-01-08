import React from 'react';

class InputWithValidation extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: ''
    }
    this.handleOnChange = this.props.handleOnChange || this.handleOnChange.bind(this);
    this.handleOnBlur = this.props.handleOnBlur || this.handleOnBlur.bind(this);
  }
  validate(value) {
    const children = this.props.children;
    const validationRules = this.props.validators || null;
    const {
      type,
    } = children, name = children.props.name;

    if(validationRules && Array.isArray(validationRules)) {
      let err = {
        name
      }
      validationRules.map((validationRule) => {
        if(validationRule.required && (!value || value==='')) {
          err.msg = `Field ${name} is required`;
          return err;
        } else if(validationRule.regExp && !value.match(validationRule.regExp)) {
          err.msg = `Field ${name} is not of the required format`;
        }
      });
      return err.msg ? err : void 0;
    }
  }
  handleOnBlur(e) {
    e.preventDefault();
    let {value} = e.target;
    let validationError = this.validate(value);
    if(validationError && validationError.msg) {
      this.setState({
        error: validationError.msg
      })
    }
  }
  handleOnChange(e) {
    e.preventDefault();
    return false;
  }
  render() {
    let handlers = {};
    let {
      children,
      validateOnBlur
    } = this.props;

    return React.cloneElement(
      children, {
        error: this.state.error,
        onBlur: validateOnBlur
      }
    );
  }
}

export default InputWithValidation
