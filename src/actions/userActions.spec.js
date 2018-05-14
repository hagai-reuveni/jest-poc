import * as mocks from '../mock';
import * as userActions from './userActions';
import * as types from '../actions/types';
import { BASE_URL } from '../api/userApi'


describe('User Action', () => {
  describe('Async Actions', () => {

    it('should Should create USERS_LOADED_SUCCESS when loading users', (done) => {
     const resultObj = {results: [{ name: { first :'Alef', last: 'Bet' } }]};
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.resolve(
          mocks.mockResponse(200, null, JSON.stringify(resultObj))));
      const store = mocks.createMockStore({});
      store.dispatch(userActions.getUsersFromServer())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.USERS_LOADED_SUCCESS);
        done();
        })
    });


    it('should throw on loading error', (done) => {
      window.fetch = jest.fn().mockImplementation(() =>
        Promise.reject('error'));
      const store = mocks.createMockStore({});
      store.dispatch(userActions.getUsersFromServer())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.ERROR_DATA_LOADING);
        done();
        })
    });
  });
});
