'use strict'

import keymirror from 'keymirror';

const actions = keymirror({
  GLOBAL_INIT: null,
  SEARCH_AUTOCOMPLETE: null,
  USER_SELECT: null,
  GET_USERS: null,
  GET_LOCATION: null,
  //...
})

module.exports = actions;
