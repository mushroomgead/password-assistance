import React, { Component } from 'react'
import { Text, View, Keyboard } from 'react-native'
import { Form, Item, Label, Button, Input, Picker } from 'native-base'
import NavigatorBar from '../Components/NavigatorBar'
import LinearGradient from '../Components/LinearGradient'
import { applist } from '../Data/AppList'
// import { Images } from '../Themes'

// Styles
import styles from './Styles/DetailScreenStyles'

export default class DetailScreen extends Component {
  state = {
    name: 'Google+',
    username: 'username@gmail.com',
    password: '11111111',
    confirmPassword: '11111111',
    url: 'https://plus.google.com/discover',
    note: 'This is my account for sharing my lifestyle !',
    nameEtc: ''
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
    this.props.navigation.goBack()
    // const { name, username, password, confirmPassword, url, note } = this.state
    //
    // this.props.onSaveItem({data: {name, username, password, confirmPassword, url, note}})
  }

  onPressCancel = () => {
    this.props.navigation.goBack()
    // this.props.onCancelItem()
  }

  renderSpacialInput = () => {
    if (this.state.name === 'etc') {
      return  <Item floatingLabel>
        <Label>name</Label>
        <Input
          onSubmitEditing={Keyboard.dismiss}
          returnKeyType='done'
          maxLength={60}
          onChangeText={(nameEtc) => this.setState({ nameEtc })}
          value={this.state.nameEtc}
        />
      </Item>
    }
  }

  renderInput = () => {
    return <View style={styles.section}>
      <Form>
        <Picker
          mode="dropdown"
          placeholder="Select One"
          selectedValue={this.state.selected2}
          onValueChange={(name) => this.setState({ name })}
          selectedValue={this.state.name}
        >
          { applist.map(item => <Item key={item.value} label={item.name} value={item.value} />) }
        </Picker>
        {this.renderSpacialInput()}
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
          <Button style={styles.primaryButton} onPress={this.onPressSave}>
            <Text style={styles.btnText}>SAVE</Text>
          </Button>
          <Button style={styles.secondaryButton} onPress={this.onPressCancel}>
            <Text style={styles.btnText}>CANCEL</Text>
          </Button>
        </View>
      </Form>
    </View>
  }

  render () {
    return (
      <LinearGradient
        node={
          <View style={styles.container}>
            {this.renderNavigator()}
            {/* <ScrollView style={styles.container}> */}
            {this.renderInput()}
            {/* </ScrollView> */}
          </View>
        }
      />
    )
  }
}
