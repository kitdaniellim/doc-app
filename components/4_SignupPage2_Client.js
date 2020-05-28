import React from 'react';
import { Text, TextInput, View, Picker, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';



const SignupClient2 = ({ navigation }) => {
  const Submit = () => {
    navigation.navigate('LoginClient');
  }

  return (

    <View style={signupStyles.container}>
      <LinearGradient
        colors={['rgba(243,243,243,0.4)', 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={globalStyles.gradient}
      >

        <View style={signupStyles.forms_container}>
          <Text style={signupStyles.forms_label}> CLIENT SIGN UP </Text>
          <Text style={signupStyles.forms_label_small}> Contact Details: </Text>
          <View style={signupStyles.forms_textinput_container}>
            <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#8B8787"
              style={signupStyles.forms_textinput}
            />
          </View>
          <View style={signupStyles.forms_bday_container}>
            <View style={signupStyles.forms_bday_label_container}>
              <Icon style={globalStyles.icon_global} name="birthday-cake" size={18} />
              <Text style={signupStyles.forms_bday_label}>Birthday</Text>
            </View>
            <View style={signupStyles.forms_bday_item_container}>
              <TextInput
                placeholder="Month"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_bday_textinput}
              />
            </View>
            <Text style={signupStyles.forms_bday_item_divider}>{" "}/{" "}</Text>
            <View style={signupStyles.forms_bday_item_container}>
              <TextInput
                placeholder="Day"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_bday_textinput}
              />
            </View>
            <Text style={signupStyles.forms_bday_item_divider}>{" "}/{" "}</Text>
            <View style={signupStyles.forms_bday_item_container}>
              <TextInput
                placeholder="Year"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_bday_textinput}
              />
            </View>
          </View>
          <View style={signupStyles.forms_textinput_container}>
            <Icon style={globalStyles.icon_global} name="mobile" size={25} />
            <TextInput
              placeholder="Mobile Number"
              placeholderTextColor="#8B8787"
              style={signupStyles.forms_textinput}
            />
          </View>
          <Text style={signupStyles.forms_text}>2/2</Text>
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

export default SignupClient2;