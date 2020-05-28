import React, { Component } from 'react';
import { Text, TextInput, Picker, Button, ScrollView, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import RadioButtons_MultipleSelect from '../assets/RadioButtons_MultipleSelect.js';

export default class SignupConsultant3_1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0,
      count: 0,
      locationInput: [],
    }
  }

  addOfficeHours = (e) => {
    const navigation = this.props.navigation;
    navigation.navigate('SignupConsultant3_2');
  }

  Next = () => {
    const navigation = this.props.navigation;
    navigation.navigate('SignupConsultant4');
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

    if (count !== 0) {
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
          <View style={signupStyles.forms_container}>
            <View style={signupStyles.forms_label_container}>
              <Text style={signupStyles.forms_label}> CONSULTANT SIGN UP </Text>
            </View>
            <View style={signupStyles.forms_label_small_container}>
              <Text style={signupStyles.forms_label_small}>Office Details:</Text>
            </View>
            <View>
              <View>
                <View style={signupStyles.forms_dynamicinput_margin}>
                  <ScrollView contentContainerStyle={{flexGrow: 1}}>
                    {this.state.locationInput.map((value) => {
                      return value;
                    })}
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
