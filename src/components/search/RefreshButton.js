'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class RefreshButton extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Button onPress={this.props.refresh}>
        <Icon name="repeat" size={15} color="#666666"></Icon>
      </Button>
    )
  }
}
