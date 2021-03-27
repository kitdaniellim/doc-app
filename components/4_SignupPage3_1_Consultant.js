import React, { useState } from 'react';
import { Text, TextInput, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateOfficeDetails } from '../actions/users';


class SignupConsultant3_1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      officeCount: 0,
      officeLocations: [],
      office_details: [],
      toggleModal: false
    }
  }

  componentDidMount() {
    this.addLocation();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let office_details = this.state.office_details
      let details = this.props.route.params.office_schedules;
      let key = this.props.route.params.key;
      let count = office_details.length;
      details.map((value, i) => {
        value.id = count;
        value.office_location = this.state.officeLocations[key].location;
        count++;
      })
      office_details.push(...details)
      
      console.log('AUYETUEAIANMFAF')
      console.log(office_details)
      console.log('AUYETUEAIANMFAF---------------------------------')
      this.setState(() => ({
        office_details: office_details,
      }))
    }
  }

  Next = () => {
    // let count = this.state.officeCount;
    // count--;
    // let locs = this.state.officeLocations;

    // if (locs[count].location === '') {
    //   this.setState(() => ({ toggleModal: true }))
    // } else {


    this.props.updateOfficeDetails(this.state.office_details)
    //   this.props.navigation.navigate('Signup_TermsAndAgreement');
    // }
    this.props.navigation.navigate('Signup_TermsAndAgreement');
  }

  addOfficeHours = (key) => {
    this.props.navigation.navigate('SignupConsultant3_2', { key: key, officeLocation: this.state.officeLocations[key].location });
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
    // console.log('==========3_1=========')
    // console.log(this.props)
    // console.log('--------------------')
    // console.log(this.state)
    // console.log('======================') 
    // let str = 'ADD'
    // if (this.state.office_details.length === 0) {

    // }



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
                              onChangeText={text => this.setLocation(text, i)}
                            />
                          </View>
                          <View style={signupStyles.forms_add_textinput_container}>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={signupStyles.forms_add_textinput_button_container}
                              onPress={() => this.addOfficeHours(value.key)}
                            >
                              <View style={{ flexDirection: 'row' }}>
                                <Icon style={globalStyles.icon_global} name="plus" size={14} />
                                <Text style={signupStyles.forms_add_textinput_text} >
                                  ADD OFFICE HOURS
                                  </Text>
                              </View>

                              {/* code for displaying results - makes it look pretty */}
                              {/* {this.state.office_details.length === 0 ?
                                <View style={{ flexDirection: 'row' }}>
                                  <Icon style={globalStyles.icon_global} name="plus" size={14} />
                                  <Text style={signupStyles.forms_add_textinput_text} >
                                    ADD OFFICE HOURS
                                  </Text>
                                </View>
                                :
                                this.state.office_details.map((item, x) => {
                                  let day_format = [];
                                  let time_format = [];
                                  console.log('???????????????????????????????/ssss')
                                  console.log(item)
                                  if (this.state.officeLocations[i].location === item.office_location) {
                                    item.office_day.map((value) => {
                                      day_format.push(value);
                                    })
                                    time_format.push(item.office_hour_from + ' - ' + item.office_hour_to)
                                    return (
                                      <View key={x.toString()} style={{ flexDirection: 'row' }}>
                                        <Text style={signupStyles.forms_add_textinput_text}>
                                          {JSON.stringify(day_format) + ' ' + JSON.stringify(time_format)} {"\n"}
                                        </Text>
                                      </View>
                                    )
                                  } else {
                                    return (
                                      <View key={x.toString()} style={{ flexDirection: 'row' }}>
                                        <Icon style={globalStyles.icon_global} name="plus" size={14} />
                                        <Text style={signupStyles.forms_add_textinput_text} >
                                          ADD OFFICE HOURS
                                      </Text>
                                      </View>
                                    )
                                  }
                                })


                              } */}











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
  return bindActionCreators({ updateOfficeDetails }, dispatch)
}

const mapStateToProps = state => {
  return {
    // userOfficeLocation: state.users.userOfficeLocation,
    email: state.users.email,
    password: state.users.password,
    fullName: state.users.fullName,
    userType: state.users.userType,
    userSpecialty: state.users.userSpecialty,
    userLIC: state.users.userLIC,
    userSubSpecialty: state.users.userSubSpecialty,
    office_details: state.users.office_details
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupConsultant3_1)
