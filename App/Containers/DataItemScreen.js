import React, { Component } from 'react'
import { Text, View } from 'react-native'
import NavigatorBar from '../Components/NavigatorBar'

// import { Images } from '../Themes'

// Styles
import styles from './Styles/DataItemScreenStyles'

export default class DataItemScreen extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    confirmPassword: '',
    url: '',
    note: ''
  }

  renderNavigator = () => {
    return <NavigatorBar
      menuRight
      iconRight={{
        type: 'IO',
        name: 'ios-menu-outline',
        size: 45,
        color: '#646D7E'
      }} />
  }

  onPressSave = () => {
    const { name, username, password, confirmPassword, url, note } = this.state

    this.props.onSaveItem({data: {name, username, password, confirmPassword, url, note}})
  }

  onPressCancel = () => {
    this.props.onCancelItem()
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderNavigator()}
        <Text>testttt</Text>
        {/* </ScrollView> */}
      </View>
    )
  }
}
