import userReducer from './userReducer';
import * as types from '../actions/types';

describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual([]);
  });
  it('should return the users array', () => {
    expect(
      userReducer([], {
        type: types.USERS_LOADED_SUCCESS,
        users:['a','b']
      }),
    ).toEqual(['a','b']);
  });
});
