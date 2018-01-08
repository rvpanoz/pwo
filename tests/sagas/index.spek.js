import { expect } from 'chai';
import { put, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import getTracksSaga from '../../src/sagas';

describe('getTracks SAGA', () => {
  it('Should delay for 2 seconds, then dispatch TRACKS_FETCH_SUCCESS', () => {
    const mockAction = {};
    const generator = getTracksSaga(mockAction);

    let returnValue = generator.next().value;
    console.log(returnValue);

    // expect( generator.next().value ).to.deep.equal( yield call(delay, 2000) );
    // expect( generator.next().value ).to.deep.equal( put({type: 'SIGN_UP_SUCCEEDED', payload: mockAction}) );
    // expect( generator.next().value ).to.deep.equal( {done: true, value: undefined} );
  });
});
