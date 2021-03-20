import React from 'react';
import { Text, TextInput, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFullName, updateUserSpecialty, updateUserLIC, updateUserSubSpecialty } from '../actions/users';
import RNPickerSelect from 'react-native-picker-select';

class Dynamic_Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      count: 0,
      textInput: [],
    }
  }

  addField = () => {
    if (this.state.count < 1) {
      let textInput = this.state.textInput;
      let key = this.state.key;
      let count = this.state.key;
      key += 1;
      count += 1;
      textInput.push(
        <View key={key.toString()} style={signupStyles.forms_textinput_container}>
          <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
          <TextInput
            placeholder="Sub-specialty"
            placeholderTextColor="#8B8787"
            style={signupStyles.forms_textinput}
            value={this.props.userSubSpecialty}
            onChangeText={userSubSpecialty => this.props.props.updateUserSubSpecialty(userSubSpecialty)}
          />
        </View>
      );

      this.setState({
        key: key,
        count: count,
        textInput
      });
    }

  }

  removeField = () => {
    let textInput = this.state.textInput;
    let count = this.state.count;

    if (count !== 0) {
      textInput.pop();
      count -= 1;
    }
    this.setState({
      count: count,
      textInput
    });
  }

  render() {
    console.log('----------------')
    console.log(this.props.props)
    console.log('----------------')
    return (
      <View>
        <View style={signupStyles.forms_dynamicinput_margin, { height: 100 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {this.state.textInput.map((value) => {
              return value
            })}
          </ScrollView>
        </View>
        <View style={signupStyles.forms_add_textinput_container}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.addField()}
          >
            <Icon style={globalStyles.icon_global} name="plus" size={16} />
            <Text style={signupStyles.forms_add_textinput_text}>ADD{"\n"}SUB-PROFESSION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.removeField()}
          >
            <Icon style={globalStyles.icon_global} name="times" size={16} />
            <Text style={signupStyles.forms_add_textinput_text}>REMOVE{"\n"}SUB-PROFESSION</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


class SignupConsultant2 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleModal: false,
    }
  }

  Close = () => {
    this.setState({
      toggleModal: false,
    });
  }

  Next = () => {
    if (
      this.props.fullName !== '' && this.props.fullName !== undefined &&
      this.props.userSpecialty !== '' && this.props.userSpecialty !== undefined &&
      this.props.userLIC !== '' && this.props.userLIC !== undefined
    ) {
      this.props.navigation.navigate('SignupConsultant3_1');
    } else {
      this.setState(() => ({ toggleModal: true }))
    }
  }

  render() {
    console.log(this.props)
    return (
      <View style={signupStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.toggleModal}
            animationIn='bounceInDown'
            animationOut='bounceOutUp'
            animationInTiming={1100}
            animationOutTiming={900}
          >
            <View style={globalStyles.modal_container}>
              <View style={globalStyles.modal_container_top}>
                <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
              </View>
              <View style={globalStyles.modal_container_bottom}>
                <Text style={globalStyles.modal_notif_bold}>Oops!</Text>
                <Text style={globalStyles.modal_notif}>Seems like you missed one. Please fill in all required fields before proceeding.</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.Close}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={signupStyles.forms_container}>
            <Text style={signupStyles.forms_label}>CONSULTANT SIGN UP</Text>
            <View style={signupStyles.forms_label_small_container_2}>
              <Text style={signupStyles.forms_label_small}>Professional Details:</Text>
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                value={this.props.fullName}
                onChangeText={fullName => this.props.updateFullName(fullName)}
              />
            </View>
            <View style={signupStyles.forms_specialty_container}>
              <RNPickerSelect
                Icon={() => {
                  return <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
                }}
                placeholder={{
                  label: 'User Specialty',
                  value: '',
                }}
                style={{
                  iconContainer: {
                    paddingRight: 6,
                    paddingTop: 16
                  },
                  viewContainer: {
                    alignSelf: 'stretch',
                    marginVertical: -8,
                    // padding: -5,
                    paddingRight: 10,
                    paddingLeft: 15,
                  },
                  inputIOS: {
                    color: 'black',
                    // paddingTop: 13,
                    // paddingHorizontal: 10,
                    // paddingBottom: 12,
                  },
                  inputAndroid: {
                    color: 'black',
                  },
                }}

                value={this.props.userSpecialty}
                onValueChange={(userSpecialty) => this.props.updateUserSpecialty(userSpecialty)}
                items={[
                  { label: 'Engineer', value: 'Engineer' },
                  { label: 'Architect', value: 'Architect' },
                  { label: 'Doctor', value: 'Doctor' },
                  { label: 'Lawyer', value: 'Lawyer' }
                ]}
              />

            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="id-card" size={15} />
              <TextInput
                placeholder="LIC Number"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                value={this.props.userLIC}
                onChangeText={userLIC => this.props.updateUserLIC(userLIC)}
              />
            </View>
            <Dynamic_Input props={this.props} />
            {/* <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_paybutton}
              onPress={() => { }}
            >
              <Text style={signupStyles.forms_paybutton_label}>Pay Through PayPal</Text>
            </TouchableOpacity> */}
            <Text style={signupStyles.forms_text_lessmargin}>2/4</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_button}
              onPress={this.Next}
            >
              <Text style={signupStyles.forms_button_label}>NEXT</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }

}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateFullName, updateUserSpecialty, updateUserLIC, updateUserSubSpecialty }, dispatch)
}

const mapStateToProps = state => {
  return {
    email: state.users.email,
    password: state.users.password,
    fullName: state.users.fullName,
    userType: state.users.userType,
    userSpecialty: state.users.userSpecialty,
    userLIC: state.users.userLIC,
    userSubSpecialty: state.users.userSubSpecialty
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupConsultant2)

