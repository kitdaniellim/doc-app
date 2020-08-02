import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import RNPickerSelect from 'react-native-picker-select';
import Modal from 'react-native-modal';

const SignupClient2 = ({ navigation }) => {
  
  //add years function for year drop down below 
  const years = []
  function populateYears() {
    let startYear = 2020;
    for(let x = 0; x < 100; x++){
      years.push({label: startYear.toString(), value: startYear.toString()})
      startYear--
    }
  }

  const [fname, setName] = useState('username');
  const [month, setMonth] = useState('January');
  const [day, setDay] = useState('21');
  const [year, setYear] = useState('1999');
  const [num, setNum] = useState('09526346229');

  const [isModalVisible, toggleModal] = useState(false);

  function Close() {
    toggleModal(false)
  }

  const Submit = () => {
    if ((fname !== '' && month !== '' && day !== '' && year !== '' && num !== '')) {
      navigation.navigate('SignupClient3');
    } else {
      console.log('why is this here?')
      console.log(fname)
      console.log(month)
      console.log(day)
      console.log(year)
      console.log(num)
      toggleModal(true)
    }
  }

  return (
    <View style={signupStyles.container}>
      <LinearGradient
        colors={['rgba(239,239,239,0.5)', 'transparent']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={globalStyles.gradient}
      >
        <Modal
          isVisible={isModalVisible}
          animationIn='slideInDown'
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
                onPress={Close}
                style={globalStyles.modal_button_container}
              >
                <Text style={globalStyles.modal_button_label}>Close</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={signupStyles.forms_container}>
          <Text style={signupStyles.forms_label}> CLIENT SIGN UP </Text>
          <View style={signupStyles.forms_label_small_container}>
            <Text style={signupStyles.forms_label_small}> Contact Details: </Text>
          </View>
          <View style={signupStyles.forms_textinput_container}>
            <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
            <TextInput
              placeholder="Full Name"
              placeholderTextColor="#8B8787"
              style={signupStyles.forms_textinput}
              onChangeText={text => setName(text)}
              value={fname}
            />
          </View>
          <View style={signupStyles.forms_bday_label_container}>
            <Icon style={globalStyles.icon_global_i} name="birthday-cake" size={18} />
            <TextInput
              editable={false}
              selectTextOnFocus={false}
              placeholder="Birthday"
              placeholderTextColor="#fff"
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

                onValueChange={value => setMonth(value)}
                value={month}
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
                onValueChange={value => setDay(value)}
                value={day}
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
                onValueChange={value => setYear(value)}
                value={year}
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
                  { label: '1972', value: '1972' },
                  { label: '1971', value: '1971' },
                  { label: '1970', value: '1970' },
                  { label: '1969', value: '1969' },
                  { label: '1968', value: '1968' },
                  { label: '1967', value: '1967' },
                  { label: '1966', value: '1966' },
                  { label: '1965', value: '1965' },
                  { label: '1964', value: '1964' },
                  { label: '1963', value: '1963' },
                  { label: '1962', value: '1962' },
                  { label: '1961', value: '1961' },
                  { label: '1960', value: '1960' },
                  { label: '1959', value: '1959' },
                  { label: '1958', value: '1958' },
                  { label: '1957', value: '1957' },
                  { label: '1956', value: '1956' },
                  { label: '1955', value: '1955' },
                  { label: '1954', value: '1954' },
                  { label: '1953', value: '1953' },
                  { label: '1952', value: '1952' },
                  { label: '1951', value: '1951' },
                  { label: '1950', value: '1950' },
                  { label: '1949', value: '1949' },
                  { label: '1948', value: '1948' },
                  { label: '1947', value: '1947' },
                  { label: '1946', value: '1946' },
                  { label: '1945', value: '1945' },
                  { label: '1944', value: '1944' },
                  { label: '1943', value: '1943' },
                  { label: '1942', value: '1942' },
                  { label: '1941', value: '1941' },
                  { label: '1940', value: '1940' },
                  { label: '1939', value: '1939' },
                  { label: '1938', value: '1938' },
                  { label: '1937', value: '1937' },
                  { label: '1936', value: '1936' },
                  { label: '1935', value: '1935' },
                  { label: '1934', value: '1934' },
                  { label: '1933', value: '1933' },
                  { label: '1932', value: '1932' },
                  { label: '1931', value: '1931' },
                  { label: '1930', value: '1930' },
                ]}
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
              onChangeText={text => setNum(text)}
              value={num}
            />
          </View>
          <Text style={signupStyles.forms_text}>2/3</Text>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_button}
            onPress={Submit}
          >
            <Text style={signupStyles.forms_button_label}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}

export default SignupClient2;