import React, { Component, useState } from 'react';
import { Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../actions/users';

/*DEV: Dan - Please update code using redux
const SignupClient1 = ({ navigation }) => {
  const [username, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [cpassword, setCpass] = useState('');
  const [message, setMessage] = useState('Seems like you missed one. Please fill in all the required fields before proceeding.');
  const [isModalVisible, toggleModal] = useState(false);

  function Close() {
    toggleModal(false)
  }


  
 */
// const Next = (navigation) => {

//     // navigation.navigate('SignupClient2', {
//     //   email: this.state.email,
//     //   password: this.state.password
//     // });
// }


class SignupClient1 extends React.Component {

  // constructor(props){
  //   // this.setState = ({
  //   //   isModalVisible : false,
  //   //   toggleModal : false
  //   // });
  // }
  Close = () => {
    this.setState({
      toggleModal: false
    });
  }

  validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return (reg.test(this.props.user.email) === true) ? true : false
  }
  Next = () => {
    const navigation = this.props.navigation;
    if ((this.props.user.email !== '' && this.props.user.password !== '' && cpassword !== '')) {
      if (this.props.user.password >= 6) {
        if (this.props.user.password === cpassword) {
          let isValid = validate()
          if (isValid === true) {
            navigation.navigate('SignupClient2');
          } else {
            setMessage(this.props.user.email.toString() + ' is not a valid email address.')
            toggleModal(true)
          }
        } else {
          setMessage('Your passwords do not match.')
          toggleModal(true)
        }
      } else {
        setMessage('Your password length is too small. Please have a minimum of 6 characters.')
        toggleModal(true)
      }
    } else {
      toggleModal(true)
    }
  }
  render() {
    // console.log(this.props.userType);
    return (

      <View style={signupStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >

          {/*DEV: Dan
             
             <Modal
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
            <Text style={signupStyles.forms_label}> CLIENT SIGN UP </Text>
            <Image
              style={{ width: 80, height: 80, alignSelf: 'center' }}
              source={require('../assets/client.png')}
            />
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="envelope" size={18} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                value={this.props.user.email}
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
                value={this.props.user.password}
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
              />
            </View>
            <Text style={signupStyles.forms_text}>1/2</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_button}
              onPress={() => this.props.navigation.navigate('SignupClient2')}
            >
              <Text style={signupStyles.forms_button_label}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>

    );
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.users
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupClient1)

