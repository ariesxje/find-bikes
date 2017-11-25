'use strict';
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Linking
} from 'react-native';

import Button from 'react-native-button';

export default class Callout extends Component {

  render() {
    return (
      <View style={{width: 200}}>
        <Text>{this.props.station.title}</Text>
        <Text>Available bikes: {this.props.station.numberOfBikes}</Text>
        <Button style={{fontSize: 15}} onPress={this.getDirection}>Show me directions</Button>
      </View>
    )
  }

  getDirection = () => {
    var googleMapPrefix = 'https://www.google.com/maps/',
      appleMapPrefix = 'http://maps.apple.com/',
      destinationParams = '?daddr=',
      latlng = this.props.station.latlng.latitude + ',' + this.props.station.latlng.longitude,
      googleDirectionMode = '&directionsmode=walking',
      appleTransportType = '&dirflg=w';

    var googleMapsURL = googleMapPrefix + destinationParams + latlng + googleDirectionMode,
      appleMapsURL = appleMapPrefix + destinationParams + latlng + appleTransportType;

    Linking.canOpenURL(googleMapPrefix).then((supported) => {
      supported ? Linking.openURL(googleMapsURL) : Linking.openURL(appleMapsURL);
    })
  };
}
