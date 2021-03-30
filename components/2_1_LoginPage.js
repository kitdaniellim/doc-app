import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword, updateCurrentUser, login, logout } from '../actions/users';
import { resetAppointments } from '../actions/appointments';
import {  getReviewedBy } from '../actions/reviews';
import AsyncStorage from "@react-native-community/async-storage";

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
      email: '',
      password: ''
    };
    // this.Home = this.Home.bind(this);
  }

  async componentDidMount() {
    this.props.logout();
    this.props.resetAppointments();
    try {
      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('appointments');
    }
    catch (exception) {
      alert('Error in removing session');
    }
  }

  SignUp = () => {
    const navigation = this.props.navigation;
    navigation.navigate('Selection');
  }

  ForgotPassword = () => {
    const navigation = this.props.navigation;
    navigation.navigate('ForgotPassword');
  }

  handleLogin = async () => {
    if (this.state.email === '' || this.state.password === '') {
      this.setState({
        toggleModal: true
      })
    } else {
      await AsyncStorage.removeItem('user');
      console.log(`Attempting to Log in...`);
      await this.props.login(this.state.email.trim(), this.state.password);

      if (this.props.user.email) {
        console.log(`Login successful.`)
        AsyncStorage.setItem('user', JSON.stringify(this.props.user));
        console.log(this.props.user.userType)
        this.props.updateCurrentUser({
          userType: this.props.user.userType,
          uid: this.props.user.uid
        });
      } else {
        alert("Error in logging in!");
      }

    }
  }

  Close = () => {
    this.setState({
      toggleModal: false
    });
  }

  render() {
    return (
      <View style={loginStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.toggleModal}
            animationIn='bounceInDown'
            animationOut='bounceOutUp'
            animationInTiming={1100}
            animationOutTiming={900}
          >
            <View style={globalStyles.modal_container}>
              <View style={globalStyles.modal_container_top}>
                <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
              </View>
              <View style={globalStyles.modal_container_bottom}>
                <Text style={globalStyles.modal_notif_bold}>Oops!</Text>
                <Text style={globalStyles.modal_notif}>Incorrect password or username. Please try again.</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.Close}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={loginStyles.forms_container}>
            <View style={loginStyles.forms_header_container}>
              <Icon style={globalStyles.icon_client} name="user" size={42} />
              <Text style={loginStyles.forms_label}>LOGIN</Text>
            </View>
            <View style={loginStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
              <TextInput
                placeholder="Username"
                placeholderTextColor="#8B8787"
                style={loginStyles.forms_textinput}
                value={this.state.email ? this.state.email : ""}
                onChangeText={email => this.setState(() => ({ email }))}
              />
            </View>
            <View style={loginStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="key" size={18} />
              <TextInput
                secureTextEntry={true}
                placeholder="Password"
                placeholderTextColor="#8B8787"
                style={loginStyles.forms_textinput}
                value={this.state.password ? this.state.password : ""}
                onChangeText={password => this.setState(() => ({ password }))}
              />
            </View>
            <View style={loginStyles.forms_button_container}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.handleLogin }
                style={loginStyles.forms_button}
              >
                <Text style={loginStyles.forms_button_label}>LOGIN</Text>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <Text style={loginStyles.forms_text}>Forgot Password?{" "}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.ForgotPassword}
                  style={{ justifyContent: 'center' }}
                >
                  <Text style={loginStyles.forms_text_underline}>Tap Here!</Text>
                </TouchableOpacity>
              </View>
            </View>
            <Text style={loginStyles.forms_text_bold}>Or{"\n"}</Text>
            <View style={loginStyles.forms_button_container}>
              <Text style={loginStyles.forms_text}>No account yet?</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.SignUp}
                style={loginStyles.forms_button}
              >
                <Text style={loginStyles.forms_button_label}>SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, updateCurrentUser, login, logout, resetAppointments, getReviewedBy }, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.users.user,
    email: state.users.email,
    password: state.users.password,
    reviews: state.users.reviews
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
