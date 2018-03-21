import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Styles/NavigatorBarStyle'
import Icon from 'react-native-vector-icons/FontAwesome'
import IconIO from 'react-native-vector-icons/Ionicons'
// import LinearGradient from 'react-native-linear-gradient'

// const deviceWidth = Dimensions.get('window').width
// const deviceHeight = Dimensions.get('window').height

class NavigatorBar extends Component {
  renderLeftMenu = () => {
    if (this.props.menuLeft === true) {
      let icon
      if (this.props.iconLeft.type === 'FontAS') {
        icon = <Icon name={this.props.iconLeft.name} size={this.props.iconLeft.size} color={this.props.iconLeft.color ? this.props.iconLeft.color : '#323232'} />
      } else if (this.props.iconLeft.type === 'IO') {
        icon = <IconIO name={this.props.iconLeft.name} size={this.props.iconLeft.size} color={this.props.iconLeft.color ? this.props.iconLeft.color : '#323232'} />
      }

      return <TouchableOpacity onPress={this.props.onPressLeftMenu} style={styles.iconLeft}>
        {icon}
      </TouchableOpacity>
    } else {
      return <View style={styles.iconLeft} />
    }
  }

  render () {
    return <View style={[{ backgroundColor: this.props.bgColor ? this.props.bgColor : 'rgba(0,0,0,0)' }, styles.containerNav]}>
      {this.renderLeftMenu()}
      <Text style={[{ color: this.props.titleColor ? this.props.titleColor : '#323232' }, styles.textTitle]}>
        {this.props.title ? this.props.title : ''}
      </Text>
    </View>
  }
}

NavigatorBar.PropTypes = {
  openSideNav: PropTypes.func
}

export default connect(null, null)(NavigatorBar)
