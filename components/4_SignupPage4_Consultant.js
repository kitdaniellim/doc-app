import React, { useState } from 'react';
import { Text, View, CheckBox, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';

const SignupConsultant4 = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false);
  const [icon, setIcon] = useState('times-circle-o');
  const [messageLabel, setMessageLabel] = useState('Oops!');
  const [message, setMessage] = useState('Please read the terms and agreements carefully before checking the tickbox.');
  const [isModalVisible, toggleModal] = useState(false);

  function Close() {
    if(isSelected) {
      navigation.navigate('Login');
    } else {
      toggleModal(false)
    }
  }
  
  const Submit = () => {
    if (isSelected) {
      setIcon('check-circle-o')
      setMessageLabel('Hooray!')
      setMessage('You have successfully created an account! Close this tab to start logging in with your username.')
    }
    toggleModal(true)
  }

  return (
    <View style={signupStyles.container}>
      <LinearGradient
        colors={['rgba(239,239,239,0.5)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={globalStyles.gradient}
      >
        <Modal
          isVisible={isModalVisible}
          animationIn='slideInDown'
          animationOut='slideOutUp'
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.modal_container}>
            <View style={(isSelected) ? globalStyles.modal_container_top_verified : globalStyles.modal_container_top}>
              <Icon style={globalStyles.modal_icon} name={icon} size={29} />
            </View>
            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.modal_notif_bold}>{messageLabel}</Text>
              <Text style={globalStyles.modal_notif}>{message}</Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={Close}
                style={(isSelected) ? globalStyles.modal_button_container_verified : globalStyles.modal_button_container}
              >
                <Text style={globalStyles.modal_button_label}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={signupStyles.forms_container}>
          <View style={signupStyles.forms_scaffold}>
            <Text style={signupStyles.forms_scaffold_text_bold}>BY SIGNING</Text>
            <Text style={signupStyles.forms_scaffold_text}>
              Bacon ipsum dolor amet tri-tip cow corned beef, shankle hamburger cupim ham turkey. Fatback chuck strip steak, ham hock ham short ribs frankfurter. Pork chop capicola t-bone tri-tip tongue. Landjaeger hamburger swine shoulder jerky capicola buffalo venison short loin. Ribeye tri-tip kielbasa pork loin pork chop, corned beef pastrami ham hock shankle pancetta swine. Strip steak kielbasa pancetta, chislic shank buffalo porchetta brisket bresaola jerky pastrami turducken kevin ham. Bresaola biltong ribeye, strip steak jerky burgdoggen tenderloin chuck tri-tip chicken turkey. Fatback burgdoggen jowl tenderloin strip steak filet mignon, picanha bacon. Kielbasa pancetta short loin spare ribs. Landjaeger brisket chicken cupim rump ham hock. Flank cow beef boudin shank, meatball pork loin buffalo chislic chuck short loin ribeye tri-tip pork.{"\n\n"}
              Landjaeger drumstick t-bone shoulder chuck tenderloin ball tip tail ground round beef ribs boudin tongue pig alcatra. Spare ribs brisket swine burgdoggen strip steak meatball cupim capicola rump pork. Frankfurter sirloin short loin brisket ground round. Ribeye jowl andouille leberkas ham alcatra tri-tip kevin short ribs sirloin pig shoulder bresaola meatloaf. Ball tip pork sirloin pork loin capicola andouille, chicken pastrami kevin hamburger ribeye cow pig brisket. Pig doner frankfurter ball tip alcatra rump meatloaf porchetta buffalo. Tri-tip cupim ground round picanha kevin jerky, chuck fatback brisket rump landjaeger frankfurter chislic shankle. Pastrami porchetta drumstick filet mignon swine. Ball tip tenderloin chicken, jerky pork loin doner biltong tongue bacon filet mignon meatball cupim ribeye landjaeger. Frankfurter meatloaf porchetta, doner leberkas strip steak pastrami cow fatback.{"\n\n"}
            </Text>
            <View style={signupStyles.forms_scaffold_checkbox_container}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                onTintColor='blue'
                tintColor='red'
                style={signupStyles.forms_scaffold_checkbox}
              />
              <Text style={signupStyles.forms_scaffold_checkbox_label}>Do you agree with the{"\n"}Terms and Conditions?</Text>
            </View>
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