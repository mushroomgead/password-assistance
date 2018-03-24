import { StyleSheet, Dimensions } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

const height = Dimensions.get('window').height

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    // backgroundColor: Colors.background,
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
  section: {
    height: height,
    justifyContent: 'center',
  },
  sectionBackground: {
    height: height / 2.5 ,
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 5
  },
  containerBtn: {
    flexDirection: 'row',
    // flex: 2,
    justifyContent: 'space-between',
    paddingTop: 40
  },
  primaryButton: {
    flex: 1,
    backgroundColor: '#001588'
    // marginRight: 10
  },
  secondaryButton: {
    flex: 1
  },
  btnText: {
    color: Colors.silver,
    fontWeight: 'bold'
  }
})
