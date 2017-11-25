'use strict';

import React, {
  Component,
  View,
  Text,
  StyleSheet
} from 'react-native';

import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

class FBRefreshButton extends Component {
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

module.exports = FBRefreshButton;