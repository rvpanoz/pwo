'use strict';

import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import InputWithValidation from '../../src/components/common/InputWithValidation';

describe('InputWithValidation suite testing', function() {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <InputWithValidation>
        <input type="text" />
      </InputWithValidation>
    );
  })

  it('should render correctly', function() {
    expect(wrapper.length).to.eql(1);
  });
})
