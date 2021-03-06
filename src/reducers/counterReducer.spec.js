import counterReducer from './counterReducer';
import * as types from '../actions/types';

const getRandomNumber = (min, max) => Math.floor(Math.random() * ((max - min) + 1)) + min;

const randomNumber = getRandomNumber(1, 10);

describe('Counter reducer', () => {
  it('should return the initial state', () => {
    expect(counterReducer(undefined, {})).toEqual(0);
  });
  it('should handle INCREMENT', () => {
    expect(
      counterReducer(randomNumber, {
        type: types.INCREMENT,
      }),
    ).toEqual(randomNumber + 1);
  });
  it('should handle DECREMENT', () => {
    expect(
      counterReducer(randomNumber, {
        type: types.DECREMENT,
      }),
    ).toEqual(randomNumber - 1);
  });
});
