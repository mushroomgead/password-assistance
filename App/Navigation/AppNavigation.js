import { StackNavigator } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import SigninScreen from '../Containers/SigninScreen'
import SignupScreen from '../Containers/SignupScreen'
import DataListScreen from '../Containers/DataListScreen'
import DataItemScreen from '../Containers/DataItemScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  SigninScreen: { screen: SigninScreen },
  SignupScreen: { screen: SignupScreen },
  DataListScreen: { screen: DataListScreen },
  DataItemScreen: { screen: DataItemScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SigninScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
