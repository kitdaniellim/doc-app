import React, { Component } from 'react';
import { Text, TextInput, Picker, Button, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';
import RadioButtons_MultipleSelect from '../assets/RadioButtons_MultipleSelect.js';

class Dynamic_Input extends Component {
  constructor(){
    super();
    this.state = {
      timeInputID: -1,
      timeInput : [],
      optionIndex: -1,
      option: [
        {
          days: [
            {key: 'Su', text: 'Su',  Checked: false},
            {key: 'M', text: 'M',  Checked: false},
            {key: 'Tu', text: 'Tu',  Checked: false},
            {key: 'W', text: 'W',  Checked: false},
            {key: 'Th', text: 'Th',  Checked: false},
            {key: 'F', text: 'F',  Checked: false},
            {key: 'Sa', text: 'Sa',  Checked: false},
          ]
        },
      ]
    }
  }

  addDays = () => {
    let option = this.state.option;
    let optionIndex = this.state.optionIndex;

    if(optionIndex !== -1){
      option.push({
        days: [
          {key: 'Su', text: 'Su',  Checked: false},
          {key: 'M', text: 'M',  Checked: false},
          {key: 'Tu', text: 'Tu',  Checked: false},
          {key: 'W', text: 'W',  Checked: false},
          {key: 'Th', text: 'Th',  Checked: false},
          {key: 'F', text: 'F',  Checked: false},
          {key: 'Sa', text: 'Sa',  Checked: false},
        ]
      });
    }
    console.log('option before setState')
    console.log(option)
    this.state.optionIndex = optionIndex += 1;
    this.setState({
      option: option,
    })
    console.log('option after setState')
    console.log(option)
    console.log('value of this.state.option')
    console.log(this.state.option)

  }

  addHours = () => {
    let timeInputID = this.state.timeInputID;
    let timeInput = this.state.timeInput;
    this.addDays();

    let optionIndex = this.state.optionIndex;
    console.log('OI Value Right Before Push' + optionIndex)
    if(timeInputID === -1){
      timeInput.push(
        <View style={signupStyles.forms_time_container}>
          <View style={signupStyles.forms_time_scaffold}>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                defaultValue='7'
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30' 
                style={signupStyles.forms_timeinput_textinput}
              />   
              <TextInput
                defaultValue='AM'
                style={signupStyles.forms_time_label}
              /> 
            </View>
            <View style={signupStyles.forms_timeinput_divider}>
              <Text style={signupStyles.forms_text_bold}>to</Text>
            </View>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                defaultValue='4'
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30'
                style={signupStyles.forms_timeinput_textinput}
              />
              <TextInput
                defaultValue='PM'
                style={signupStyles.forms_time_label}
              /> 
            </View>
          </View>
          <View>
            <RadioButtons_MultipleSelect options={this.state.option[this.state.optionIndex].days} />
          </View>
        </View>
      )
    } else {
      timeInput.push(
        <View style={signupStyles.forms_time_container}>
          <View style={signupStyles.forms_time_scaffold}>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                placeholder=''
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
                <TextInput
                  placeholder='' 
                  style={signupStyles.forms_timeinput_textinput}
                />   
                <TextInput
                  defaultValue='AM'
                  style={signupStyles.forms_time_label}
                /> 
            </View>
            <View style={signupStyles.forms_timeinput_divider}>
              <Text style={signupStyles.forms_text_bold}>to</Text>
            </View>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                placeholder=''
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                placeholder=''
                style={signupStyles.forms_timeinput_textinput}
              />
              <TextInput
                defaultValue='PM'
                style={signupStyles.forms_time_label}
              /> 
            </View>
          </View>
          <View>
            <RadioButtons_MultipleSelect options={this.state.option[this.state.optionIndex].days} />
          </View>
        </View>
      )
    }
    
    this.state.timeInputID = timeInputID += 1;
    this.setState({ 
      timeInput: timeInput,
    })
  }

  removeHours = () => {
    let timeInputID = this.state.timeInputID;
    if(timeInputID > 0) {
      let timeInput = this.state.timeInput;
      let option = this.state.option;
      let optionIndex = this.state.optionIndex;

      timeInputID -= 1;
      optionIndex -= 1;
      timeInput.pop();
      option.pop();
      
      this.setState({ 
        timeInputID: timeInputID,
        timeInput,
        optionIndex: optionIndex,
        option
      });
    }
  }

  componentDidMount() {
    this.addHours();
  }

  render(){
    return(
      <View>
        <View style={signupStyles.forms_dynamicinput_margin}>
          {/* Displays All Time Inputs */}
          {this.state.timeInput.map((value) => { 
            return value;
          })}
        </View>
        <View style={signupStyles.forms_add_textinput_container}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.addHours()}
          >
            <Text style={signupStyles.forms_add_textinput_text} > ADD HOURS  </Text>
            <Icon style={globalStyles.icon_global} name="plus" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.removeHours()}
          >
            <Text style={signupStyles.forms_add_textinput_text} > REMOVE HOURS </Text>
            <Icon style={globalStyles.icon_global} name="plus" size={18} />
          </TouchableOpacity>
        </View>  
      </View>
    )
  }
}

const SignupConsultant3_2 = ( {navigation} ) => {
  const Cancel = () => {
    navigation.navigate('SignupConsultant3_1');
  }

  const Confirm = () => {
    navigation.navigate('SignupConsultant3_1');
  }

  return (
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
      <Text style={signupStyles.forms_label_small}> Office Hours: -Location- </Text>

      <Dynamic_Input /> 
        <TouchableOpacity
          activeOpacity={0.6}
          style={signupStyles.forms_button}
          onPress={Confirm}
        >
          <Text style={signupStyles.forms_button_label}>CONFIRM</Text>
        </TouchableOpacity> 
    </View>
    </LinearGradient>
  </View>
  );
}

export default SignupConsultant3_2;