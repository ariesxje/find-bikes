import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './src/components/map/Map';
import Search from './src/components/search/Search';

import api from './src/utils/api';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stations: []
    };

    this.focusOnMap = this.focusOnMap.bind(this);
  }

  componentWillMount() {
    const stationFactory = (station) => {
      return {
        latlng: {
          latitude: station.coordinates.coordinates[1],
          longitude: station.coordinates.coordinates[0]
        },
        title: station.featurename,
        numberOfBikes: station.nbbikes,
        id: station.id
      }
    };
    api.getStations().then(res => {
      this.setState({
        stations: res.map(stationFactory)
      })
    }, err => {})
  }

  focusOnMap() {
    if (this.refs.search) {
      this.refs.search.blur();
    }
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Map ref="map" stations={this.state.stations} focusOnMap={this.focusOnMap}></Map>
        {this.state.stations.length > 0 &&
          <Search ref="search" stations={this.state.stations} focusOnStation={this.refs.map.focusOnStation}
                  refresh={this.refresh}/>
        }
      </View>
    );
  }
}

