import React, { Component } from 'react'
import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import { Button } from 'native-base'
import NavigatorBar from '../Components/NavigatorBar'
import DataItemScreen from '../Components/DataItemScreen'
import LinearGradient from '../Components/LinearGradient'
// Styles
import styles from './Styles/DataListScreenStyles'

const nameList = [
  { id: 1, name: 'Google+' },
  { id: 2, name: 'Facebook' }
]

export default class DataListScreen extends Component {
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

  onPressAddData = () => {
    this.props.navigation.navigate('DetailScreen')
  }

  _keyExtractor = (item, index) => item.id

  renderItem = () => {
    return <FlatList
      data={nameList}
      keyExtractor={this._keyExtractor}
      renderItem={({item}) => <DataItemScreen navigation={this.props.navigation} name={item.name} />}
    />
  }

  render () {
    return (
      <LinearGradient
        node={
          <View style={styles.container}>
            {this.renderNavigator()}
            <TouchableOpacity style={styles.containerAdd} onPress={this.onPressAddData}>
              <View style={styles.btnCircle}>
                <Text style={styles.textAdd}>+</Text>
              </View>
            </TouchableOpacity>
            {this.renderItem()}
          </View>
        }
      />
    )
  }
}
