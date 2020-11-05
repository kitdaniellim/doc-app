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
      key: 0,
      count: 0,
      locationInput: [],
      text: '',
      isModalVisible: false
    }
  }
  
  toggleModal(visible) {
    this.setState({isModalVisible: visible})
  }

  Next = () => {
    let text = this.state.text
    const navigation = this.props.navigation;
    if (text === '') {
      this.toggleModal(true)
    } else {
      navigation.navigate('SignupConsultant4');
    }
  }

  addOfficeHours = (e) => {
    const navigation = this.props.navigation;
    navigation.navigate('SignupConsultant3_2');
  }

  addLocation = () => {
    let locationInput = this.state.locationInput;
    let key = this.state.key;
    let count = this.state.count;

    locationInput.push(
      <View key={key.toString()}>
        <View style={signupStyles.forms_textinput_container}>
          <Icon style={globalStyles.icon_global} name="map-marker" size={18} />
          <TextInput
            placeholder="Location"
            placeholderTextColor="#8B8787"
            style={signupStyles.forms_textinput}
            // onChangeText={text => this.setState({text})}
            value = {this.props.userOfficeLocation}
            onChangeText={userOfficeLocation=> this.props.updateUserOfficeLocation(userOfficeLocation)}
          />
        </View>
        <View style={signupStyles.forms_add_textinput_container}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.addOfficeHours(count)}
          >
            <Icon style={globalStyles.icon_global} name="plus" size={14} />
            <Text style={signupStyles.forms_add_textinput_text} > ADD OFFICE HOURS </Text>
          </TouchableOpacity>
        </View>
      </View>
    )

    key += 1;
    count += 1;
    this.setState({
      key: key,
      count: count,
      locationInput: locationInput,
    })
  }

  removeLocation = () => {
    let locationInput = this.state.locationInput;
    let count = this.state.count;

    if (count > 1) {
      locationInput.pop();
      count -= 1;
    }

    this.setState({
      count: count,
      locationInput
    });
  }

  componentDidMount() {
    this.addLocation();
  }

  render() {
    return (
      <View style={signupStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.isModalVisible}
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
                  onPress={() => {this.toggleModal(!this.state.isModalVisible)}}
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
                    {/* {this.state.locationInput.map((value) => {
                      return value;
                    })} */}
                  </ScrollView>
                </View>
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
  return bindActionCreators({ updateUserOfficeLocation, updateUserOfficeHours }, dispatch )
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
