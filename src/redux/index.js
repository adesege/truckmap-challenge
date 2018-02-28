'use strict';

// Actions

import * as globalActions from './global/globalActions';
import * as searchActions from './search/searchActions';
import * as userActions from './user/userActions';
import * as locationActions from './location/locationActions';


export const actions = [
  globalActions,
  searchActions,
  userActions,
  locationActions,
];

// Reducers

import global from './global/globalReducer';
import search from './search/searchReducer';
import user from './user/userReducer';
import location from './location/locationReducer';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  global,
  search,
  user,
  location,
});
