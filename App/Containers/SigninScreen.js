import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Keyboard, StyleSheet } from 'react-native'
import { Form, Item, Input, Label, Button } from 'native-base'
import LinearGradient from '../Components/LinearGradient'

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
    const { username, password } = this.state

    // this.props.authenticate(username, password)
    if (username.toLowerCase() === 'gead' && password.toLowerCase() === 'gead') {
      this.props.navigation.navigate('DataListScreen')
    } else if (username.length === 0 || password.length === 0) {
      window.alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    } else {
      window.alert('ขออภัย ไม่พบข้อมูลในระบบ')
    }
  }

  renderInput = () => {
    return  <View style={styles.section}>
      <View style={styles.sectionBackground}>
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
              secureTextEntry={true}
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
          </Item>
          <View style={styles.containerBtn}>
            <Button block style={styles.primaryButton} onPress={this.onPressLogin}>
              <Text style={styles.btnText}>LOGIN</Text>
            </Button>
            {/* <Button block style={styles.secondaryButton} onPress={this.onPressSignup}>
              <Text style={styles.btnText}>SIGNUP</Text>
            </Button> */}
          </View>
        </Form>
      </View>
    </View>
  }

  onPressSignup = () => {
    this.props.navigation.navigate('SignupScreen')
  }

  render () {
    return (
      <LinearGradient
        node={
          <View style={styles.mainContainer}>
            <ScrollView style={styles.container}>
              {/* <View style={styles.centered}>
                <Image source={Images.mascot} style={styles.logo} />
              </View> */}
              {this.renderInput()}
            </ScrollView>
          </View>
        }
      />
    )
  }
}
