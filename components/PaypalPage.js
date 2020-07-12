import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { paypalStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';


const Paypal = ({ navigation }) => {
  const [isModalVisible, toggleModal] = useState(false);
  const consultant_id = navigation.state.params.consultant_id;

  function Close() {
    navigation.navigate('BookPage');
  }

  const Pay = () => {
    toggleModal(true)
  }

  const Skip = () => {
    navigation.navigate('BookPage', {
      consultant_id
    });
  }

  return (
    <View style={paypalStyles.container}>
      <LinearGradient
        colors={['rgba(239,239,239,0.5)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={globalStyles.gradient}
      >
        <Modal
          isVisible={isModalVisible}
          animationIn='bounceInDown'
          animationOut='slideOutUp'
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.modal_container}>
            <View style={globalStyles.modal_container_top_verified}>
              <Icon style={globalStyles.modal_icon} name='check-circle-o' size={29} />
            </View>
            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.modal_notif_bold}>Payment Confirmed.</Text>
              <Text style={globalStyles.modal_notif}>Thank you and have a nice day!</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={Close}
                style={globalStyles.modal_button_container_verified}
              >
                <Text style={globalStyles.modal_button_label}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={paypalStyles.scaffold}>
          <Text style={paypalStyles.scaffold_text}>
            Hello, your account is currently limited. Before proceeding, you have to etcetc.  {"\n"}
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={paypalStyles.forms_paybutton}
            onPress={Pay}
          >
            <Text style={paypalStyles.forms_paybutton_label}>Pay Through PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={paypalStyles.forms_paybutton}
            onPress={Skip}
          >
            <Text style={paypalStyles.forms_paybutton_label}>Skip</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export default Paypal;