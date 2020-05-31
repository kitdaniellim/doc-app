import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';

const SignupConsultant4 = ( {navigation} ) => {
  const Submit = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={signupStyles.container}>
    <LinearGradient   x
        colors={['rgba(243,243,243,0.4)', 'transparent']}
        start={{x : 0, y : 1}}
        end={{x : 0, y : 0}}
        style={globalStyles.gradient}
    >
    <View style={signupStyles.forms_container}>
        <View style={signupStyles.forms_scaffold}>
            <Text style={signupStyles.forms_scaffold_text_bold}>BY SIGNING</Text>
            <Text style={signupStyles.forms_scaffold_text}>
              to this lorem ipsum blabla wrapwrapwrapawrapraprwparpapra
            </Text>
        </View>
        <Text style={signupStyles.forms_text}>4/4</Text>
        <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_button}
            onPress={Submit}
        >
            <Text style={signupStyles.forms_button_label}>SUBMIT</Text>
        </TouchableOpacity> 
    </View>
    </LinearGradient>
  </View>
  );
}


export default SignupConsultant4;