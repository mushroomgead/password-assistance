import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    height: 80,
    borderRadius: 4,
    // paddingBottom: Metrics.baseMargin,
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textName: {
    fontSize: 16
  }
})
