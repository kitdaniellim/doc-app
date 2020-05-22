import React, { Component } from 'react';
import { Text, TextInput, Picker, Button, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';
import RadioButtons_MultipleSelect from '../assets/RadioButtons_MultipleSelect.js';

export default class SignupConsultant3_1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      locationID: -1,
      locationInput : [],
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
    let locationID = this.state.locationID;
    let locationInput = this.state.locationInput;

    locationID += 1;
    locationInput.push(
      <View>
        <View style={signupStyles.forms_textinput_container}>
          <Icon style={globalStyles.icon_global} name="map-marker" size={18} />
          <TextInput 
            placeholder="Location" 
            placeholderTextColor = "#8B8787"
            style={signupStyles.forms_textinput}
          />
        </View>
        <View style={signupStyles.forms_add_textinput_container}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_add_textinput_button_container}
              onPress={() => this.addOfficeHours(locationID)}
            >
              <Text style={signupStyles.forms_add_textinput_text} >ADD OFFICE HOURS </Text>
              <Icon style={globalStyles.icon_global} name="plus" size={18} />
            </TouchableOpacity>
          </View>
      </View>
    )

    this.setState({ 
      locationID: locationID,
      locationInput: locationInput,
    })
  }

  removeLocation = () => {
    let locationID = this.state.locationID;
    let locationInput = this.state.locationInput;

    if(locationID != -1) {
      locationID -= 1;
      locationInput.pop();
    }

    this.setState({ 
      locationID: locationID,
      locationInput 
    });
  }
  
  componentDidMount() {
    this.addLocation();
  }

  render(){
    return(
      <View style={signupStyles.container}>
        <LinearGradient 
            colors={['rgba(243,243,243,0.4)', 'transparent']}
            start={{x : 0, y : 1}}
            end={{x : 0, y : 0}}
            style={globalStyles.gradient}
        >
        <View style={signupStyles.forms_container}>
          <View style={signupStyles.forms_label_container}>
            <Text style={signupStyles.forms_label}> CONSULTANT SIGN UP </Text>
          </View>
          <Text style={signupStyles.forms_label_small}> Office Details: </Text>
    
          <View>
            <View>
              {/* Displays All Locations */}
              {this.state.locationInput.map((value) => { 
                return value;
              })}

              <View style={signupStyles.forms_add_textinput_container}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={signupStyles.forms_add_textinput_button_container}
                  onPress={() => this.addLocation()}
                >
                  <Text style={signupStyles.forms_add_textinput_text} > ADD LOCATION </Text>
                  <Icon style={globalStyles.icon_global} name="plus" size={18} />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={signupStyles.forms_add_textinput_button_container}
                  onPress={() => this.removeLocation()}
                >
                  <Text style={signupStyles.forms_add_textinput_text} > REMOVE LOCATION </Text>
                  <Icon style={globalStyles.icon_global} name="plus" size={18} />
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
