import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { Form, Item, Input, Label, Button } from 'native-base'
import DevscreensButton from '../../ignite/DevScreens/DevscreensButton.js'

import { Images } from '../Themes'

// Styles
import styles from './Styles/SignupScreenStyles'

export default class SignupScreen extends Component {

  render () {
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>

          <View style={styles.section}>
            <Form>
              <Item floatingLabel>
                <Label>Email</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Password</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Label>Confirm Password</Label>
                <Input />
              </Item>
              <View style={styles.containerBtn}>
                <Button block style={styles.primaryButton} onPress={this.onPressLogin}>
                  <Text style={styles.btnText}>Cancel</Text>
                </Button>
                <Button block success style={styles.secondaryButton} onPress={this.onPressSignup}>
                  <Text style={styles.btnText}>OK</Text>
                </Button>
              </View>
            </Form>
          </View>

        </ScrollView>
      </View>
    )
  }
}
