import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Button } from 'native-base'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/DataListScreenStyles'

export default class DataListScreen extends Component {
  onPressAddData = () => {
    this.props.navigation.navigate('DataItemScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        {/* <ScrollView style={styles.container}> */}
          <Text>DataListScreen</Text>
          <Button block style={styles.primaryButton} onPress={this.onPressAddData}>
            <Text style={styles.btnText}>Add</Text>
          </Button>
        {/* </ScrollView> */}
      </View>
    )
  }
}
