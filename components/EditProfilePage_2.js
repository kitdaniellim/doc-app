import React, { Component } from 'react';
import { Text, TextInput, Picker, Button, ScrollView, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import RadioButtons_MultipleSelect from './RadioButtons_MultipleSelect.js';

class Dynamic_Input extends Component {
  constructor() {
    super();
    this.state = {
      timeInputID: -1,
      timeInput: [],
      optionIndex: -1,
      option: [
        {
          days: [
            { key: 'Su', text: 'Su', Checked: false },
            { key: 'M', text: 'M', Checked: false },
            { key: 'Tu', text: 'Tu', Checked: false },
            { key: 'W', text: 'W', Checked: false },
            { key: 'Th', text: 'Th', Checked: false },
            { key: 'F', text: 'F', Checked: false },
            { key: 'Sa', text: 'Sa', Checked: false },
          ]
        },
      ]
    }
  }

  addDays = () => {
    let option = this.state.option;
    let optionIndex = this.state.optionIndex;

    if (optionIndex !== -1) {
      option.push({
        days: [
          { key: 'Su', text: 'Su', Checked: false },
          { key: 'M', text: 'M', Checked: false },
          { key: 'Tu', text: 'Tu', Checked: false },
          { key: 'W', text: 'W', Checked: false },
          { key: 'Th', text: 'Th', Checked: false },
          { key: 'F', text: 'F', Checked: false },
          { key: 'Sa', text: 'Sa', Checked: false },
        ]
      });
    }
    this.state.optionIndex = optionIndex += 1;
    this.setState({
      option: option,
    })

  }

  addHours = () => {
    let timeInputID = this.state.timeInputID;
    let timeInput = this.state.timeInput;
    this.addDays();

    let optionIndex = this.state.optionIndex;
    if (timeInputID === -1) {
      timeInput.push(
        <View key={timeInputID.toString} style={signupStyles.forms_time_container}>
          <View style={signupStyles.forms_time_scaffold}>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                defaultValue='7'
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30'
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <TextInput
                defaultValue='AM'
                keyboardType='numeric'
                style={signupStyles.forms_time_label}
              />
            </View>
            <View style={signupStyles.forms_timeinput_divider}>
              <Text style={signupStyles.forms_text_bold}>to</Text>
            </View>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                defaultValue='4'
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30'
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <TextInput
                defaultValue='PM'
                keyboardType='numeric'
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
        <View key={timeInputID.toString()} style={signupStyles.forms_time_container}>
          <View style={signupStyles.forms_time_scaffold}>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                placeholder=''
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                placeholder=''
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <TextInput
                defaultValue='AM'
                keyboardType='numeric'
                style={signupStyles.forms_time_label}
              />
            </View>
            <View style={signupStyles.forms_timeinput_divider}>
              <Text style={signupStyles.forms_text_bold}>to</Text>
            </View>
            <View style={signupStyles.forms_timeinput_container}>
              <TextInput
                placeholder=''
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                placeholder=''
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
              />
              <TextInput
                defaultValue='PM'
                keyboardType='numeric'
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
    if (timeInputID > 0) {
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

  render() {
    return (
      <View>
        <View style={signupStyles.forms_dynamicinput_margin}>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>  
            {this.state.timeInput.map((value) => {
              return value;
            })}
          </ScrollView>  
        </View>
        <View style={signupStyles.forms_add_textinput_container}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.addHours()}
          >
            <View style={signupStyles.forms_add_textinput_text_container}>
              <Icon style={globalStyles.icon_global} name="plus" size={14} />
              <Text style={signupStyles.forms_add_textinput_text} > ADD HOURS  </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.removeHours()}
          >
            <View style={signupStyles.forms_add_textinput_text_container}>
              <Icon style={globalStyles.icon_global} name="plus" size={14} />
              <Text style={signupStyles.forms_add_textinput_text} > REMOVE HOURS </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const EditProfile_2 = ({ navigation }) => {
  const Confirm = () => {
    navigation.goBack();
  }

  return (
    <View style={signupStyles.container}>
      <LinearGradient
        colors={['rgba(243,243,243,0.4)', 'transparent']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={globalStyles.gradient}
      >
        <View style={signupStyles.forms_container}>
          <View style={signupStyles.forms_label_small_container}>
            <Text style={signupStyles.forms_label_small}>Office Hours: -Location-</Text>
          </View>
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

export default EditProfile_2;