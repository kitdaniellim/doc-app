import React from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
// import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles, paypalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { updateEmail, updatePassword, updateFullName, updateMobileNumber, updateBirthDay } from '../actions/users';



/* Dan -  
const [fname, setName] = useState('');
const [month, setMonth] = useState('');
const [day, setDay] = useState('');
const [year, setYear] = useState('');
const [num, setNum] = useState('');
const [icon, setIcon] = useState('times-circle-o');
const [messageLabel, setMessageLabel] = useState('Oops!');
const [message, setMessage] = useState('Seems like you missed one. Please fill in all the required fields before proceeding.');
const [isVerified, verify] = useState(false);
const [isModalVisible, toggleModal] = useState(false);
*/

/* Dev: DAN
function Close() {
  if(isVerified) {
    navigation.navigate('Login');
  } else {
    toggleModal(false)
  }
}
*/

/* Dev: Dan
  //validate mobile number field
  function validate() {
    let reg = /^\d{10}$/
    return (reg.test(num) === true)? true : false
  }
*/
class SignupClient2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      day: '',
      year: '',
      toggleModal: false,
      // status: "Pending"
    }
  }

  Close = () => {
    this.setState({
      toggleModal: false,
    });
  }

  /*DEV: EJA - For updating the month, date and year values */
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  populateYears = () => {
    let years = [];
    let startYear = 2021;
    for (let x = 0; x < 100; x++) {
      years.push({ label: startYear.toString(), value: startYear.toString() })
      startYear--
    }
    return years;
  }

  populateDays = () => {
    let days = [];
    for (let x = 1; x <= 31; x++) {
      days.push({ label: x.toString(), value: x.toString() })
    }
    return days;
  }

  /*DEV: EJA: Paypal function */
  // handleResponse = data => {
  //   if (data.title === 'success') {
  //     this.setState({ showModal: false, status: "Complete" });
  //     this.props.navigation.navigate('LoginClient');
  //   } else if (data.title === 'cancel') {
  //     this.setState({ showModal: false, status: "Cancellled" });
  //   } else {
  //     return;
  //   }
  // };

  Next = () => {
    if(this.props.fullName !== undefined && this.props.fullName !== '' && this.props.birthDay !== '' && this.props.mobileNumber !== '') {
      this.props.navigation.navigate('SignupClient3');
    } else {
      this.setState({ toggleModal: true })
    }
    
  }

  render() {
    var month = this.state.month;
    var day = this.state.day;
    var year = this.state.year;
    var birthDay = `${month + day + year}`
    this.props.updateBirthDay(birthDay);
    // console.log(this.props)
    return (
      <View style={signupStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          <Modal
            isVisible={this.state.toggleModal}
            animationIn='bounceInDown'
            animationOut='slideOutUp'
            animationInTiming={1100}
            animationOutTiming={900}
          >
            <View style={globalStyles.modal_container}>
              <View style={globalStyles.modal_container_top}>
                <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
              </View>
              <View style={globalStyles.modal_container_bottom}>
                <Text style={globalStyles.modal_notif_bold}>Oops!</Text>
                <Text style={globalStyles.modal_notif}>Seems like you missed one. Please fill in all the required fields before proceeding.</Text>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.Close}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
          {/* <Modal
            visible={this.state.showModal}
            onRequestClose={() => this.setState({ showModal: false })}
          >
            <WebView
              source={{ uri: "http://192.168.254.112:3000/paypal" }}
              onNavigationStateChange={data => this.handleResponse(data)}
            />
          </Modal> */}
          <View style={signupStyles.forms_container}>
            <Text style={signupStyles.forms_label}>CLIENT SIGN UP </Text>
            <View style={signupStyles.forms_label_small_container_2}>
              <Text style={signupStyles.forms_label_small}>Contact Details: </Text>
            </View>

            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                value={this.props.fullName}
                onChangeText={fullName => this.props.updateFullName(fullName)}
              />
            </View>
            <View style={signupStyles.forms_bday_label_container}>
              <Icon style={globalStyles.icon_global_i} name="birthday-cake" size={18} />
              <TextInput
                editable={false}
                selectTextOnFocus={false}
                placeholder="Birthday"
                placeholderTextColor="#FFFFFF"
                style={signupStyles.forms_bday_label}
              />
            </View>
            <View style={signupStyles.forms_bday_container}>
              <View style={signupStyles.forms_bday_item_container}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Month',
                    value: '',
                  }}
                  style={{
                    viewContainer: {
                      alignSelf: 'stretch',
                      margin: -10,
                      padding: -5,
                      paddingHorizontal: 18,
                    },
                    inputIOS: {
                      color: 'black',
                      paddingTop: 13,
                      paddingHorizontal: 10,
                      paddingBottom: 12,
                    },
                    inputAndroid: {
                      color: 'black',
                    },
                  }}

                  value={this.state.month}
                  onValueChange={(val) => this.updateInputVal(val, 'month')}
                  items={[
                    { label: 'January', value: 'January' },
                    { label: 'February', value: 'February' },
                    { label: 'March', value: 'March' },
                    { label: 'April', value: 'April' },
                    { label: 'May', value: 'May' },
                    { label: 'June', value: 'June' },
                    { label: 'July', value: 'July' },
                    { label: 'August', value: 'August' },
                    { label: 'September', value: 'September' },
                    { label: 'October', value: 'October' },
                    { label: 'November', value: 'November' },
                    { label: 'December', value: 'December' },
                  ]}
                />
              </View>
              <View style={signupStyles.forms_bday_item_container}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Day',
                    value: '',
                  }}
                  style={{
                    viewContainer: {
                      alignSelf: 'stretch',
                      margin: -10,
                      padding: -5,
                      paddingHorizontal: 18,
                      justifyContent: 'center'
                    },
                    inputIOS: {
                      color: 'black',
                      paddingTop: 13,
                      paddingHorizontal: 10,
                      paddingBottom: 12,
                    },
                    inputAndroid: {
                      color: 'black',
                    },
                  }}
                  value={this.state.day}
                  onValueChange={(val) => this.updateInputVal(val, 'day')}
                  items={ this.populateDays() }
                />
              </View>
              <View style={signupStyles.forms_bday_item_container}>
                <RNPickerSelect
                  placeholder={{
                    label: 'Year',
                    value: '',
                  }}
                  style={{
                    viewContainer: {
                      alignSelf: 'stretch',
                      margin: -10,
                      padding: -5,
                      paddingHorizontal: 18,
                    },
                    inputIOS: {
                      color: 'black',
                      paddingTop: 13,
                      paddingHorizontal: 10,
                      paddingBottom: 12,
                    },
                    inputAndroid: {
                      color: 'black',
                    },
                  }}
                  value={this.state.year}
                  onValueChange={(val) => this.updateInputVal(val, 'year')}
                  items = { this.populateYears() }
                />
              </View>
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="mobile" size={25} />
              <TextInput
                placeholder="Mobile Number (ex. 09258426943)"
                placeholderTextColor="#8B8787"
                keyboardType='numeric'
                style={signupStyles.forms_textinput}
                value={this.props.mobileNumber}
                onChangeText={mobileNumber => this.props.updateMobileNumber(mobileNumber)}
              />
            </View>

            {/* <TouchableOpacity
              activeOpacity={0.6}
              style={paypalStyles.forms_paybutton}
              onPress={() => this.setState({ showModal: true })}
            >
              <Text style={paypalStyles.forms_paybutton_label}>Pay Through PayPal</Text>
            </TouchableOpacity> */}

            <Text style={signupStyles.forms_text}>2/3</Text>

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
    );
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, updateFullName, updateMobileNumber, updateBirthDay }, dispatch)
}

const mapStateToProps = state => {
  return {
    userType: state.users.userType,
    email: state.users.email,
    password: state.users.password,
    fullName: state.users.fullName,
    mobileNumber: state.users.mobileNumber,
    birthDay: state.users.birthDay
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupClient2)

