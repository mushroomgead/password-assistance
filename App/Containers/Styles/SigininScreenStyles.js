import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    backgroundColor: Colors.background,
    paddingBottom: Metrics.baseMargin
  },
  logo: {
    marginTop: Metrics.doubleSection,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain'
  },
  centered: {
    alignItems: 'center'
  },
  containerBtn: {
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-between',
    paddingTop: 40
  },
  primaryButton: {
    flex: 1,
    marginRight: 10
  },
  secondaryButton: {
    flex: 1
  },
  btnText: {
    color: Colors.silver,
    fontWeight: 'bold'
  }
})
