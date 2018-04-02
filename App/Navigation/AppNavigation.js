import { StackNavigator } from 'react-navigation'
import SigninScreen from '../Containers/SigninScreen'
import SignupScreen from '../Containers/SignupScreen'
import DataListScreen from '../Containers/DataListScreen'
import DetailScreen from '../Containers/DetailScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  SigninScreen: { screen: SigninScreen },
  SignupScreen: { screen: SignupScreen },
  DataListScreen: { screen: DataListScreen },
  DetailScreen: { screen: DetailScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DataListScreen',
  // initialRouteName: 'SigninScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
