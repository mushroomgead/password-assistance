import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Keyboard } from 'react-native'
import { Form, Item, Input, Label, Button } from 'native-base'

import { Images } from '../Themes'

// Styles
import styles from './Styles/SigininScreenStyles'

export default class SigninScreen extends Component {
  state = {
    username: '',
    password: ''
  }

  // componentWillReceiveProps(nextProps) {
    // this.props.navigation.navigate('DataListScreen')
  // }

  onPressLogin = () => {
    // const { username, password } = this.state

    // this.props.authenticate(username, password)
    this.props.navigation.navigate('DataListScreen')
  }

  onPressSignup = () => {
    this.props.navigation.navigate('SignupScreen')
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.centered}>
            <Image source={Images.mascot} style={styles.logo} />
          </View>

          <View style={styles.section}>
            <Form>
              <Item floatingLabel>
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
              <View style={styles.containerBtn}>
                <Button block style={styles.primaryButton} onPress={this.onPressLogin}>
                  <Text style={styles.btnText}>LOGIN</Text>
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
