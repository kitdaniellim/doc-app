import React from 'react';
import { Button, Text, TextInput, View, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { loginStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';



const LoginClient = ( {navigation} ) => {
  const Home = () => {
    navigation.navigate('HomeClient');
  }

  const SignUp = () => {
    navigation.navigate('SignupClient1');
  }

  const FPass = () => {
    navigation.navigate('HomeClient');
  }

  return (
  
  <View style={loginStyles.container}>
    <LinearGradient 
        colors={['rgba(243,243,243,0.4)', 'transparent']}
        start={{x : 0, y : 1}}
        end={{x : 0, y : 0}}
        style={globalStyles.gradient}
    >
    
    <View style={loginStyles.forms_container}>
            <Icon style={globalStyles.icon_client} name="wheelchair-alt" size={55} />
            <Text style={loginStyles.forms_label}> CLIENT </Text>

            <View style={loginStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle-o" size={18} />
              <TextInput 
                  placeholder="Username" 
                  placeholderTextColor = "#8B8787"
                  style={loginStyles.forms_textinput}
              />
            </View>
            <View style={loginStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="key" size={18} />
              <TextInput 
                   secureTextEntry={true}
                  placeholder="Password" 
                  placeholderTextColor = "#8B8787"
                  style={loginStyles.forms_textinput}
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

              <Text style={loginStyles.forms_text}>Forgot Password?{" "} 
                <TouchableOpacity>
                  <Text style={loginStyles.forms_text_underline}>Tap Here!</Text>
                </TouchableOpacity>
              </Text>
            </View>
            <Text style={loginStyles.forms_text_bold}>Or{"\n"}</Text>
            <View style={loginStyles.forms_button_container}>
              <Text style={loginStyles.forms_text}>No account yet? </Text>
              <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={SignUp}
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

export default LoginClient;