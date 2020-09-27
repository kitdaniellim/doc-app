import React, { Component, useState } from 'react';
import { Text, TextInput, View, Picker, TouchableOpacity, Modal} from 'react-native';
import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RNPickerSelect from 'react-native-picker-select';
import { updateEmail, updatePassword, updateFullName, updateMobileNumber, updateBirthDay, signup } from '../actions/user';

const Submit = () => {
  navigation.navigate('LoginClient');
  /*DEV: Dan - Please use Redux Variables */
  // if ((fname !== '' && month !== '' && day !== '' && year !== '' && num !== '')) {
  //   // let isValid = validate() 
  //   verify(true)
  //   setIcon('check-circle-o')
  //   setMessageLabel('Hooray!')
  //   setMessage('You have successfully created an account! Close this tab to start logging in with your username.')
  //   // if(isValid === true) {
      
  //   // } else {
  //   //   setMessage('Your mobile number should only contain numeric digits.')
  //   // }
  // }
  // toggleModal(true)
}

 // KIT - add years function for year drop down below 
 const years = []
 function populateYears() {
   let startYear = 2020;
   for(let x = 0; x < 100; x++){
     years.push({label: startYear.toString(), value: startYear.toString()})
     startYear--
   }
 }
 /* Dan - Please use REDUX variables 
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
class SignupClient2 extends Component{

    state = {
      month: '',
      day: '',
      year: '',
      showModal: false,
      status: "Pending"
    }
  

  /*DEV: EJA - Signup function */
  handleSignUp = () => {
    this.props.signup();
    //this.props.navigation.navigate('LoginClient');
    this.setState( { showModal: true } )
  }

  /*DEV: EJA - For updating the month, date and year values */
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }

  /*DEV: EJA: Paypal function */
  handleResponse = data => {
    if(data.title === 'success'){
      this.setState({showModal: false, status: "Complete"});
      this.props.navigation.navigate('LoginClient');
    }else if(data.title === 'cancel'){
      this.setState({showModal: false, status: "Cancellled"});
    }else{
      return;
    }
  };

  render(){

    var month = this.state.month;
    var day = this.state.day;
    var year = this.state.year;

    var birthDay = `${ month + day + year }` ;
    this.props.user.birthDay = birthDay;
    //birthDay => this.props.updateBirthDay(birthDay);
    console.log("sa signup page2 ni");
    console.log(this.props.user.email);
    return (
      
      <View style={signupStyles.container}>
        <LinearGradient 
            colors={['rgba(243,243,243,0.4)', 'transparent']}
            start={{x : 0, y : 1}}
            end={{x : 0, y : 0}}
            style={globalStyles.gradient}
        >
          {/* DEV: Dan
          
          <Modal
          isVisible={isModalVisible}
          animationIn='bounceInDown'
          animationOut='slideOutUp'
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.modal_container}>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
         */}
        <View style={signupStyles.forms_container}>
                <Text style={signupStyles.forms_label}> CLIENT SIGN UP </Text>
                <View style={signupStyles.forms_label_small_container}>
                  <Text style={signupStyles.forms_label_small}> Contact Details: </Text>
                </View>

                <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
                  <TextInput 
                      placeholder="Full Name" 
                      placeholderTextColor = "#8B8787"
                      style={signupStyles.forms_textinput}
                      value = {this.props.user.fullName }
                      onChangeText={fullName => this.props.updateFullName(fullName)}
                  />
                </View>
                <View style={signupStyles.forms_bday_label_container}>
                  <Icon style={globalStyles.icon_global} name="birthday-cake" size={18} />
                  <TextInput
                    editable={false}
                    selectTextOnFocus={false}
                    placeholder="Birthday"
                    placeholderTextColor="#8B8787"
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

                          value = {this.state.month}
                          onValueChange = {(val) => this.updateInputVal(val, 'month')}
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
                          value = {this.state.day}
                          onValueChange = {(val) => this.updateInputVal(val, 'day')}
                          items={[
                            { label: '1', value: '1' },
                            { label: '2', value: '2' },
                            { label: '3', value: '3' },
                            { label: '4', value: '4' },
                            { label: '5', value: '5' },
                            { label: '6', value: '6' },
                            { label: '7', value: '7' },
                            { label: '8', value: '8' },
                            { label: '9', value: '9' },
                            { label: '10', value: '10' },
                            { label: '11', value: '1' },
                            { label: '12', value: '12' },
                            { label: '13', value: '13' },
                            { label: '14', value: '14' },
                            { label: '15', value: '15' },
                            { label: '16', value: '16' },
                            { label: '17', value: '17' },
                            { label: '18', value: '18' },
                            { label: '19', value: '19' },
                            { label: '20', value: '20' },
                            { label: '21', value: '21' },
                            { label: '22', value: '22' },
                            { label: '23', value: '23' },
                            { label: '24', value: '24' },
                            { label: '25', value: '25' },
                            { label: '26', value: '26' },
                            { label: '27', value: '27' },
                            { label: '28', value: '28' },
                            { label: '29', value: '29' },
                            { label: '30', value: '30' },
                            { label: '31', value: '31' },
                          ]}
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
                          value = {this.state.year}
                          onValueChange = {(val) => this.updateInputVal(val, 'year')}
                          items={[
                            { label: '2020', value: '2020' },
                            { label: '2019', value: '2019' },
                            { label: '2018', value: '2018' },
                            { label: '2017', value: '2017' },
                            { label: '2016', value: '2016' },
                            { label: '2015', value: '2015' },
                            { label: '2014', value: '2014' },
                            { label: '2013', value: '2013' },
                            { label: '2012', value: '2012' },
                            { label: '2011', value: '2011' },
                            { label: '2010', value: '2010' },
                            { label: '2009', value: '2009' },
                            { label: '2008', value: '2008' },
                            { label: '2007', value: '2007' },
                            { label: '2006', value: '2006' },
                            { label: '2005', value: '2005' },
                            { label: '2004', value: '2004' },
                            { label: '2003', value: '2003' },
                            { label: '2002', value: '2002' },
                            { label: '2001', value: '2001' },
                            { label: '2000', value: '2000' },
                            { label: '1999', value: '1999' },
                            { label: '1998', value: '1998' },
                            { label: '1997', value: '1997' },
                            { label: '1996', value: '1996' },
                            { label: '1995', value: '1995' },
                            { label: '1994', value: '1994' },
                            { label: '1993', value: '1993' },
                            { label: '1992', value: '1992' },
                            { label: '1991', value: '1991' },
                            { label: '1990', value: '1990' },
                            { label: '1989', value: '1989' },
                            { label: '1988', value: '1988' },
                            { label: '1987', value: '1987' },
                            { label: '1986', value: '1986' },
                            { label: '1985', value: '1985' },
                            { label: '1984', value: '1984' },
                            { label: '1983', value: '1983' },
                            { label: '1982', value: '1982' },
                            { label: '1981', value: '1981' },
                            { label: '1980', value: '1980' },
                            { label: '1979', value: '1979' },
                            { label: '1978', value: '1978' },
                            { label: '1977', value: '1977' },
                            { label: '1976', value: '1976' },
                            { label: '1975', value: '1975' },
                            { label: '1974', value: '1974' },
                            { label: '1973', value: '1973' },
                          ]}
                        />
                    </View>
                  </View>
                <View style={signupStyles.forms_textinput_container}>
                  <Icon style={globalStyles.icon_global} name="mobile" size={25} />
                  <TextInput
                      placeholder="Mobile Number (ex. 09258426943)"
                      placeholderTextColor = "#8B8787"
                      keyboardType='numeric'
                      style={signupStyles.forms_textinput}
                      value = {this.props.user.mobileNumber }
                      onChangeText={mobileNumber => this.props.updateMobileNumber(mobileNumber)}                     
                  />
                </View>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={signupStyles.forms_paybutton}
                  onPress={() => {}}
                >
                  <Text style={signupStyles.forms_paybutton_label}>Pay Through PayPal</Text>
                </TouchableOpacity>
                <Text style={signupStyles.forms_text}>2/2</Text>
                <Modal 
                  visible = { this.state.showModal } 
                  onRequestClose= {() => this.setState({showModal: false})} 
                >
                <WebView 
                  source={{ uri: "http://192.168.254.112:3000/paypal" }}
                  onNavigationStateChange = {data => this.handleResponse(data)}            
                />
                </Modal>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={signupStyles.forms_button}
                  onPress={this.handleSignUp}
                >
                  <Text style={signupStyles.forms_button_label}>SUBMIT</Text>
                </TouchableOpacity>         
               
            
        </View>
    
        </LinearGradient>
      </View> 
      );
    }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateEmail, updatePassword, updateFullName, updateMobileNumber, updateBirthDay, signup }, dispatch )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupClient2)

