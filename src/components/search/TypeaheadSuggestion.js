'use strict';

import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated
} from 'react-native';

var Icon = require('react-native-vector-icons/FontAwesome');

export default class TypeaheadSuggestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(0)
    }
  }

  componentDidMount() {
    Animated.timing(
      this.state.height,
      {
        toValue: 60,
        duration: 100
      }
    ).start()
  }

  render() {
    return (
      <Animated.View style={[styles.row, {height: this.state.height}]} key={this.props.suggestion.id}>
        <View style={styles.leftbutton}></View>
        <TouchableOpacity onPress={() => this.props.focusOnStation(this.props.suggestion)} style={styles.middle}>
          <Text style={[styles.station]}>
            {this.props.suggestion.title}
          </Text>
        </TouchableOpacity>
        <View style={styles.rightbutton}/>
      </Animated.View>
    )
  }
}

var styles = {
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  station: {
    justifyContent: 'center'
  },
  leftbutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  middle: {
    flex: 5,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#cccccc',
  },
  rightbutton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};
