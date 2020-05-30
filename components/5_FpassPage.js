import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from "react-redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import { fpassStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { recoverPassword } from '../actions/users';

class ForgotPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: ''
    }
  }
  onTokenChange = (text) => {
    const token = text;
    this.setState(() => ({ token }));
  }
  onRequest = async () => {
    await this.props.recoverPassword(this.state.token);
    !this.props.error? alert(this.props.item.message) : alert("An error occured");
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
          <View style={fpassStyles.scaffold}>
            <Text style={fpassStyles.scaffold_text}>
              Forgot your password? {"\n"}
            No worries! {"\n\n"}
            Enter your username or email address below and {"\n"}
            we’ll send a recovery key to your {"\n"}
            email account for you.
          </Text>
            <View style={fpassStyles.scaffold_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
              <TextInput
                placeholder="Email or Username"
                placeholderTextColor="#8B8787"
                onChangeText={this.onTokenChange}
                style={fpassStyles.scaffold_textinput}
              />
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
      </View >
    );
  }
}

const mapStateToProps = state => ({
  item: state.users.item,
  error: state.users.error
});

const mapDispatchToProps = dispatch => ({
  recoverPassword: (token) => dispatch(recoverPassword(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);