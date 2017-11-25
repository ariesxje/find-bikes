'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet,
  LinkingIOS
} from 'react-native';

import Button from 'react-native-button';

class FBCalloutView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      station: props.station
    }
  }

  render() {
    return (
      <View>
        <Text>{this.state.station.title}</Text>
        <Text>Available bikes: {this.state.station.numberOfBikes}</Text>
        <Button style={{fontSize: 15}} onPress={this.getDirection}>Show me directions</Button>
      </View>
    )
  }

  getDirection = () => {
    var googleMapPrefix = 'comgooglemaps://',
      appleMapPrefix = 'http://maps.apple.com/',
      destinationParams = '?daddr=',
      latlng = this.state.station.latlng.latitude + ',' + this.state.station.latlng.longitude,
      googleDirectionMode = '&directionsmode=walking',
      appleTransportType = '&dirflg=w';

    var googleMapsURL = googleMapPrefix + destinationParams + latlng + googleDirectionMode,
      appleMapsURL = appleMapPrefix + destinationParams + latlng + appleTransportType;

    LinkingIOS.canOpenURL(googleMapPrefix, (supported) => {
      supported ? LinkingIOS.openURL(googleMapsURL) : LinkingIOS.openURL(appleMapsURL);
    })
  };
}

module.exports = FBCalloutView;