import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fpassStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';



const ForgotPassword = ( {navigation} ) => {
  const Request = () => {
    //if Client, navigate to Client Login 
    //else navigate to Consultant Login
    navigation.navigate('Selection');
  }

  return (
  
  <View style={fpassStyles.container}>
    <LinearGradient 
      colors={['rgba(243,243,243,0.4)', 'transparent']}
      start={{x : 0, y : 1}}
      end={{x : 0, y : 0}}
      style={globalStyles.gradient}
    >
    <View style={fpassStyles.scaffold}>
      <Text style={fpassStyles.scaffold_text}>
        Forgot your password? {"\n"} 
        No worries! {"\n\n"}
        Enter your username below and {"\n"} 
        we’ll send a recovery key to your {"\n"} 
        email account for you.
      </Text>
      <View style={fpassStyles.scaffold_textinput_container}>
        <Icon style={globalStyles.icon_global} name="user-o" size={18} />
        <TextInput 
          placeholder="Username" 
          placeholderTextColor = "#8B8787"
          style={fpassStyles.scaffold_textinput}
        />
      </View>

      <TouchableOpacity
        activeOpacity={0.6}
        style={fpassStyles.button}
        onPress={Request}
      >
        <Text style={fpassStyles.button_label}>SEND REQUEST</Text>
      </TouchableOpacity>

    </View>
    </LinearGradient>
  </View> 
  );
}

export default ForgotPassword;