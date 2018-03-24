import React, { Component } from 'react'
import PropTypes from 'prop-types'
import LinearGradient from 'react-native-linear-gradient';
import { Text } from 'react-native'
import styles from './Styles/LinearGradientStyle'

export default class FullButton extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    const { node, customStyle, colors } = this.props
    return (
      <LinearGradient colors={colors || ['#77d0fe', '#77d0fe', '#66a6ff']} style={customStyle || styles.linearGradient}>
        {node}
      </LinearGradient>
    )
  }
}
