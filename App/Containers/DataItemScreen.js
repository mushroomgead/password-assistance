import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/DataItemScreenStyles'

export default class DataItemScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.container}> */}
          <Text>DataItemScreen</Text>
        {/* </ScrollView> */}
      </View>
    )
  }
}
