import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: 150
  },
  containerAdd: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  btnCircle: {
    backgroundColor: '#001588',
    width: 50,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAdd: {
    color: Colors.silver,
    fontSize: 26
  }
})
