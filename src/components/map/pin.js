'use strict';

import React, {
  Component,
  View,
  StyleSheet,
  Image,
  Animated
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

var MAX_SIZE = 50;

class FBPinView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfBikes: props.numberOfBikes,
      bounceValue: new Animated.Value(0)
    }
  }

  render() {
    return (
      <Animated.View style={[styles.iconContainer, styles.availability(this.state.numberOfBikes), this.getContainerStyle(), this.scaleAnimation()]}>
        <Icon name="bicycle" color="white" size={this.getIconSize()}/>
      </Animated.View>
    )
  }

  componentDidMount() {
    Animated.sequence([
      Animated.delay(this.props.delay*10),
      Animated.spring(
        this.state.bounceValue,
        {
          toValue: 1,
          friction: 4,
        }
      )
    ]).start();
  }

  getIconSize = () => {
    var number = this.state.numberOfBikes/1.8;
    return 10 + (number > MAX_SIZE ? MAX_SIZE : number);
  };

  getContainerSize = () => {
    var number = this.state.numberOfBikes/1;
    return 16 + (number > MAX_SIZE ? MAX_SIZE : number);
  };

  getContainerStyle = () => {
    return {
      width: this.getContainerSize(),
      height: this.getContainerSize(),
      borderRadius: this.getContainerSize()/2
    }
  };

  scaleAnimation = () => {
    return {
      transform: [                        // `transform` is an ordered array
        {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
      ]
    }
  };
}

module.exports = FBPinView;

var styles = {
  iconContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.8
  },
  availability: numberOfBikes => {
    return numberOfBikes > 0? {backgroundColor: '#ff2d55'} : {backgroundColor: '#ccc'};
  },
  icon: {
    tintColor: '#ffffff'
  }
}