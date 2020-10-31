import React from 'react';
import { Text, TextInput, Picker, Button, ScrollView, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import RadioButtons_MultipleSelect from './RadioButtons_MultipleSelect.js';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  updateLocation, updateToHourLocation, updateFromHourLocation, updateDayLocation} from '../actions/users';

class Dynamic_Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],

      hour_from: -1,
      minute_from: -1,
      type_from: -1,
      hour_to: -1,
      minute_to: -1,
      type_to: '',
      office_hour_from: -1,
      office_hour_to: -1,

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
    console.log(props);
  }
  test_hour = (text) => {
    console.log("test hor");
    
    this.setState({hour_from: text  })
    this.props.testhour(text);
    console.log(this.state.hour_from)
  }
  addDays = (props) => {
    
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
                onChangeText={text => this.test_hour(text)}
                 //onChange={hour_from => this.setState({hour_from: hour_from  })}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30'
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
                onChangeText={minute_from => this.setState({minute_from: minute_from  })}
              />
              <TextInput
                defaultValue='AM'
                keyboardType='numeric'
                style={signupStyles.forms_time_label}
                onChangeText={type_from => this.setState({type_from:type_from })}
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
                onChangeText={hour_to => this.setState({hour_to  })}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30'
                keyboardType='numeric'
                onChangeText={minute_to => this.setState({minute_to  })}
              />
              <TextInput
                defaultValue='PM'
                keyboardType='numeric'
                style={signupStyles.forms_time_label}
                onChangeText={type_to => this.setState({type_to  })}
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

class EditProfile_2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [],

      hour_from: -1,
      minute_from: -1,
      type_from: -1,
      hour_to: '',
      minute_to: -1,
      type_to: '',
      office_hour_from: -1,
      office_hour_to: -1,
      

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
    console.log(props);
  }
  update_to_hour = (text) => {
    console.log("test hor");
    
    this.setState({hour_from: text  })
    //this.props.testhour(text);
    console.log(this.state.hour_from)
  }
  update_from_hour = (hour) => {
    
  }
  addDays = (props) => {
    
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
                //onChangeText={text => this.test_hour(text)}
                 onChangeText={hour_from => this.setState({hour_from: hour_from  })}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30'
                keyboardType='numeric'
                style={signupStyles.forms_timeinput_textinput}
                onChangeText={minute_from => this.setState({minute_from: minute_from  })}
              />
              <TextInput
                defaultValue='AM'
                //keyboardType='numeric'
                style={signupStyles.forms_time_label}
                onChangeText={type_from => this.setState({type_from:type_from })}
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
                onChangeText={hour_to => this.setState({hour_to  })}
              />
              <Text style={signupStyles.forms_text_bold_alt}>{" "} : {" "}</Text>
              <TextInput
                defaultValue='30'
                keyboardType='numeric'
                onChangeText={minute_to => this.setState({minute_to  })}
              />
              <TextInput
                defaultValue='PM'
                //keyboardType='numeric'
                style={signupStyles.forms_time_label}
                onChangeText={type_to => this.setState({type_to  })}
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
  Confirm = (navigation) => {
    const hour_from = this.state.hour_from + ':' + this.state.minute_from + ' ' + this.state.type_from;
    const hour_to = this.state.hour_to + ':' + this.state.minute_to + ' ' +this.state.type_to;
    this.props.updateFromHourLocation(hour_from)
    this.props.updateToHourLocation(hour_to)
  
    console.log(hour_from)
    console.log(hour_to)
    console.log(this.state);
    console.log(this.props)
   this.props.navigation.goBack(); 
    //navigation.goBack();
  }

  render(){
    
    return(
      <View style={signupStyles.container}>
      <LinearGradient
        colors={['rgba(239,239,239,0.5)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={globalStyles.gradient}
      >
        <View style={signupStyles.forms_container}>
          <View style={signupStyles.forms_label_small_container}>
            <Text style={signupStyles.forms_label_small}>Office Hours: -Location-</Text>
          </View>
          {/* <Dynamic_Input /> */}
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
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_button}
            onPress={this.Confirm}
          >
            <Text style={signupStyles.forms_button_label}>CONFIRM</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
    )
  }
 
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateLocation, updateToHourLocation, updateFromHourLocation,  updateDayLocation }, dispatch)
}
const mapStateToProps = state => {
	return {
    user : state.users,
    consultant: state.users,
    singleConsultant: state.users
  	}
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile_2,Dynamic_Input);
//export default HomeClient;
