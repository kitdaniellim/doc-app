import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fpassStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';


const ForgotPassword = ({ navigation }) => {
  const [username, setUser] = useState('');
  const [isModalVisible, toggleModal] = useState(false);

  function Close() {
    toggleModal(false)
  }

  const Request = () => {
    if (username === '') {
      toggleModal(true)
    } else {
      navigation.navigate('Login');
    }
  }

  return (
    <View style={fpassStyles.container}>
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
          animationInTiming={600}
          animationOutTiming={600}
        >
          <View style={globalStyles.modal_container}>
            <View style={globalStyles.modal_container_top}>
              <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
            </View>
            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.modal_notif_bold}>Oops!</Text>
              <Text style={globalStyles.modal_notif}>We can't send you a key without your username! Please fill in all required fields before proceeding.</Text>
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
        <View style={fpassStyles.scaffold}>
          <Text style={fpassStyles.scaffold_text}>
            Forgot your password? {"\n"}
            No worries! {"\n\n"}
            Enter your username below and {"\n"}
            we’ll send a recovery key to your {"\n"}
            email account for you.
          </Text>
          <View style={fpassStyles.scaffold_textinput_container}>
            <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
            <TextInput
              placeholder="Username"
              placeholderTextColor="#8B8787"
              style={fpassStyles.scaffold_textinput}
              onChangeText={text => setUser(text)}
              value={username}
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