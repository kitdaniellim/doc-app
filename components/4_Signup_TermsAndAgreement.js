import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';
import { signup } from '../actions/users';

class Signup_TermsAndAgreement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTicked: false,
      messageLabel: 'Oops',
      message: 'Please read the Terms and Agreements carefully before submitting.',
      toggleModal: false,
      icon: 'times-circle-o',
    }
  }

  /*DEV: EJA - Signup function */
  handleSignUp = () => {
    console.log(this.props)
    this.props.signup();
    this.setState({ toggleModal: true })
  }

  Close = () => {
    if(this.state.isTicked) {
      this.props.navigation.navigate('Login');
    } else {
      this.setState({ toggleModal: false })
    }
  }
  
  Submit = () => {
    if (this.state.isTicked) {
      this.handleSignUp();
      this.setState({ 
        toggleModal: true,
        messageLabel: 'Hooray',
        message: 'You have successfully created an account! Close this tab to start logging in with your username.',
        icon: 'check-circle-o',
      })
      
    }
    this.setState({ toggleModal: true })
  }

  render() {

  
    return (
      <View style={signupStyles.container}>
        <LinearGradient x
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.toggleModal}
            animationIn='slideInDown'
            animationOut='slideOutUp'
            animationInTiming={1100}
            animationOutTiming={900}
          >
            <View style={globalStyles.modal_container}>
              <View style={(this.state.isTicked) ? globalStyles.modal_container_top_verified : globalStyles.modal_container_top}>
                <Icon style={globalStyles.modal_icon} name={this.state.icon} size={29} />
              </View>
              <View style={globalStyles.modal_container_bottom}>
                <Text style={globalStyles.modal_notif_bold}>{this.state.messageLabel}</Text>
                <Text style={globalStyles.modal_notif}>{this.state.message}</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.Close}
                  style={(this.state.isTicked) ? globalStyles.modal_button_container_verified : globalStyles.modal_button_container}
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
                  value={this.state.isTicked}
                  onValueChange={() => { this.setState(prevState => ({ isTicked: !prevState.isTicked })) }}
                  onTintColor='blue'
                  tintColor='red'
                  style={signupStyles.forms_scaffold_checkbox}
                />
                <Text style={signupStyles.forms_scaffold_checkbox_label}>Do you agree with the{"\n"}Terms and Conditions?</Text>
              </View>
            </View>
            <Text style={signupStyles.forms_text}>3/3</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_button}
              onPress={this.Submit}
            >
              <Text style={signupStyles.forms_button_label}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );

  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ signup }, dispatch)
}

const mapStateToProps = state => {
  return {
    userType: state.users.userType,
    email: state.users.email,
    password: state.users.password,
    fullName: state.users.fullName,
    mobileNumber: state.users.mobileNumber,
    birthDay: state.users.birthDay
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup_TermsAndAgreement)

