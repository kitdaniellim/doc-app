import React, { Component, useState } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../actions/users';

class SignupConsultant1 extends React.Component {
  // const [username, setUser] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPass] = useState('');
  // const [cpassword, setCpass] = useState('');
  // const [message, setMessage] = useState('Seems like you missed one. Please fill in all the required fields before proceeding.');
  // const [isModalVisible, toggleModal] = useState(false);

  // function Close() {
  //   toggleModal(false)
  // }

  // function validate() {
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   return (reg.test(email) === true) ? true : false
  // }

  // const Next = () => {
  //   if ((username !== '' && email !== '' && password !== '' && cpassword !== '')) {
  //     if (password.length >= 6) {
  //       if (password === cpassword) {
  //         let isValid = validate()
  //         if (isValid === true) {
  //           navigation.navigate('SignupConsultant2');
  //         } else {
  //           setMessage(email.toString() + ' is not a valid email address.')
  //           toggleModal(true)
  //         }
  //       } else {
  //         setMessage('Your passwords do not match.')
  //         toggleModal(true)
  //       }
  //     } else {
  //       setMessage('Your password length is too small. Please have a minimum of 6 characters.')
  //       toggleModal(true)
  //     }
  //   } else {
  //     toggleModal(true)
  //   }
  // }

  
  Next = () => {
    // let text = this.state.text
    const navigation = this.props.navigation;
    // if (text === '') {
    //   this.toggleModal(true)
    // } else {
      navigation.navigate('SignupConsultant2');
    // }
  }

  render() {
    console.log("START SIGNUPPAGE1_CONSULTANT NI");
    console.log(this.props.email);
    console.log(this.props.password);
    console.log("END SA SIGNUPPAGE1_CONSULTANT");
    return (
      <View style={signupStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          {/* <Modal
            isVisible={isModalVisible}
            animationIn='bounceInDown'
            animationOut='slideOutUp'
            animationInTiming={1100}
            animationOutTiming={900}
          >
            <View style={globalStyles.modal_container}>
              <View style={globalStyles.modal_container_top}>
                <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
              </View>
              <View style={globalStyles.modal_container_bottom}>
                <Text style={globalStyles.modal_notif_bold}>Oops!</Text>
                <Text style={globalStyles.modal_notif}>{message}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={Close}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal> */}
          <View style={signupStyles.forms_container}>
            <Text style={signupStyles.forms_label}> CONSULTANT SIGN UP </Text>
            <Image
              style={{ width: 80, height: 80, alignSelf: 'center' }}
              source={require('../assets/consultant.png')}
            />

            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="envelope" size={18} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                value = {this.props.email}
                onChangeText={email => this.props.updateEmail(email)}
              />
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="lock" size={18} />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                value = {this.props.password}
                onChangeText={password => this.props.updatePassword(password)}
              />
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="lock" size={18} />
              <TextInput
                secureTextEntry={true}
                placeholder="Confirm Password"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                // onChangeText={text => setCpass(text)}
                // value={cpassword}
              />
            </View>
            <Text style={signupStyles.forms_text}>1/4</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_button}
              onPress={this.Next}
            >
              <Text style={signupStyles.forms_button_label}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
 
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch )
}

const mapStateToProps = state => {
  return {
    email: state.users.email,
    password: state.users.password
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupConsultant1)
