import { takeLatest } from 'redux-saga/effects';

import * as types from '../actions/types';
import * as actions from '../actions';


export function* mySaga() {
  yield takeLatest(types.USERS_LOADED_REQUEST, actions.getUsersFromServer);
}
