import * as actions from '../actions/types';

/**
 * Manages the user related state change
 * the functions are under /actions
 */
export default function userReducer(state = [], action) {
  switch (action.type) {
    case actions.USERS_LOADED_SUCCESS:
      return [...action.users];
    default:
      return state;
  }
}
