import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';

import * as userActions from './userActions';
import * as types from '../actions/types';
import { BASE_URL } from '../api/userApi'

describe('User Action', () => {
  describe('Async Actions', () => {

    afterEach(() => nock.cleanAll());

    it('should Should create LOADING_DATA and USERS_LOADED_SUCCESS when loading users', (done) => {
      const expectedAction = {
        type: types.USERS_LOADED_SUCCESS,
        users: [{ name: { first :'Alef', last: 'Bet' } }],
      };
      nock(BASE_URL)
      .get('?results=20')
      .reply(200, {
        results: expectedAction.users
      });

      const store = mockStore({courses: [], expectedAction});
      store.dispatch(userActions.getUsersFromServer())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual(types.USERS_LOADED_SUCCESS);
        done;
        })
    });
  });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);