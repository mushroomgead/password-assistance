import { StyleSheet, Dimensions, Platform } from 'react-native'
import { Metrics } from '../../Themes/'

export default StyleSheet.create({
  containerNav: {
    height: Metrics.navBarHeight,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 15 : 0,
  },
  iconLeft: {
    flex: 1,
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  iconRight: {
    flex: 1,
    paddingRight: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  textTitle: {
    flex: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    padding: 12.5,
    backgroundColor: 'rgba(0,0,0,0)'
  },
})
