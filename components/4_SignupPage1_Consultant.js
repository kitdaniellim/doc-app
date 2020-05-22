import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';



const SignupConsultant1 = ( {navigation} ) => {
  const Next = () => {
    navigation.navigate('SignupConsultant2');
  }

  return (
  
  <View style={signupStyles.container}>
    <LinearGradient 
        colors={['rgba(243,243,243,0.4)', 'transparent']}
        start={{x : 0, y : 1}}
        end={{x : 0, y : 0}}
        style={globalStyles.gradient}
    >
    
    <View style={signupStyles.forms_container}>
            <Text style={signupStyles.forms_label}> CONSULTANT SIGN UP </Text>
            <Icon style={globalStyles.icon_client} name="user-md" size={55} />
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
              <TextInput 
                  placeholder="Username" 
                  placeholderTextColor = "#8B8787"
                  style={signupStyles.forms_textinput}
              />
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="envelope" size={18} />
              <TextInput 
                  placeholder="Email" 
                  placeholderTextColor = "#8B8787"
                  style={signupStyles.forms_textinput}
              />
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="lock" size={18} />
              <TextInput 
                   secureTextEntry={true}
                  placeholder="Password" 
                  placeholderTextColor = "#8B8787"
                  style={signupStyles.forms_textinput}
              />
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="lock" size={18} />
              <TextInput
                  secureTextEntry={true}
                  placeholder="Confirm Password" 
                  placeholderTextColor = "#8B8787"
                  style={signupStyles.forms_textinput}
              />
            </View>
            <Text style={signupStyles.forms_text}>1/4</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_button}
              onPress={Next}
            >
              <Text style={signupStyles.forms_button_label}>NEXT</Text>
            </TouchableOpacity>
        
    </View>

    </LinearGradient>
  </View> 
  );
}

export default SignupConsultant1;