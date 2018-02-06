'use strict';

import React, { PureComponent } from 'react';

import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { connectProps } from '../redux/connect';

import Map from './Map';

class App extends PureComponent {
  componentDidMount() {
    console.log('Hello From ' + this.props.global.platform);
    console.log('Some Redux Actions...', this.props.actions);
  }

  render() {
    return (
      <View style={styles.container}>
        <Map />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: StyleSheet.absoluteFillObject
})

export default connectProps('global')(App);
