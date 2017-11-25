'use strict';

import React, {
  Component,
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Refresh from './refresh-button';

class FBTypeaheadView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      isFocused: false
    }
  }

  render() {
    return (
      <View style={styles.typeahead}>
        <View style={styles.leftbutton}>
          {this.state.isFocused ?
            <TouchableOpacity onPress={() => {this.refs.typeahead.blur()}}>
              <Icon name="chevron-left" size={15} color="#666666"/>
            </TouchableOpacity>
          :
            <Icon name="search" size={15} color="#666666"/>
          }

        </View>
        <TextInput
          ref="typeahead"
          autoCorrect={false}
          clearButtonMode='while-editing'
          style={styles.middle}
          placeholder='Find a station'
          onFocus={() => this.onFocus()}
          onBlur={() => this.onBlur()}
          onChangeText={this.handleInputChange}
          value={this.state.text}/>
        <View style={styles.rightbutton}>
          <Refresh refresh={this.props.refresh}/>
        </View>
      </View>
    )
  }

  handleInputChange = (text) => {
    this.setState({
      text: text
    })
    this.props.searchStation(text)
  };

  onFocus = () => {
    this.setState({
      isFocused: true
    })
    this.props.toggleSuggestions(true)
  };

  onBlur = () => {
    this.setState({
      isFocused: false
    })
    this.props.toggleSuggestions(false)
  };

  blur = () => {
    this.refs.typeahead.blur()
  };

  completeInput = (text) => {
    this.setState({
      text: text
    })
    this.props.searchStation(text)
  };
}

module.exports = FBTypeaheadView;

var styles = {
  typeahead: {
    flex: 1,
    height: 50,
    flexDirection: 'row'
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
}