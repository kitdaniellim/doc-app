import React from 'react';
import { Text, TextInput, Button, ScrollView, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import moment from "moment";
import RadioButtons_MultipleSelect from './custom/RadioButtons_MultipleSelect.js';
import DateTimePicker from '@react-native-community/datetimepicker';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateOfficeHours } from '../actions/users';

class SignupConsultant3_2 extends React.Component {
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
    if (this.state.canConfirm === false) {
      let canConfirm = true;
      for (let x = 0; canConfirm === true && x < this.state.schedCount; x++) {
        if (
          this.state.office_schedules[x].office_day.length === 0 ||
          this.state.office_schedules[x].office_hour_from === '' ||
          this.state.office_schedules[x].office_hour_from === 'Invalid date' ||
          this.state.office_schedules[x].office_hour_to === '' || 
          this.state.office_schedules[x].office_hour_to === 'Invalid date'
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
    let office_schedules = this.state.office_schedules;

    office_schedules[key].office_day = value;
    this.setState(() => ({
      office_schedules: office_schedules
    }))
    if (value.length === 0) {
      this.setState(() => ({
        canConfirm: false
      }))
    }
    console.log(value)
    console.log(key)
    console.log('===========OFFICE SCHEDS============')
    console.log(this.state.office_schedules)
    console.log('===========-------------============')
  }

  componentDidMount() {
    this.addHours();
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

    let office_schedules = this.state.office_schedules;

    if (type === 'from') {
      office_schedules[key].office_hour_from = format;
      this.setState(() => ({ showFrom: false }))
    } else {
      office_schedules[key].office_hour_to = format;
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
      office_schedules: office_schedules
    }))

  }

  addHours = () => {
    let office_schedules = this.state.office_schedules;
    office_schedules.push(
      {
        id: this.state.schedCount,
        office_day: [],
        office_hour_from: '',
        office_hour_to: '',
        office_location: '',
      }
    );

    this.setState({
      schedCount: this.state.schedCount + 1,
      office_schedules: office_schedules,
      canConfirm: false,
    })
  }

  removeHours = () => {
    if (this.state.schedCount > 1) {
      let office_schedules = this.state.office_schedules;
      office_schedules.pop();

      this.setState({
        schedCount: this.state.schedCount - 1,
        office_schedules: office_schedules,
      })
    }
  }

  Confirm = () => {
    let key = this.props.navigation.state.params.key;
    this.props.navigation.navigate('SignupConsultant3_1', { key: key, office_schedules: this.state.office_schedules });
  }

  render() {
    // console.log('==========3_2=========')
    // console.log(this.props)
    // console.log('--------------------')
    // console.log(this.state)
    // console.log('===================')
    let location = this.props.navigation.state.params;
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
              <Text style={signupStyles.forms_label}>CONSULTANT SIGN UP</Text>
            </View>
            <View style={signupStyles.forms_label_small_container}>
              <Text style={signupStyles.forms_label_small}>Office Hours: {location.officeLocation} </Text>
            </View>

            {/* <Dynamic_Input /> */}

            <View>
              <View style={signupStyles.forms_dynamicinput_margin}>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                  {this.state.office_schedules.map((value, i) => {
                    return (
                      <View key={value.id.toString()} style={signupStyles.forms_time_container}>
                        <View style={signupStyles.forms_time_scaffold}>
                          <View style={signupStyles.forms_timeinput_container}>

                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={signupStyles.forms_add_textinput_button_container}
                              onPress={() => { this.toggleTimeFrom(i) }}
                            >
                              <Text style={signupStyles.forms_add_textinput_text} > {(this.state.office_schedules[i].office_hour_from !== '') ? this.state.office_schedules[i].office_hour_from : 'Set Time From'} </Text>
                            </TouchableOpacity>


                            {/* <View style={signupStyles.forms_timeinput_container}>
                            <TextInput
                              defaultValue='4'
                              keyboardType='numeric'
                              style={signupStyles.forms_timeinput_textinput}
                              value={this.props.officeHours}
                              onChangeText={officeHours => this.props.updateOfficeHours(officeHours)}
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
                          </View> */}

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
                            <Text style={signupStyles.forms_text_bold}>to</Text>
                          </View>
                          <View style={signupStyles.forms_timeinput_container}>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={signupStyles.forms_add_textinput_button_container}
                              onPress={() => { this.toggleTimeTo(i) }}
                            >
                              <Text style={signupStyles.forms_add_textinput_text} > {(this.state.office_schedules[i].office_hour_to !== '') ? this.state.office_schedules[i].office_hour_to : 'Set Time To'} </Text>
                            </TouchableOpacity>
                          </View>
                          {this.state.key == i && this.state.showTo && (
                            <DateTimePicker
                              mode={'time'}
                              is24Hour={false}
                              display="default"
                              value={new Date()}
                              // onChange={officeHours => this.props.updateOfficeHours(officeHours)}
                              onChange={officeHours => this.onChange(officeHours, i, 'to')}
                            />
                          )}
                        </View>




                        <View>
                          {/* options={this.state.option[this.state.optionIndex].days} */}
                          <RadioButtons_MultipleSelect days={[]} invert_colors={false} isDisabled={this.state.office_schedules[i].office_hour_from === '' || this.state.office_schedules[i].office_hour_to === '' || this.state.office_schedules[i].office_hour_from === 'Invalid date' || this.state.office_schedules[i].office_hour_to === 'Invalid date' ? true : false} setDays={this.setDays.bind(this)} count={i} />
                        </View>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>

              <View style={signupStyles.forms_add_textinput_container}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={signupStyles.forms_add_textinput_button_container}
                  onPress={this.addHours}
                >
                  <View style={signupStyles.forms_add_textinput_text_container}>
                    <Icon style={globalStyles.icon_global} name="plus" size={14} />
                    <Text style={signupStyles.forms_add_textinput_text} > ADD HOURS  </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={signupStyles.forms_add_textinput_button_container}
                  onPress={this.removeHours}
                >
                  <View style={signupStyles.forms_add_textinput_text_container}>
                    <Icon style={globalStyles.icon_global} name="plus" size={14} />
                    <Text style={signupStyles.forms_add_textinput_text} > REMOVE HOURS  </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>




            <TouchableOpacity
              disabled={!this.state.canConfirm}
              activeOpacity={0.6}
              style={(!this.state.canConfirm) ? signupStyles.forms_button_disabled : signupStyles.forms_button}
              onPress={this.Confirm}
            >
              <Text style={(!this.state.canConfirm) ? signupStyles.forms_button_label_disabled : signupStyles.forms_button_label}>CONFIRM</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateOfficeHours }, dispatch)
}

const mapStateToProps = state => {
  return {
    officeHours: state.users.officeHours
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupConsultant3_2)
