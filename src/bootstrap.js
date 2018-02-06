'use strict';

import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import { configureStore } from './redux/connect';

import { globalInit } from './redux/global/globalActions';

import App from './containers/App';

export default function bootstrap(platform) {
  class Challenge extends React.Component {
    componentWillMount() {
      const store = configureStore();

      this.store = store;

      store.dispatch(globalInit(platform));
    }

    render() {
      return (
        <Provider store={this.store}>
          <App store={this.store} />
        </Provider>
      );
    }
  }

  AppRegistry.registerComponent('Challenge', () => Challenge);
}
