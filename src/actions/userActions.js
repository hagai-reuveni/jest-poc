import * as userApi from '../api/userApi';

import {
  LOADING_DATA,
  ERROR_DATA_LOADING,
  USERS_LOADED_SUCCESS,
} from './types';

/**
 * Get Users from the server
 * @return users' list
 */

function usersLoaded (users) {
  return {
    type: USERS_LOADED_SUCCESS,
    users,
  }
}

export function getUsersFromServer() {
  return async dispatch => {
    try {
      const response = await userApi.getAll();
      // dispatch(usersLoaded(response.data.results));
      const data = await response.json();
      dispatch(usersLoaded(data.results));
      return response;
    } catch (error) {
      dispatch({ type: ERROR_DATA_LOADING, error });
      throw error;
    }
  }
}
