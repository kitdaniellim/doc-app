import React from 'react';
import { ActivityIndicator, Alert, Text, TextInput, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, profileStyles, globalStyles } from '../styles/styles';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getConsultant, getAllConsultant, updateProfileImage, updateOfficeImage, editProfile, updateLocation, updateEmail, updatePassword, updateFullName, updateUserSpecialty, updateUserLIC, updateUserSubSpecialty, updateOfficeDetails } from '../actions/users';
import { getReviews } from '../actions/reviews';


import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
//import Firebase, { db } from '../config/Firebase'
// import { nanoid } from "nanoid";

class EditProfile_1 extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    // photo: null,
    // }
    this.state = {
      photo: null,
      // key: 0,
      // count: 0,
      // locationInput: [],
      // text: '',

      // isModalVisible: false,
      // locArray: [],
      // office_details: [{
      //   id: 0,
      //   location: '',
      //   hours: [],
      //   days: [],
      //   to_hour: '',
      //   from_hour: '',

      // }],

      // detailKey: 0,
      // detailLocation: '',
      officeCount: 0,
      // officeLocations: [],
      office_details: [],
      toggleModal: false,




      // email: '',
      // password: '',
      // fullName: '',
      // userSpecialty: '',
      // userLIC: 0,
      // userSubSpecialty: '',

    }
  }

  componentDidMount() {
    this.props.updateEmail(this.props.singleConsultant.email);
    // this.props.updatePassword(this.props.singleConsultant.email);
    this.props.updateFullName(this.props.singleConsultant.fullName);
    this.props.updateUserSpecialty(this.props.singleConsultant.userSpecialty);
    this.props.updateUserLIC(this.props.singleConsultant.userLIC);
    this.props.updateUserSubSpecialty(this.props.singleConsultant.userSubSpecialty);
    this.props.updateProfileImage(this.props.singleConsultant.profilePicture);
    this.props.updateOfficeImage(this.props.singleConsultant.officeImage);
    // this.props.updateOfficeDetails(this.props.singleConsultant.office_details);

    // let office_locations = [], count;
    // this.props.singleConsultant.office_details.map((value) => {
    //   office_locations.push({key: count, location: value.office_location});
    //   count++;
    // })


    this.setState(() => ({
      officeCount: this.props.singleConsultant.office_details.length,
      office_details: this.props.singleConsultant.office_details,
    }))

  }


  // toggleModal(visible) {
  //   this.setState({ isModalVisible: visible })
  // }
  // Confirm = () => {
  //   let text = this.state.text
  //   const navigation = this.props.navigation;
  //   if (text === '') {
  //     this.toggleModal(true)
  //   } else {
  //     navigation.goBack();
  //   }
  // }


  // addOfficeHours = (location, count) => {
  //   const navigation = this.props.navigation;
  //   console.log("Sa add office hours ni")
  //   console.log(count);
  //   navigation.navigate('EditProfile_2', {
  //     location: location,
  //     count: count
  //   });
  // }

  componentDidUpdate(prevProps) {
    if (this.props.route.params.office_details.length !== prevProps.route.params.office_details.length) {
      console.log('DIFFERENT PARAMETERS')
      console.log(this.props.route.params.office_details)
      console.log('---------------------')
      console.log(prevProps.route.params.office_details)
      console.log('==========================')
      this.setState(() => ({
        office_details: this.props.route.params.office_details,
      }))
    }
  }

  addOfficeHours = (key) => {
    // console.log('ADDING HOURS')
    // console.log(this.state.office_details[key])
    // console.log('------end')
    this.props.navigation.navigate('EditProfile_2', { key: key, office_details: this.state.office_details });
  }

  addSchedule = () => {
    let schedule = this.state.office_details;
    schedule.push(
      {
        id: this.state.officeCount,
        office_day: [],
        office_hour_from: '',
        office_hour_to: '',
        office_location: '',
      }
    )

    this.setState({
      officeCount: this.state.officeCount + 1,
      office_details: schedule,
    })
  }

  removeSchedule = () => {
    if (this.state.office_details.length > 1) {
      let schedule = this.state.office_details;
      schedule.pop();

      this.setState({
        officeCount: this.state.officeCount - 1,
        office_details: schedule,
      })
    }
  }

  setLocation = (text, i) => {
    let office_locations = this.state.office_details;
    office_locations[i].office_location = text;

    this.setState(() => ({ office_details: office_locations }));
  }

  updateLocationArray = (location, count) => {
    // let updateLocArray = [];
    // var data = { location, count };

    // updateLocArray.push(data);  
    // console.log("Sa array na ni");
    // console.log(location, count);
  }

  updateLocation = (location, key) => {
    // Add location
    // const user_location = {
    //   id: key,
    //   location: location
    // }
    // this.props.updateLocation(user_location);
    // console.log(this.props.updateLocation);
  }

  updateHours = (hours, key) => {

  }

  // addLocation = () => {
  // let locationInput = this.state.locationInput;
  // let key = this.state.key;
  // let count = this.state.count;

  // locationInput.push(
  //   < View key={key.toString()}>
  //     <View style={signupStyles.forms_textinput_container}>
  //       <Icon style={globalStyles.icon_global} name="map-marker" size={18} />
  //       <TextInput
  //         placeholder="Location"
  //         placeholderTextColor="#8B8787"
  //         style={signupStyles.forms_textinput}
  //         onChangeText={text => this.updateLocation(text, key)}
  //       //onChangeText = { text => this.props.update_location( text, key )}
  //       //onChangeText={text => this.setState({ text })}
  //       />
  //     </View>
  //     <View style={signupStyles.forms_add_textinput_container}>
  //       <TouchableOpacity
  //         activeOpacity={0.6}
  //         style={signupStyles.forms_add_textinput_button_container}
  //         onPress={() => this.addOfficeHours(this.state.text, this.state.count)}
  //       >
  //         <Icon style={globalStyles.icon_global} name="plus" size={14} />
  //         <Text style={signupStyles.forms_add_textinput_text} > ADD OFFICE HOURS </Text>
  //       </TouchableOpacity>
  //     </View>
  //   </View>
  // )

  // key += 1;
  // count += 1;
  // this.setState({
  //   key: key,
  //   count: count,
  //   locationInput: locationInput,
  // })
  // console.log("edit loc")
  // console.log(count);
  //console.log(text);
  // }

  // removeLocation = () => {
  // let locationInput = this.state.locationInput;
  // let count = this.state.count;

  // if (count > 1) {
  //   locationInput.pop();
  //   count -= 1;
  // }

  // this.setState({
  //   count: count,
  //   locationInput
  // });
  // }

  async checkCameraRollPermission() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (status !== 'granted') {
      // Alert.alert(
      //   'Allow access to Camera Roll',
      //   'SetMeApp needs permission to view your camera roll.',
      //   [
      //     {
      //       text: 'Cancel',
      //       onPress: () => console.log('Cancel Pressed'),
      //       style: 'cancel'
      //     },
      //     { text: 'Settings', onPress: () => Linking.openURL('app-settings:') },

      //   ]
      // )
      // this.setState({
      //   hasCameraRollPermissions: false
      // })
      return false
    }
    // this.setState({
    //   hasCameraRollPermissions: true
    // })
    return true
  }

  _pickImage = async (text) => {

    const checkPermissions = await this.checkCameraRollPermission()
    // console.log(checkPermissions, '--what is returned here determins the permissions');
    if (!checkPermissions) return

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
    });


    if (!result.cancelled) {
      // console.log('SHOWING SHIT==============');
      // console.log(result)
      // console.log('---------------------');
      // console.log(result.uri)
      // console.log('---------------------');
      if (text === 'profile') {
        this.props.updateProfileImage(result.uri);
      } else {
        this.props.updateOfficeImage(result.uri);
      }
    }
  };

  Confirm = async () => {
    await this.props.updateOfficeDetails(this.state.office_details);
    await this.props.editProfile(this.props.singleConsultant.uid);
    await this.props.getConsultant(this.props.singleConsultant.uid);
    await this.props.getReviews(this.props.singleConsultant.uid);
    await this.props.getAllConsultant();
    this.props.navigation.replace('Profile');
  }

  BackToProfile = async () => {
    await this.props.navigation.replace('Profile');
  };


  render() {
    // console.log('====== START OF EDIT PROFILE THINGS ======');
    // console.log(this.props.singleConsultant);
    // console.log('====== END OF EDIT PROFILE THINGS ======');
    // const office_details = {
    //   key: '',
    //   location: '',
    //   office_day: [],
    //   office_hour_from: '',
    //   office_hour_to: ''
    // }

    return (
      <View style={profileStyles.container}>
        <View style={profileStyles.header_container}>
          <View style={profileStyles.header_text_container}>
            <Text style={profileStyles.header_text_bold}>EDIT PROFILE: {this.props.singleConsultant.fullName} </Text>
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this.BackToProfile}
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
              <View style={profileStyles.profile_officeimg_container}>
                <Image
                  source={{ uri: '' + this.props.officeImage + '' }}
                  style={profileStyles.profile_officeimg}
                />
              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={profileStyles.forms_add_textinput_button_container_i}
                onPress={() => this._pickImage('office')}
              >
                <Text style={profileStyles.forms_chooseimg_button_text_i} > CHOOSE OFFICE IMAGE </Text>
              </TouchableOpacity>
              <View style={profileStyles.profile_b_info_container}>
                <View style={profileStyles.profile_b_info_details_container}>
                  <View style={profileStyles.profile_b_info_profileimg_container}>
                    <Image
                      source={{ uri: '' + this.props.profilePicture + '' }}
                      style={profileStyles.profile_b_info_profileimg}
                    />
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={profileStyles.forms_add_textinput_button_container_i}
                  onPress={() => this._pickImage('profile')}
                >
                  <Text style={profileStyles.forms_chooseimg_button_text_i} > CHOOSE PROFILE IMAGE </Text>
                </TouchableOpacity>
              </View>

              <View style={profileStyles.divider} />
              <View style={profileStyles.profile_b_info_container}>
                <Text style={profileStyles.profile_b_info_header}>Basic Information</Text>
                {/* <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="envelope" size={18} />
                  <TextInput
                    placeholder="Email Address"
                    placeholderTextColor="#8B8787"
                    style={signupStyles.forms_textinput}
                    value={this.props.email}
                    onChangeText={email => this.props.updateEmail(email)}
                  />
                </View> */}
                <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
                  <TextInput
                    placeholder="Full Name"
                    placeholderTextColor="#8B8787"
                    style={signupStyles.forms_textinput}
                    value={this.props.fullName}
                    onChangeText={name => this.props.updateFullName(name)}
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
                        paddingRight: 10,
                        paddingLeft: 15,
                      },
                      inputIOS: {
                        color: 'black',
                      },
                      inputAndroid: {
                        color: 'black',
                      },
                    }}

                    value={this.props.userSpecialty}
                    onValueChange={specialty => this.props.updateUserSpecialty(specialty)}
                    items={[
                      { label: 'Engineer', value: 'Engineer' },
                      { label: 'Architect', value: 'Architect' },
                      { label: 'Doctor', value: 'Doctor' },
                      { label: 'Lawyer', value: 'Lawyer' }
                    ]}
                  />
                </View>
                <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="briefcase" size={15} />
                  <TextInput
                    placeholder="Sub-specialty"
                    placeholderTextColor="#8B8787"
                    style={signupStyles.forms_textinput}
                    value={this.props.userSubSpecialty}
                    onChangeText={subSpecialty => this.props.updateUserSubSpecialty(subSpecialty)}
                  />
                </View>
                <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="id-card" size={15} />
                  <TextInput
                    placeholder="LIC"
                    placeholderTextColor="#8B8787"
                    style={signupStyles.forms_textinput}
                    value={this.props.userLIC}
                    onChangeText={lic => this.props.updateUserLIC(lic)}
                  />
                </View>
                {/* <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="lock" size={18} />
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#8B8787"
                    style={signupStyles.forms_textinput}
                    value={this.props.password}
                    onChangeText={() => { }}
                  // onChangeText={password => this.props.updatePassword(password)}
                  />
                </View>
                <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="lock" size={18} />
                  <TextInput
                    secureTextEntry={true}
                    placeholder="Confirm Password"
                    placeholderTextColor="#8B8787"
                    style={signupStyles.forms_textinput}
                    value={this.props.password}
                    onChangeText={() => { }}
                  // onChangeText={password => this.props.updatePassword(password)}
                  />
                </View> */}
              </View>
              <View style={profileStyles.divider} />
              <View style={profileStyles.profile_b_info_container}>
                <Text style={profileStyles.profile_b_info_header}>Office Details</Text>
                {this.state.office_details.map((value, i) => {
                  return (
                    <View key={value.id.toString()}>
                      <View style={signupStyles.forms_textinput_container}>
                        <Icon style={globalStyles.icon_global} name="map-marker" size={18} />
                        <TextInput
                          placeholder="Location"
                          placeholderTextColor="#8B8787"
                          style={signupStyles.forms_textinput}
                          value={value.office_location}
                          onChangeText={text => this.setLocation(text, value.id)}
                        />
                      </View>
                      <Text style={profileStyles.profile_b_info_header_justify}>{value.office_hour_from} - {value.office_hour_to} {value.office_day.map((day) => { return ' ' + day })}</Text>
                      <View style={signupStyles.forms_add_textinput_container}>

                        <TouchableOpacity
                          activeOpacity={0.6}
                          style={profileStyles.forms_add_textinput_button_container_i}
                          onPress={() => this.addOfficeHours(value.id)}
                        >
                          <View style={{ flexDirection: 'row' }}>
                            <Icon style={globalStyles.icon_global_i} name="plus" size={14} />
                            <Text style={profileStyles.forms_chooseimg_button_text_i} >
                              ADD OFFICE HOURS
                                  </Text>
                          </View>

                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                })}


              </View>
              <View style={signupStyles.forms_add_textinput_container}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={profileStyles.forms_add_textinput_button_container_i}
                  onPress={() => this.addSchedule()}
                >
                  <Icon style={globalStyles.icon_global_i} name="plus" size={14} />
                  <Text style={profileStyles.forms_chooseimg_button_text_i} > ADD </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={profileStyles.forms_add_textinput_button_container_i}
                  onPress={() => this.removeSchedule()}
                >
                  <Icon style={globalStyles.icon_global_i} name="times" size={14} />
                  <Text style={profileStyles.forms_chooseimg_button_text_i} >REMOVE </Text>
                </TouchableOpacity>
              </View>
              {this.props.loading ?
                <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]}>
                  <ActivityIndicator size="large" color="#56EC65" />
                </View>
                :
                <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]} />
              }
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
    getAllConsultant,
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
    loading: state.users.loading,
    singleConsultant: state.users.singleConsultant,
    email: state.users.email,
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
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile_1);