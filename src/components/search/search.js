'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import R from 'ramda';

import Typeahead from './typeahead';
import Suggestion from './typeahead-suggestion';

class FBSearchController extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showList: false,
      suggestions: first5(props.stations.map(station => {
        station.title = station.title.substring(0, station.title.indexOf('-')).trim()
        return station;
      }))
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Typeahead ref="typeahead" toggleSuggestions={this.toggleSuggestions} searchStation={this.searchStation}
          refresh={this.props.refresh}/>
        {this.renderList()}
      </View>
    )
  }

  renderList = () => {
    if (this.state.showList) {
      return (
        <View>
          {this.state.suggestions.map(suggestion => (
            <Suggestion suggestion={suggestion} key={suggestion.id} focusOnStation={this.closeSuggestionsAndFocusOnStation}/>
          ))}
        </View>
      );
    } else {
      return;
    }
  };

  toggleSuggestions = (toggle) => {
    this.setState({
      showList: toggle
    })
  };

  searchStation = (query) => {
    this.setState({
      suggestions: first5(this.props.stations.filter((station) => {
        if (query) {
          return station.title.toLowerCase().indexOf(query.toLowerCase()) > -1;
        } else {
          return station;
        }
      }))
    })
  };

  closeSuggestionsAndFocusOnStation = (station) => {
    this.refs.typeahead.blur()
    this.refs.typeahead.completeInput(station.title)
    this.props.focusOnStation(station)
  };

  blur = () => {
    this.refs.typeahead.blur();
  };
}

//helper methods
var firstN = function (array, n) {
  return R.slice(0, n, array);
}

var first5 = function (array) {
  return firstN(array, 5);
}

var styles = {
  container: {
    flex: 1,
    position: 'absolute',
    top: 30,
    left: 0,
    right: 0,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#FFF'
  }
}

module.exports = FBSearchController;