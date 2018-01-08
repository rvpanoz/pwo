/**
  Layout container component test setup
**/

'use strict';

//imports
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { expect } from 'chai';
import { spy } from 'sinon';

//initial state
import initialState from '../../src/reducers/initialState';

//required components
import AuthFormLogin from '../../src/components/AuthFormLogin';

//enzyme adapter configuration - need for React 16
configure({adapter: new Adapter()});

const mockStore = configureStore();

//Begin App suite testing
describe('AuthPage container suite testing', function() {
  let wrapper,
    store;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<AuthPage store={store} />).dive();
  });

  afterEach(() => {
    //todo
  });

  it('should render correctly', function() {
    expect(wrapper.length).to.eql(1);
  });

  it('should render the LoginForm component', function() {
    expect(wrapper.find(AuthFormLogin)).to.have.length(1);
  });

});
