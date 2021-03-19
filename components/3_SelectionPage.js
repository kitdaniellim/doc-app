import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { selectionStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserType } from '../actions/users';

const CLIENT = 'CLIENT';
const CONSULTANT = 'CONSULTANT';

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  SignUpClient = () => {
    this.props.updateUserType(CLIENT);
    // this.props.userType = CLIENT;
    this.props.navigation.navigate('Signup1');
  }
  
  SignUpConsultant = () => {
    this.props.updateUserType(CONSULTANT);
    // this.props.userType = CONSULTANT;
    this.props.navigation.navigate('Signup1');
  }

  render() {
    return (
      <View style={selectionStyles.container}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={selectionStyles.left_scaffold}
          onPress={this.SignUpClient}>
          <LinearGradient
            colors={['rgba(243,243,243,0.4)', 'transparent']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={globalStyles.gradient}
          >
            <View style={selectionStyles.left_icon_container}>
              <Image
                style={{ width: 140, height: 140 }}
                source={require('../assets/client.png')}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          style={selectionStyles.right_scaffold}
          onPress={this.SignUpConsultant}>
          <LinearGradient
            colors={['rgba(243,243,243,0.4)', 'transparent']}
            start={{ x: 0, y: 1 }}
            end={{ x: 0, y: 0 }}
            style={globalStyles.gradient}
          >
            <View style={selectionStyles.right_icon_container}>
              <Image
                style={{ width: 140, height: 140 }}
                source={require('../assets/consultant.png')}
              />
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
// const Selection = ({ navigation }) => {
//   const SignUpClient = () => {
//     this.props.updateUserType('Client');
//     navigation.navigate('SignupClient1',);
//   }
//   const SignUpConsultant = () => {
//     navigation.navigate('SignupConsultant1');
//   }


// }

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateUserType }, dispatch)
}

const mapStateToProps = state => {
  return {
    userType: state.users.userType,
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Selection)



//export default Selection;
