import React, { Component } from 'react'
import { Text, View, Keyboard } from 'react-native'
import { Form, Item, Label, Button, Input } from 'native-base'
import NavigatorBar from '../Components/NavigatorBar'

// import { Images } from '../Themes'

// Styles
import styles from './Styles/DetailScreenStyles'

export default class DetailScreen extends Component {
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
        {/* <ScrollView style={styles.container}> */}
        <View style={styles.section}>
          <Form>
            <Item floatingLabel>
              <Label>name</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='done'
                maxLength={60}
                onChangeText={(name) => this.setState({ name })}
                value={this.state.name}
              />
            </Item>
            <Item floatingLabel last>
              <Label>username</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='done'
                maxLength={60}
                onChangeText={(username) => this.setState({ username })}
                value={this.state.username}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='done'
                maxLength={60}
                onChangeText={(password) => this.setState({ password })}
                value={this.state.password}
              />
            </Item>
            <Item floatingLabel last>
              <Label>Confirm Password</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='done'
                maxLength={60}
                onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
                value={this.state.confirmPassword}
              />
            </Item>
            <Item floatingLabel last>
              <Label>URL</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='done'
                maxLength={60}
                onChangeText={(url) => this.setState({ url })}
                value={this.state.url}
              />
            </Item>
            <Item floatingLabel last>
              <Label>note</Label>
              <Input
                onSubmitEditing={Keyboard.dismiss}
                returnKeyType='done'
                maxLength={60}
                onChangeText={(note) => this.setState({ note })}
                value={this.state.note}
              />
            </Item>
            <View style={styles.containerBtn}>
              <Button block style={styles.primaryButton} onPress={this.onPressCancel}>
                <Text style={styles.btnText}>Cancel</Text>
              </Button>
              <Button block success style={styles.secondaryButton} onPress={this.onPressSave}>
                <Text style={styles.btnText}>SAVE</Text>
              </Button>
            </View>
          </Form>
        </View>
        {/* </ScrollView> */}
      </View>
    )
  }
}
