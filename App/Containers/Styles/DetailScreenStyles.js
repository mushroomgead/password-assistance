import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin
  },
  section: {
    borderRadius: 5,
    backgroundColor: '#ffffff',
    padding: 20
  },
  containerBtn: {
    flexDirection: 'row',
    // flex: 2,
    justifyContent: 'space-between',
    paddingTop: 40
  },
  primaryButton: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderColor: '#0e6fff',
    borderWidth: 2,
    flex: 1,
    marginRight: 10
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    borderColor: '#860564',
    borderWidth: 2,
    flex: 1
  },
  btnText: {
    color: '#000000',
  }
})
