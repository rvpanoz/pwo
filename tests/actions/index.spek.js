/**
 Actions tests
**/

import * as actions from '../../src/actions'
import * as types from '../../src/actionTypes'
import { expect } from 'chai';
import { spy } from 'sinon';

describe('Action::ToggleLoader', () => {

  it('returns action toggleLoader info', function() {
    let loading = false;

    // execute
    let actionResult = actions.toggleLoader(loading);

    // verify
    expect(actionResult).to.deep.equal({type: 'TOGGLE_LOADER', loading: loading})
  })

  it('returns action toggleMenu info', function() {
    let menuIsOpen = false;

    // execute
    let actionResult = actions.toggleMenu(menuIsOpen);

    // verify
    expect(actionResult).to.deep.equal({type: 'TOGGLE_MENU', open: menuIsOpen})
  })

});
