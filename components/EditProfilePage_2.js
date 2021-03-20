import React from 'react';
import { Text, TextInput, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, profileStyles, globalStyles } from '../styles/styles';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
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
      office_schedules: [],
      canConfirm: false,
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.canConfirm === false) {
    //   let canConfirm = true;
    //   for (let x = 0; canConfirm === true && x < this.state.schedCount; x++) {
    //     if (
    //       this.state.office_schedules[x].office_day.length === 0 ||
    //       this.state.office_schedules[x].office_hour_from === '' ||
    //       this.state.office_schedules[x].office_hour_from === 'Invalid date' ||
    //       this.state.office_schedules[x].office_hour_to === '' || 
    //       this.state.office_schedules[x].office_hour_to === 'Invalid date'
    //     ) {
    //       canConfirm = false;
    //     }
    //   }

    //   if (canConfirm === true) {
    //     this.setState(() => ({
    //       canConfirm: canConfirm
    //     }))
    //   }
    // }

  }

  setDays = (value, key) => {
    // let office_schedules = this.state.office_schedules;

    // office_schedules[key].office_day = value;
    // this.setState(() => ({
    //   office_schedules: office_schedules
    // }))
    // if (value.length === 0) {
    //   this.setState(() => ({
    //     canConfirm: false
    //   }))
    // }
    // console.log(value)
    // console.log(key)
    // console.log('===========OFFICE SCHEDS============')
    // console.log(this.state.office_schedules)
    // console.log('===========-------------============')
  }

  componentDidMount() {
    // this.addHours();
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
    // let timestamp = new Date(officeHours.nativeEvent.timestamp);
    // let format = moment(timestamp).format("hh:mm A");


    // console.log(format)

    // let office_schedules = this.state.office_schedules;

    // if (type === 'from') {
    //   office_schedules[key].office_hour_from = format;
    //   this.setState(() => ({ showFrom: false }))
    // } else {
    //   office_schedules[key].office_hour_to = format;
    //   this.setState(() => ({ showTo: false }))
    // }
    // if (format === 'Invalid date') {
    //   console.log('thisigshidfhaigs the formamtamtat')
    //   console.log(format)

    //   this.setState(() => ({
    //     canConfirm: false
    //   }))
    // }
    // this.setState(() => ({
    //   office_schedules: office_schedules
    // }))

  }

  addHours = () => {
    // let office_schedules = this.state.office_schedules;
    // office_schedules.push(
    //   {
    //     id: this.state.schedCount,
    //     office_day: [],
    //     office_hour_from: '',
    //     office_hour_to: '',
    //     office_location: '',
    //   }
    // );

    // this.setState({
    //   schedCount: this.state.schedCount + 1,
    //   office_schedules: office_schedules,
    //   canConfirm: false,
    // })
  }

  removeHours = () => {
    // if (this.state.schedCount > 1) {
    //   let office_schedules = this.state.office_schedules;
    //   office_schedules.pop();

    //   this.setState({
    //     schedCount: this.state.schedCount - 1,
    //     office_schedules: office_schedules,
    //   })
    // }
  }

  Confirm = () => {
    let key = this.props.navigation.state.params.key;
    this.props.navigation.navigate('EditProfile_2', { key: key, office_schedules: this.state.office_schedules });
  }

  Back = () => {
    this.props.navigation.goBack();
  };


  render() {
    // console.log('====== START OF EDIT PROFILE THINGS ======');
    // console.log(this.props.singleConsultant);
    // console.log('====== END OF EDIT PROFILE THINGS ======');

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
                <Text style={profileStyles.profile_b_info_header}>Office Hours</Text>

              </View>

              <TouchableOpacity
                activeOpacity={0.6}
                style={profileStyles.forms_confirm_edit_profile}
                onPress={this.Confirm}
              >
                <Text style={profileStyles.forms_chooseimg_button_text_i}>CONFIRM</Text>
              </TouchableOpacity>
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