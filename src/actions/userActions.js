import * as userApi from '../api/userApi';
import { call, put } from 'redux-saga/effects';

import {
  USERS_LOADED_REQUEST,
  ERROR_DATA_LOADING,
  USERS_LOADED_SUCCESS,
} from './types';

/**
 * Get Users from the server
 * @return users' list
 */

export function fetchUsers() {
    return { type: USERS_LOADED_REQUEST}
}

export function* getUsersFromServer() {
  console.log('INNNNN');
    try {
      const response = yield call(userApi.getAll);
      console.log(response.results);
      yield put({
        type: USERS_LOADED_SUCCESS,
        users: response.results,
      });
    } catch (error) {
      yield put({ type: ERROR_DATA_LOADING, error });
    }
}
