/**
 * @format
 */

import 'react-native';
import React from 'react';
import counterReducer from '../src/redux/reducers/counterReducer';
import {decrement, increment} from '../src/redux/actions';

// counter reducer unit testing
describe('counter reducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(0);
  });

  it('should increment counter', () => {
    expect(counterReducer(0, increment())).toEqual(1);
  });

  it('should decrement counter', () => {
    expect(counterReducer(0, decrement())).toEqual(-1);
  });
});
