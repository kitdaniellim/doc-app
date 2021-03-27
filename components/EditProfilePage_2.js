import React from 'react';
import { Text, TextInput, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, profileStyles, globalStyles } from '../styles/styles';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
import moment from "moment";
import RadioButtons_MultipleSelect from './custom/RadioButtons_MultipleSelect.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getConsultant, updateProfileImage, updateOfficeImage, editProfile, updateLocation, updateEmail, updatePassword, updateFullName, updateUserSpecialty, updateUserLIC, updateUserSubSpecialty, updateOfficeDetails } from '../actions/users';
import { getReviews } from '../actions/reviews';


import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
//import Firebase, { db } from '../config/Firebase'
// import { nanoid } from "nanoid";

class EditProfile_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showFrom: false,
      showTo: false,
      schedCount: 0,
      key: 0,
      office_location: '',
      office_details: [],
      canConfirm: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.canConfirm === false) {
      let canConfirm = true;
      for (let x = 0; canConfirm === true && x < this.state.schedCount; x++) {
        if (
          this.state.office_details[x].office_day.length === 0 ||
          this.state.office_details[x].office_hour_from === '' ||
          this.state.office_details[x].office_hour_from === 'Invalid date' ||
          this.state.office_details[x].office_hour_to === '' || 
          this.state.office_details[x].office_hour_to === 'Invalid date'
        ) {
          canConfirm = false;
        }
      }

      if (canConfirm === true) {
        this.setState(() => ({
          canConfirm: canConfirm
        }))
      }
    }
  }

  setDays = (value, key) => {
    let office_details = this.state.office_details;

    office_details[key].office_day = value;
    this.setState(() => ({
      office_details: office_details
    }))
    if (value.length === 0) {
      this.setState(() => ({
        canConfirm: false
      }))
    }
    console.log(value)
    console.log(key)
    console.log('===========OFFICE SCHEDS============')
    console.log(this.state.office_details)
    console.log('===========-------------============')
  }

  componentDidMount() {
    let office_details = this.props.route.params.office_details
    let key = this.props.route.params.key;
    let office_location = office_details[key].office_location;

    this.setState({
      schedCount: office_details.length,
      office_location: office_location,
      office_details: office_details,
    })
  }

  toggleTimeFrom = (key) => {
    this.setState(() => ({
      showFrom: true,
      key: key,
    }))
  }

  toggleTimeTo = (key) => {
    this.setState(() => ({
      showTo: true,
      key: key,
    }))
  }

  onChange = (officeHours, key, type) => {
    let timestamp = new Date(officeHours.nativeEvent.timestamp);
    let format = moment(timestamp).format("hh:mm A");

    console.log(format)

    let office_details = this.state.office_details;

    if (type === 'from') {
      office_details[key].office_hour_from = format;
      this.setState(() => ({ showFrom: false }))
    } else {
      office_details[key].office_hour_to = format;
      this.setState(() => ({ showTo: false }))
    }
    if (format === 'Invalid date') {
      console.log('thisigshidfhaigs the formamtamtat')
      console.log(format)
      this.setState(() => ({
        canConfirm: false
      }))
    }

    this.setState(() => ({
      office_details: office_details
    }))
  }

  addHours = () => {
    let office_details = this.state.office_details;
    office_details.push(
      {
        id: this.state.schedCount,
        office_day: [],
        office_hour_from: '',
        office_hour_to: '',
        office_location: this.state.office_location,
      }
    );

    console.log('ADDING HOURS')

    this.setState({
      schedCount: this.state.schedCount + 1,
      office_details: office_details,
      canConfirm: false,
    })
  }

  //INACCURATE CODE, ADDING AND REMOVING HOURS WILL ALSO AFFECT OFFICE_DETAILS - dan
  removeHours = () => {
    if (this.state.schedCount > 1) {
      let office_details = this.state.office_details;
      office_details.pop();

      this.setState({
        schedCount: this.state.schedCount - 1,
        office_details: office_details,
      })
    }
  }

  Confirm = () => {
    this.props.navigation.navigate('EditProfile_1', { office_details: this.state.office_details });
  }

  Back = () => {
    this.props.navigation.goBack();
  };


  render() {
    console.log('====== START OF EDIT PROFILE THINGS ======');
    console.log(this.state.office_details);
    console.log('====== END OF EDIT PROFILE THINGS ======');

    return (
      <View style={profileStyles.container}>
        <View style={profileStyles.header_container}>
          <View style={profileStyles.header_text_container}>
            <Text style={profileStyles.header_text_bold}>EDIT PROFILE: {this.props.singleConsultant.fullName} </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this.Back}
            style={profileStyles.header_icon_container}
          >
            <Icon style={globalStyles.icon_global} name="times" size={18} />
          </TouchableOpacity>
        </View>
        <View style={profileStyles.scaffold}>
          <View style={profileStyles.profile_container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                flexGrow: 1,
                padding: 14,
                marginTop: 10,
                borderRadius: 15,
                backgroundColor: '#fff',
              }}
            >

              <View style={profileStyles.profile_b_info_container}>
                <Text style={profileStyles.profile_b_info_header}>Office Hours - {this.state.office_location}</Text>
              </View>

              {this.state.office_details.map((value, i) => {
                if (value.office_location === this.state.office_location) {
                  return (
                    <View key={value.id.toString()} style={signupStyles.forms_time_container}>
                      <View style={signupStyles.forms_time_scaffold}>
                        <View style={signupStyles.forms_timeinput_container}>

                          <TouchableOpacity
                            activeOpacity={0.6}
                            style={profileStyles.forms_add_textinput_button_container_i}
                            onPress={() => { this.toggleTimeFrom(i) }}
                          >
                            <Text style={profileStyles.forms_chooseimg_button_text_i} > {(this.state.office_details[i].office_hour_from !== '') ? this.state.office_details[i].office_hour_from : 'Set Time From'} </Text>
                          </TouchableOpacity>

                          {this.state.key == i && this.state.showFrom && (
                            <DateTimePicker
                              mode={'time'}
                              is24Hour={false}
                              display="default"
                              value={new Date()} //7 AM in Milliseconds
                              // onChange={officeHours => this.props.updateOfficeHours(officeHours)}
                              onChange={officeHours => this.onChange(officeHours, i, 'from')}
                            />
                          )}
                        </View>
                        <View style={signupStyles.forms_timeinput_divider}>
                          <Text style={profileStyles.profile_b_info_header_justify}>to</Text>
                        </View>
                        <View style={signupStyles.forms_timeinput_container}>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            style={profileStyles.forms_add_textinput_button_container_i}
                            onPress={() => { this.toggleTimeTo(i) }}
                          >
                            <Text style={profileStyles.forms_chooseimg_button_text_i} > {(this.state.office_details[i].office_hour_to !== '') ? this.state.office_details[i].office_hour_to : 'Set Time To'} </Text>
                          </TouchableOpacity>
                        </View>
                        {this.state.key == i && this.state.showTo && (
                          <DateTimePicker
                            mode={'time'}
                            is24Hour={false}
                            display="default"
                            value={new Date()}
                            onChange={officeHours => this.onChange(officeHours, i, 'to')}
                          />
                        )}
                      </View>

                      <View>
                        <RadioButtons_MultipleSelect days={this.state.office_details[i].office_day} invert_colors={true} isDisabled={this.state.office_details[i].office_hour_from === '' || this.state.office_details[i].office_hour_to === '' || this.state.office_details[i].office_hour_from === 'Invalid date' || this.state.office_details[i].office_hour_to === 'Invalid date' ? true : false} setDays={this.setDays.bind(this)} count={i} />
                      </View>
                    </View>
                  );
                }
              })}

              <View style={signupStyles.forms_add_textinput_container}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={profileStyles.forms_add_textinput_button_container_i}
                  onPress={this.addHours}
                >
                  <Icon style={globalStyles.icon_global_i} name="plus" size={14} />
                  <Text style={profileStyles.forms_chooseimg_button_text_i} > ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={profileStyles.forms_add_textinput_button_container_i}
                  onPress={this.removeHours}
                >
                  <Icon style={globalStyles.icon_global_i} name="times" size={14} />
                  <Text style={profileStyles.forms_chooseimg_button_text_i} > REMOVE</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity
                  disabled={!this.state.canConfirm}
                  activeOpacity={0.6}
                  style={(!this.state.canConfirm) ? profileStyles.forms_confirm_edit_profile_disabled : profileStyles.forms_confirm_edit_profile}
                  onPress={this.Confirm}
                >
                  <Text style={(!this.state.canConfirm) ? profileStyles.forms_chooseimg_button_text_i_disabled : profileStyles.forms_chooseimg_button_text_i}>CONFIRM</Text>
                </TouchableOpacity>
              </View>

            </ScrollView>





          </View>
        </View>
      </View>

    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    getConsultant,
    getReviews,
    updateProfileImage,
    editProfile,
    updateOfficeImage,
    updateLocation,
    updateEmail,
    updatePassword,
    updateFullName,
    updateUserLIC,
    updateUserSpecialty,
    updateUserSubSpecialty,
    updateOfficeDetails
  }, dispatch)
}
const mapStateToProps = state => {
  return {
    user: state.users,
    consultant: state.users,
    singleConsultant: state.users.singleConsultant,
    locArray: state.locArray,

    email: state.users.email,
    // password: state.users.password,
    fullName: state.users.fullName,
    userType: state.users.userType,
    userSpecialty: state.users.userSpecialty,
    userLIC: state.users.userLIC,
    userSubSpecialty: state.users.userSubSpecialty,
    office_details: state.users.office_details,
    profilePicture: state.users.profilePicture,
    officeImage: state.users.officeImage,

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile_2);