import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Form, Item, Input, Label, Button } from 'native-base'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'
import NavigatorBar from '../Components/NavigatorBar'

import { Images } from '../Themes'

// Styles
import styles from './Styles/SignupScreenStyles'

export default class SignupScreen extends Component {

  state = {
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
  }

  renderNavigator = () => {
    return <NavigatorBar
      title="สมัครสมาชิก"
      menuRight={true}
      iconRight={{
        type: 'IO',
        name: 'ios-menu-outline',
        size: 45,
        color: '#646D7E'
      }} />
  }

  onPressSignup = () => {
    const { email, username, password, confirmPassword } = this.state

    this.props.onPressSignup({ data: email, username, password, confirmPassword })
  }

  onPressCancel = () => {
    this.props.onPressCancel()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        {this.renderNavigator()}
        <ScrollView style={styles.container}>

          <View style={styles.section}>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input
                  onSubmitEditing={Keyboard.dismiss}
                  returnKeyType='done'
                  maxLength={60}
                  onChangeText={(email) => this.setState({ email })}
                  value={this.state.email}
                />
              </Item>
              <Item floatingLabel last>
                <Label>Username</Label>
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
              <View style={styles.containerBtn}>
                <Button block style={styles.primaryButton} onPress={this.onPressCancel}>
                  <Text style={styles.btnText}>Cancel</Text>
                </Button>
                <Button block success style={styles.secondaryButton} onPress={this.onPressSignup}>
                  <Text style={styles.btnText}>SIGNUP</Text>
                </Button>
              </View>
            </Form>
          </View>

        </ScrollView>
      </View>
    )
  }
}
