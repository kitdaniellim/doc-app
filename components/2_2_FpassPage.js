import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fpassStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';


const ForgotPassword = ({ navigation }) => {
  const [username, setUser] = useState('');
  const [icon, setIcon] = useState('times-circle-o');
  const [messageLabel, setMessageLabel] = useState('Oops!');
  const [message, setMessage] = useState('Seems like you missed one. Please fill in all the required fields before proceeding.');
  const [isVerified, verify] = useState(false);
  const [isModalVisible, toggleModal] = useState(false);

  function Close() {
    if(isVerified) {
      navigation.navigate('Login');
    } else {
      toggleModal(false)
    }
  }

  const Request = () => {
    if ((username !== '')) {
      verify(true)
      setIcon('check-circle-o')
      setMessageLabel('Hooray!')
      setMessage('Your key should be delivered shortly. Please check your email.')
    }
    toggleModal(true)
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
          animationOut='slideOutUp'
          animationInTiming={800}
          animationOutTiming={800}
        >
          <View style={globalStyles.modal_container}>
            <View style={(isVerified)? globalStyles.modal_container_top_verified : globalStyles.modal_container_top}>
              <Icon style={globalStyles.modal_icon} name={icon} size={29} />
            </View>
            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.modal_notif_bold}>{messageLabel}</Text>
              <Text style={globalStyles.modal_notif}>{message}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={Close}
                style={(isVerified)? globalStyles.modal_button_container_verified : globalStyles.modal_button_container}
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