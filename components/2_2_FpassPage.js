import React from 'react';
import { Alert, Text, ActivityIndicator, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fpassStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { connect } from "react-redux";
import { recoverPassword } from '../actions/users';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: '',
      isVerified: false,
      icon: 'times-circle-o',
      messageLabel: '',
      isModalVisible: false
    }
  }

  onTokenChange = async (text) => {
    const token = text;
    await this.setState(() => ({ token }));
  }

  onClose = () => {
    if (this.state.isVerified) {
      this.props.navigation.navigate('Login');
    } else {
      this.setState(() => ({ isModalVisible: false }));
    }
  }

  onRequest = async () => {
    console.log(this.state.token)
    let token = this.state.token.trim();
    if (token.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
      await this.props.recoverPassword(token);
      if(!this.props.error) {
        this.setState(() => ({ icon: 'check-circle-o' }));
        this.setState(() => ({ isVerified: true }));
        this.setState(() => ({ messageLabel: 'Email Sent!' }));
        this.setState(() => ({ message: this.props.item.message }));
        this.setState(() => ({ isModalVisible: true }));
      } else {
        this.setState(() => ({ icon: 'times-circle-o' }));
        this.setState(() => ({ isVerified: false }));
        this.setState(() => ({ messageLabel: 'Oops' }));
        this.setState(() => ({ message: ` There was an error sending the request: ${this.props.item.message}` }));
        this.setState(() => ({ isModalVisible: true }));
      }
    } else {
      Alert.alert(
        'Oops!',
        `Invalid email input`,
        [
          {
            text: 'OK',
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
    }
  }

  render() {
    return (
      <View style={fpassStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.isModalVisible}
            animationIn='slideInDown'
            animationOut='slideOutUp'
            animationInTiming={1100}
            animationOutTiming={900}
          >
            <View style={globalStyles.modal_container}>
              <View style={(this.state.isVerified)? globalStyles.modal_container_top_verified : globalStyles.modal_container_top}>
                <Icon style={globalStyles.modal_icon} name={this.state.icon} size={29} />
              </View>
              <View style={globalStyles.modal_container_bottom}>
                <Text style={globalStyles.modal_notif_bold}>{this.state.messageLabel}</Text>
                <Text style={globalStyles.modal_notif}>{this.state.message}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.onClose}
                  style={(this.state.isVerified)? globalStyles.modal_button_container_verified : globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={fpassStyles.scaffold}>
            <Text style={fpassStyles.scaffold_text}>
              Forgot your password? No worries! {"\n"}
              Just enter the email you use to login below and
              we’ll send a recovery key to your email account for you.
            </Text>
            <View style={fpassStyles.scaffold_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
              <TextInput
                placeholder="Email"
                placeholderTextColor="#8B8787"
                style={fpassStyles.scaffold_textinput}
                onChangeText={this.onTokenChange}
                value={this.state.token}
              />
            </View>
            <View style={{height: 50}}>
              {this.props.loading ?
                <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]}>
                  <ActivityIndicator size="large" color="#FFFFFF" />
                </View>
                :
                <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]} />
              }
            </View>
            
            <TouchableOpacity
              activeOpacity={0.6}
              style={fpassStyles.button}
              onPress={this.onRequest}
            >
              <Text style={fpassStyles.button_label}>SEND REQUEST</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.users.loading,
  item: state.users.item,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  recoverPassword: (token) => dispatch(recoverPassword(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);