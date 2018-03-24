import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import NavigatorBar from '../Components/NavigatorBar'

// import { Images } from '../Themes'

// Styles
import styles from './Styles/DataItemScreenStyles'

export default class DataItemScreen extends Component {

  onPressShowDetail = () => {
    this.props.navigation.navigate('DetailScreen')
  }

  renderItemList = () => {
    const { name } = this.props

    return <Text style={styles.textName}>{name}</Text>
  }

  render () {
    return (
      <TouchableOpacity style={styles.container} onPress={this.onPressShowDetail}>
        {this.renderItemList()}
      </TouchableOpacity>
    )
  }
}
