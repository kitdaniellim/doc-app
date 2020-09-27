import React, { Component } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { selectionStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserType } from '../actions/user';

const CLIENT = 'CLIENT';
const CONSULTANT = 'CONSULTANT';

class Selection extends Component{
  render(){
    
    const SignUpClient = () => {
      this.props.user.userType = CLIENT;
      this.props.navigation.navigate('SignupClient1');
    }
    const SignUpConsultant = () => {
      this.props.user.userType = CONSULTANT;
      this.props.navigation.navigate('SignupConsultant1');
    }
    
  return (
    <View style={selectionStyles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={selectionStyles.left_scaffold}
        onPress={SignUpClient}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <View style={selectionStyles.left_icon_container}>
            <Text style={selectionStyles.left_icon_text}>
              CLIENT
            </Text>
            <Icon style={globalStyles.icon_client} name="wheelchair-alt" size={42} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={selectionStyles.right_scaffold}
        onPress={SignUpConsultant}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <View style={selectionStyles.right_icon_container}>
            <Text style={selectionStyles.right_icon_text}>
              CONSULTANT
            </Text>
            <Icon style={globalStyles.icon_client} name="user-md" size={42} />
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
  return bindActionCreators({ updateUserType }, dispatch )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)( Selection )



//export default Selection;
