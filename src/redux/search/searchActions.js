'use strict';

import {
  SEARCH_AUTOCOMPLETE
} from '../../constants/actions';

import Api from '../../api';

export function searchAutocomplete(value) {
  return (dispatch, getState) => {
    alert('searchAutocomplete action: ' + value);

    dispatch({
      type: SEARCH_AUTOCOMPLETE
      //...
    })
  }
}