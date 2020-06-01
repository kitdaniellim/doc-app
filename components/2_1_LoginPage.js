import React, { useState } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';

const Login = ({ navigation }) => {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const [isModalVisible, toggleModal] = useState(false);

  function Close() {
    toggleModal(false)
  }

  const Home = () => {
    if (username === '' || password === '') {
      toggleModal(true)
    } else {
      navigation.navigate('HomeClient');
    }
  }

  const ForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  }

  const Signup = () => {
    navigation.navigate('Selection');
  }

  return (
    <View style={loginStyles.container}>
      <LinearGradient
        colors={['rgba(243,243,243,0.4)', 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={globalStyles.gradient}
      >
        <Modal 
          isVisible={isModalVisible} 
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
                onPress={Close}
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
            {/* <Image
              source={require('../assets/doc_logo.png')}
              style={{
                height: 60, 
                width: 80,
                alignSelf: 'center',
                justifyContent: 'center'
              }}
            /> */}
            <Text style={loginStyles.forms_label}>LOGIN</Text>
          </View>
          <View style={loginStyles.forms_textinput_container}>
            <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#8B8787"
              style={loginStyles.forms_textinput}
              onChangeText={text => setUser(text)}
              value={username}
            />
          </View>
          <View style={loginStyles.forms_textinput_container}>
            <Icon style={globalStyles.icon_global} name="key" size={18} />
            <TextInput
              secureTextEntry={true}
              placeholder="Password"
              placeholderTextColor="#8B8787"
              style={loginStyles.forms_textinput}
              onChangeText={text => setPass(text)}
              value={password}
            />
          </View>
          <View style={loginStyles.forms_button_container}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={Home}
              style={loginStyles.forms_button}
            >
              <Text style={loginStyles.forms_button_label}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={loginStyles.forms_text}>Forgot Password?{" "}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={ForgotPassword}
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
              onPress={Signup}
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

export default Login;