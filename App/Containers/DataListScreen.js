import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import { Button } from 'native-base'
import NavigatorBar from '../Components/NavigatorBar'
import DataItemScreen from './DataItemScreen'

// Styles
import styles from './Styles/DataListScreenStyles'

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
    this.props.navigation.navigate('DetailScreenStyles')
  }

  renderItem = () => {
    return <FlatList
      data={[{key: 'a'}, {key: 'b'}]}
      renderItem={({item}) => <DataItemScreen />}
    />
  }

  render () {
    return (
      <View style={styles.container}>
        {this.renderNavigator()}
        {/* <ScrollView style={styles.container}> */}
        <Text>DataListScreen</Text>
        <Button block style={styles.primaryButton} onPress={this.onPressAddData}>
          <Text style={styles.btnText}>Add</Text>
        </Button>
        {this.renderItem()}
        {/* </ScrollView> */}
      </View>
    )
  }
}
