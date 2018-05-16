import * as mocks from '../mock';
import * as userActions from './userActions';
import * as types from '../actions/types';
import * as userApi from '../api/userApi'
import { call, put } from 'redux-saga/effects';


describe('User Action', () => {
  describe('Async Actions', () => {

    const getUsersFromServer = userActions.getUsersFromServer();
    it('should call the API', (done) => {
      expect(getUsersFromServer.next().value).toEqual(call(userApi.getAll));
      done();
    });
    it('should create USERS_LOADED_SUCCESS when loading users', (done) => {
      const users = {results: []};
      expect(getUsersFromServer.next(users).value).toEqual(put({ type: types.USERS_LOADED_SUCCESS, users: users.results }));
      done();
    });
    it('should throw on loading error', (done) => {
      expect(getUsersFromServer.throw('error').value).toEqual(put({ type: types.ERROR_DATA_LOADING, error: 'error' }));
      done();
    });
  });
});
