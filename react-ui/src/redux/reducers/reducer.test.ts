import reducer from './reducer';
import * as types from '../constants/action-types';

describe('reducer', () => {

  it('should return the initial state', () => {
    const initialState = {
      katas: [],
      user: '',
      alerts: {},
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle CHANGE_USER', () => {
    const state = {
      katas: [],
      user: 'petras',
      alerts: {},
    };

    expect(reducer(state, types.CHANGE_USER)).toEqual(state);
  });

  it('should handle GET_ALL_KATAS', () => {
    const state = {
      katas: [],
      user: '',
      alerts: {},
    };

    expect(reducer(state, types.GET_ALL_KATAS)).toEqual(state);
  });

  it('should handle SET_ALERTS', () => {
    const state = {
      katas: [],
      user: '',
      alerts: {tests: true},
    };

    expect(reducer(state, types.SET_ALERTS)).toEqual(state);
  });

});
