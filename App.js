import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './src/components/map/map';
// import Search from './src/components/search/search';

import api from './src/utils/api';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Map from './src/components/map/map';
// import Search from './src/components/search/search';
//
// import api from './src/utils/api';
//
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stations: []
//     };
//     api.getStations().then(res => {
//       this.setState({
//         stations: res.map(stationFactory)
//       })
//     }, err => {
//
//     })
//   }
//
//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <Map ref="map" stations={this.state.stations} focusOnMap={this.focusOnMap}/>
//         {this.state.stations.length > 0 ?
//           <Search ref="search" stations={this.state.stations} focusOnStation={this.refs.map.focusOnStation}
//                   refresh={this.refresh}/>
//           :
//           null}
//       </View>
//     );
//   }
//
//   focusOnMap = () => {
//     if (this.refs.search) {
//       this.refs.search.blur();
//     }
//   };
//
//   refresh = () => {
//
//   };
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
//
// //private methods
// var stationFactory = (station) => {
//   return {
//     latlng: {
//       latitude: station.coordinates.coordinates[1],
//       longitude: station.coordinates.coordinates[0]
//     },
//     title: station.featurename,
//     numberOfBikes: station.nbbikes,
//     id: station.id
//   }
// };
