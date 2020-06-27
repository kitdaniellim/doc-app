import React, { Component } from 'react';
import { Text, TextInput, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, profileStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';

export default class EditProfile_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      count: 0,
      locationInput: [],
      text: '',
      isModalVisible: false,
      name: "Dr. Go",
      bio: 'Dr. Go\n Opthalmology\n troygo@gmail.com\n 09324758192',
      office_img: require("../assets/office.jpg"),
      profile_img: require("../assets/troy.png"),
    }
  }

  toggleModal(visible) {
    this.setState({ isModalVisible: visible })
  }

  Confirm = () => {
    let text = this.state.text
    const navigation = this.props.navigation;
    if (text === '') {
      this.toggleModal(true)
    } else {
      navigation.goBack();
    }
  }

  addOfficeHours = (e) => {
    const navigation = this.props.navigation;
    navigation.navigate('EditProfile_2');
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
            onChangeText={text => this.setState({ text })}
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
      <View style={profileStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.isModalVisible}
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
                  onPress={() => { this.toggleModal(!this.state.isModalVisible) }}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          <View style={profileStyles.forms_container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ 
                flexGrow: 1, 
                justifyContent: 'space-around',
                marginVertical: 10,
                paddingBottom: 20
              }}
            >
              <View>
                <View style={profileStyles.forms_label_small_container}>
                  <Text style={profileStyles.forms_label_small}>Profile Details:</Text>
                </View>
                <View style={profileStyles.profile_officeimg_container}>
                  <Image
                    source={this.state.office_img}
                    style={profileStyles.profile_officeimg}
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={profileStyles.forms_chooseimg_button_container}
                  onPress={() => { }}
                >
                  <Text style={profileStyles.forms_chooseimg_button_text} > CHOOSE OFFICE IMAGE </Text>
                </TouchableOpacity>
                <View style={profileStyles.forms_editbio_container}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around'}}>
                    <View style={profileStyles.profile_b_info_profileimg_container}>
                      <Image
                        source={this.state.profile_img}
                        style={profileStyles.profile_b_info_profileimg}
                      />
                    </View>
                    <View style={profileStyles.forms_textinput_container}>
                      <TextInput
                        multiline
                        style={profileStyles.forms_textinput}
                        onChangeText={text => this.setState({ bio: text })}
                        value={this.state.bio}
                      />
                    </View>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={profileStyles.forms_chooseimg_button_container}
                  onPress={() => { }}
                >
                  <Text style={profileStyles.forms_chooseimg_button_text} > CHOOSE PROFILE IMAGE </Text>
                </TouchableOpacity>
               </View>
              <View>
                <View style={profileStyles.forms_label_small_container}>
                  <Text style={profileStyles.forms_label_small}>Office Details:</Text>
                </View>
                <View style={profileStyles.forms_dynamicinput_margin}>

                  {this.state.locationInput.map((value) => {
                    return value;
                  })}

                </View>
                <View style={profileStyles.forms_add_textinput_container}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={profileStyles.forms_add_textinput_button_container}
                    onPress={() => this.addLocation()}
                  >
                    <Icon style={globalStyles.icon_global} name="plus" size={14} />
                    <Text style={profileStyles.forms_add_textinput_text} > ADD LOCATION </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    style={signupStyles.forms_add_textinput_button_container}
                    onPress={() => this.removeLocation()}
                  >
                    <Icon style={globalStyles.icon_global} name="times" size={14} />
                    <Text style={profileStyles.forms_add_textinput_text} > REMOVE LOCATION </Text>
                  </TouchableOpacity>
                </View>

              </View>
              <TouchableOpacity
                activeOpacity={0.6}
                style={profileStyles.forms_button}
                onPress={this.Confirm}
              >
                <Text style={profileStyles.forms_button_label}>CONFIRM</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </LinearGradient>
      </View>
    )
  }
}
