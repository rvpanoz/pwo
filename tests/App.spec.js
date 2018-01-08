/** App component test setup **/
'use strict';

//imports
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';

//required components
import App from '../src/App';
import Layout from '../src/containers/Layout';

//enzyme adapter configuration
configure({ adapter: new Adapter() });

//Begin App suite testing
describe('App suite testing', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  afterEach(() => {
    //todo
  });

  it('renders Layout component correctly', function() {
    expect(wrapper.find(Layout)).to.have.length(1);
  });

})
