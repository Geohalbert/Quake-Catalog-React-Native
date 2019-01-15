/**
 * Copyright 2017 Flexdrive, Inc.
 *
 * Flexdrive Mobile 2.0
 */

import React, { Component } from 'react'
import {
  Animated,
  StyleSheet,
  Easing,
  View
} from 'react-native'
import { Icons } from '../../styles/theme'
import Animation from 'lottie-react-native';
import LOADER_JSON from '../../assets/lottie/loading-circle.json'

export default class Loader extends Component {
  constructor(props) {
    super(props)
    this.animation = new Animated.Value(0)
  }

  spin() {
    Animated.loop(
      Animated.timing(this.animation, {
        toValue: 1,
        duration: 1250,
        easing: Easing.linear,
        useNativeDriver: true
      })
    ).start()
  }

  componentDidMount() {
    this.spin()
  }

  render() {
    return (<View style={loader.loadingContainer}>
      <Animation
        style={[loader.loadingContainer, this.props.style]}
        loop={true}
        source={LOADER_JSON}
        progress={this.animation.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolate: 'clamp'
        })}
      />
    </View>)
  }


  showAnimatedSpinner(style) {
    const spin = this.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '359deg']
    })
    return (<Animated.Image
      style={[style, { transform: [{ rotate: spin }] }]}
      source={this.props.source || Icons.spinner}
    />)
  }

}

let loader = StyleSheet.create({
  loadingContainer: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center'
  }
})