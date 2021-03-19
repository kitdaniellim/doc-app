import React from 'react';
import { Text, TextInput, Image, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateEmail, updatePassword } from '../actions/users';

class Signup1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Seems like you missed one. Please fill in all the required fields before proceeding.',
      toggleModal: false,
      cpassword: '',
    }
  }

  Close = () => {
    this.setState({
      toggleModal: false,
    });
  }

  validate = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    let dummy_str = this.props.email;
    return (reg.test(dummy_str.trim()) === true) ? true : false
  }

  Next = () => {
    const navigation = this.props.navigation;
    if ((this.props.email !== undefined && this.props.email !== '' && this.props.password !== '')) {
      if (this.props.password.length >= 6) {
        if (this.props.password === this.state.cpassword) {
          let isValid = this.validate();
          if (isValid === true) {
            if (this.props.userType === "CLIENT") {
              navigation.navigate('SignupClient2');
            } else {
              navigation.navigate('SignupConsultant2')
            }
          } else {
            this.setState({
              message: this.props.email + ' is not a valid email address.',
              toggleModal: true,
            });
          }
        } else {
          this.setState({
            message: 'Your passwords do not match.',
            toggleModal: true,
          });
        }
      } else {
        this.setState({
          message: 'Your password length is too small. Please have a minimum of 6 characters.',
          toggleModal: true,
        });
      }
    } else {
      this.setState({ toggleModal: true });
    }
  }

  render() {
    console.log(this.props)
    return (
      <View style={signupStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.toggleModal}
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
                <Text style={globalStyles.modal_notif}>{this.state.message}</Text>
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
          <View style={signupStyles.forms_container}>
            {(this.props.userType === "CLIENT") ?
              <View>
                <Text style={signupStyles.forms_label}>CLIENT SIGN UP </Text>
                <Image
                  style={{ width: 80, height: 80, marginTop: 20, alignSelf: 'center' }}
                  source={require('../assets/client.png')}
                />
              </View>
              :
              <View>
                <Text style={signupStyles.forms_label}>CONSULTANT SIGN UP </Text>
                <Image
                  style={{ width: 80, height: 80, marginTop: 20, alignSelf: 'center' }}
                  source={require('../assets/consultant.png')}
                />
              </View>
            }

            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="envelope" size={18} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                value={this.props.email}
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
                value={this.props.password}
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
                value={this.state.cpassword}
                onChangeText={cpassword => this.setState(() => ({ cpassword: cpassword }))}
              />
            </View>
            {(this.props.userType === "CLIENT") ?
              <Text style={signupStyles.forms_text}>1/3</Text>
              :
              <Text style={signupStyles.forms_text}>1/4</Text>
            }
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
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword }, dispatch)
}

const mapStateToProps = state => {
  return {
    userType: state.users.userType,
    email: state.users.email,
    password: state.users.password
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup1)

