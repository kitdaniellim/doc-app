import React, { useState } from 'react';
import { Text, TextInput, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateUserOfficeLocation, updateUserOfficeHours } from '../actions/users';


class SignupConsultant3_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officeCount: 0,
      officeLocations: [],
      text: '',
      toggleModal: false
    }
  }

  componentDidMount() {
    this.addLocation();
  }

  Next = () => {
    let count = this.state.officeCount;
    count--;
    let locs = this.state.officeLocations;

    if (locs[count].location === '') {
      this.setState(() => ({ toggleModal: true }))
    } else {


      this.props.updateUserOfficeLocation(this.state.officeLocations)
      this.props.navigation.navigate('Signup_TermsAndAgreement');
    }
  }

  addOfficeHours = (e) => {
    this.props.navigation.navigate('SignupConsultant3_2');
  }

  addLocation = () => {
    let location = this.state.officeLocations;
    location.push(
      {
        key: this.state.officeCount,
        location: ''
      }
    )

    this.setState({
      officeCount: this.state.officeCount + 1,
      officeLocations: location,
    })
  }

  removeLocation = () => {
    if (this.state.officeLocations.length > 1) {
      let location = this.state.officeLocations;
      location.pop();

      this.setState({
        officeCount: this.state.officeCount - 1,
        officeLocations: location,
      })
    }
  }

  setLocation = (value, i) => {
    let officeLocations = this.state.officeLocations;
    officeLocations[i].location = value;

    this.setState(() => ({ officeLocations }));
  }

  render() {
    console.log('===================')
    console.log(this.props)
    console.log('--------------------')
    console.log(this.state)
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
            animationIn='slideInDown'
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
                  onPress={() => { this.setState(() => ({ toggleModal: false })) }}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={signupStyles.forms_container_2}>
            <View style={signupStyles.forms_label_container}>
              <Text style={signupStyles.forms_label}>CONSULTANT SIGN UP</Text>
            </View>
            <View style={signupStyles.forms_label_small_container_2}>
              <Text style={signupStyles.forms_label_small}>Office Details:</Text>
            </View>
            <View>
              <View>
                <View style={signupStyles.forms_dynamicinput_margin}>
                  <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {this.state.officeLocations.map((value, i) => {
                      return (
                        <View key={value.key.toString()}>
                          <View style={signupStyles.forms_textinput_container}>
                            <Icon style={globalStyles.icon_global} name="map-marker" size={18} />
                            <TextInput
                              placeholder="Location"
                              placeholderTextColor="#8B8787"
                              style={signupStyles.forms_textinput}
                              value={this.state.officeLocations[i].location}
                              onChangeText={value => this.setLocation(value, i)}
                            />
                          </View>
                          <View style={signupStyles.forms_add_textinput_container}>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={signupStyles.forms_add_textinput_button_container}
                              onPress={() => this.addOfficeHours()}
                            >
                              <Icon style={globalStyles.icon_global} name="plus" size={14} />
                              <Text style={signupStyles.forms_add_textinput_text} > ADD OFFICE HOURS </Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      );
                    })}
                  </ScrollView>
                </View>
                {/* CODE FOR MULTIPLE LOCATION INPUTS - Dan */}
                <View style={signupStyles.forms_add_textinput_container}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={signupStyles.forms_add_textinput_button_container}
                    onPress={() => this.addLocation()}
                  >
                    <Icon style={globalStyles.icon_global} name="plus" size={14} />
                    <Text style={signupStyles.forms_add_textinput_text} > ADD LOCATION </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={signupStyles.forms_add_textinput_button_container}
                    onPress={() => this.removeLocation()}
                  >
                    <Icon style={globalStyles.icon_global} name="times" size={14} />
                    <Text style={signupStyles.forms_add_textinput_text} > REMOVE LOCATION </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Text style={signupStyles.forms_text}>3/4</Text>
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
    )
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateUserOfficeLocation, updateUserOfficeHours }, dispatch)
}

const mapStateToProps = state => {
  return {
    userOfficeLocation: state.users.userOfficeLocation
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupConsultant3_1)
