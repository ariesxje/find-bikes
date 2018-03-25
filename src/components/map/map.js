import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MapView from 'react-native-maps';
import Pin from './Pin';
import Callout from './Callout';

const default_region =  {
  latitude: -37.82706320389364,
  latitudeDelta: 0.09451123647402682,
  longitude: 144.96347789792821,
  longitudeDelta: 0.06935173795687888,
};

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.handleDragMap = this.handleDragMap.bind(this);
    this.focusOnStation = this.focusOnStation.bind(this);
  }

  handleDragMap(region) {
    this.setState({
      region,
    })
  }

  focusOnStation(station) {
    this.refs.map.animateToCoordinate(station.latlng, 800);
    setTimeout(() =>  {this.refs['marker' + station.id].showCallout()}, 1000)
  }

  render() {
    return (
      <MapView
        ref="map"
        style={styles.map}
        initialRegion={default_region}
        onPress={this.props.focusOnMap}
      >
        {this.props.stations.map(station => (
          <MapView.Marker
            ref={'marker' + station.id}
            coordinate={station.latlng}
            key={station.id}
          >
            <Pin numberOfBikes={station.numberOfBikes} delay={station.id}/>
            <MapView.Callout>
              <Callout station={station}/>
            </MapView.Callout>
          </MapView.Marker>
        ))}
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  }
});
