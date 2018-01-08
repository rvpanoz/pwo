import React from 'react'
import V from '../../Validator';

const withValidations = (validations = {}) => (Component) => {
  class FormComponent extends React.Component {
    constructor () {
      super()
      this.state = {
        touched: {},
        errors: {}
      }
      this.onBlur = this.onBlur.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
      this.validate = this.validate.bind(this)
    }
    onBlur (e) {
      const { name, value } = e.target
      const { touched } = this.state

      /** TODO: Bug revalidates all fields with the same value **/
      //
      if (value && value.length) {
        touched[name] = true
        this.setState({ touched })
        this.validate(value)
      }
    }
    validate (value) {
      const errors = {}
      for (let key in validations) {
        const touched = this.state.touched[key]

        if (!touched) continue

        const validator = validations[key]
        errors[key] = validator(value)
      }
      this.setState({ errors })
    }
    handleSubmit(e) {
      e.preventDefault();
      console.log('submitting..')
    }
    render () {
      return (
        <Component
          handleSubmit={this.handleSubmit}
          {...this.props}
          {...this.state}
          onBlur={this.onBlur}
        />
      )
    }
  }

  return FormComponent
}

export default withValidations
