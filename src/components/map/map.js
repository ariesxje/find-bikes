'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import MapView from 'react-native-maps';

import Pin from './pin';

import Callout from './callout';

const defaul_region =  {
  longitudeDelta: 0.06923792847817367,
  latitude: -37.81850018553871,
  longitude: 144.9617383510603,
  latitudeDelta: 0.09436708477267786
};

class FBMapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: defaul_region,
    };

    this.handleDragMap = this.handleDragMap.bind(this);
  }

  handleDragMap(region) {
    this.setState({
      region,
    })
  }

  render() {
    return (
      <MapView
        ref="map"
        style={styles.map}
        region={this.state.region}
        onPress={this.props.focusOnMap}
        onRegionChange={this.handleDragMap}
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
    )
  }

  focusOnStation = (station) => {
    this.refs.map.animateToCoordinate(station.latlng, 2);
    setTimeout(() =>  {this.refs['marker' + station.id].showCallout()}, 1000)
  };
}

module.exports = FBMapView;

var styles = StyleSheet.create({
  map: {
    flex: 1
  }
});