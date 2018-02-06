'use strict';

import { createStore, applyMiddleware, bindActionCreators, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import { connect as reduxConnect } from 'react-redux';

import { pick } from 'lodash';

import { actions, rootReducer } from './index';

const logger = createLogger({
  collapsed: true,
  diff: true
});

const enhancer = compose(
  applyMiddleware(thunk, logger)
);

function mapDispatchToProps(dispatch) {
  const creators = Object.assign({}, ...actions);

  return {
    actions: bindActionCreators(creators, dispatch),
    dispatch
  };
}

export function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, enhancer);
};

// Not required to use these redux connect abstractions. Plenty of valid reasons not to.

export function connect(selector) {
  return reduxConnect(selector, mapDispatchToProps);
}

export function connectProps(...props) {
  return reduxConnect((state) => pick(state, props), mapDispatchToProps);
}
