import React, { useState, Component } from 'react';
import { Text, TextInput, Button, ScrollView, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateFullName, updateUserSpecialty, updateUserLIC, updateUserSubSpecialty } from '../actions/user';

class Dynamic_Input extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
      count: 0,
      textInput: [],
    }
  }

  addField = () => {
    let textInput = this.state.textInput;
    let key = this.state.key;
    let count = this.state.key;

    key += 1;
    count += 1;
    textInput.push(
      <View key={key.toString()} style={signupStyles.forms_textinput_container}>
        <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
        <TextInput
          placeholder="Sub-specialty"
          placeholderTextColor="#8B8787"
          style={signupStyles.forms_textinput}
        />
      </View>
    );

    this.setState({
      key: key,
      count: count,
      textInput
    });
  }

  removeField = () => {
    let textInput = this.state.textInput;
    let count = this.state.count;

    if (count !== 0) {
      textInput.pop();
      count -= 1;
    }
    this.setState({
      count: count,
      textInput
    });
  }

  render() {
    return (
      <View>
        <View style={signupStyles.forms_dynamicinput_margin, { height: 100 }}>
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            {this.state.textInput.map((value) => {
              return value
            })}
          </ScrollView>
        </View>
        <View style={signupStyles.forms_add_textinput_container}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.addField()}
          >
            <Icon style={globalStyles.icon_global} name="plus" size={14} />
            <Text style={signupStyles.forms_add_textinput_text} > ADD SUB-SPECIALTY </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.removeField()}
          >
            <Icon style={globalStyles.icon_global} name="times" size={14} />
            <Text style={signupStyles.forms_add_textinput_text} > REMOVE SUB-SPECIALTY </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}


class SignupConsultant2 extends Component  {
    
  Next = () => {
    // let text = this.state.text
    const navigation = this.props.navigation;
    // if (text === '') {
    //   this.toggleModal(true)
    // } else {
      navigation.navigate('SignupConsultant3_1');
    // }
  }
  // const [fname, setName] = useState('');
  // const [specialty, setSpec] = useState('');
  // const [lic, setLic] = useState('');
  // const [message, setMessage] = useState('Seems like you missed one. Please fill in all the required fields before proceeding.');
  // const [isModalVisible, toggleModal] = useState(false);

  // function Close() {
  //   toggleModal(false)
  // }

  // const Next = () => {
  //   if ((fname !== '' && specialty !== '' && lic !== '')) {
  //     navigation.navigate('SignupConsultant3_1');
  //   } else {
  //     toggleModal(true)
  //   }
  // }
  render(){
    console.log("START SIGNUPPAGE2_CONSULTANT NI");
    console.log(this.props.user.fullName);
    console.log(this.props.user.userSpecialty);
    console.log(this.props.user.userLIC);
    console.log("END SA SIGNUPPAGE2_CONSULTANT");
    return (
      <View style={signupStyles.container}>
        <LinearGradient
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{ x: 0, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={globalStyles.gradient}
        >
          {/* <Modal 
            isVisible={isModalVisible} 
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
                  onPress={Close}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal> */}
          <View style={signupStyles.forms_container}>
            <Text style={signupStyles.forms_label}>CONSULTANT SIGN UP</Text>
            <View style={signupStyles.forms_label_small_container}>
              <Text style={signupStyles.forms_label_small}>Professional Details:</Text>
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
              <TextInput
                placeholder="Full Name"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                // onChangeText={text => setName(text)}
                // value={fname}
                value = {this.props.user.fullName}
                onChangeText={fullName => this.props.updateFullName(fullName)}
              />
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
              <TextInput
                placeholder="Specialty"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                // onChangeText={text => setSpec(text)}
                // value={specialty}
                value = {this.props.user.userSpecialty}
                onChangeText={userSpecialty => this.props.updateUserSpecialty(userSpecialty)}
              />
            </View>
            <View style={signupStyles.forms_textinput_container}>
              <Icon style={globalStyles.icon_global} name="id-card" size={15} />
              <TextInput
                placeholder="LIC Number"
                placeholderTextColor="#8B8787"
                style={signupStyles.forms_textinput}
                // onChangeText={text => setLic(text)}
                // value={lic}
                value = {this.props.user.userLIC}
                onChangeText={ userLIC=> this.props.updateUserLIC(userLIC)}
              />
            </View>
            <Dynamic_Input />
            <TouchableOpacity
              activeOpacity={0.6}
              style={signupStyles.forms_paybutton}
              onPress={() => { }}
            >
              <Text style={signupStyles.forms_paybutton_label}>Pay Through PayPal</Text>
            </TouchableOpacity>
            <Text style={signupStyles.forms_text}>2/4</Text>
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
  
}


// const SignupConsultant2 = ({ navigation }) => {
//   const [fname, setName] = useState('');
//   const [specialty, setSpec] = useState('');
//   const [lic, setLic] = useState('');
//   const [message, setMessage] = useState('Seems like you missed one. Please fill in all the required fields before proceeding.');
//   const [isModalVisible, toggleModal] = useState(false);

//   function Close() {
//     toggleModal(false)
//   }

//   const Next = () => {
//     if ((fname !== '' && specialty !== '' && lic !== '')) {
//       navigation.navigate('SignupConsultant3_1');
//     } else {
//       toggleModal(true)
//     }
//   }

//   return (
//     <View style={signupStyles.container}>
//       <LinearGradient
//         colors={['rgba(243,243,243,0.4)', 'transparent']}
//         start={{ x: 0, y: 1 }}
//         end={{ x: 0, y: 0 }}
//         style={globalStyles.gradient}
//       >
//         {/* <Modal 
//           isVisible={isModalVisible} 
//           animationIn='bounceInDown'
//           animationOut='bounceOutUp'
//           animationInTiming={1100}
//           animationOutTiming={900}
//         >
//           <View style={globalStyles.modal_container}>
//             <View style={globalStyles.modal_container_top}>
//               <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
//             </View>
//             <View style={globalStyles.modal_container_bottom}>
//               <Text style={globalStyles.modal_notif_bold}>Oops!</Text>
//               <Text style={globalStyles.modal_notif}>Seems like you missed one. Please fill in all required fields before proceeding.</Text>
//               <TouchableOpacity
//                 activeOpacity={0.6}
//                 onPress={Close}
//                 style={globalStyles.modal_button_container}
//               >
//                 <Text style={globalStyles.modal_button_label}>Close</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </Modal> */}
//         <View style={signupStyles.forms_container}>
//           <Text style={signupStyles.forms_label}>CONSULTANT SIGN UP</Text>
//           <View style={signupStyles.forms_label_small_container}>
//             <Text style={signupStyles.forms_label_small}>Professional Details:</Text>
//           </View>
//           <View style={signupStyles.forms_textinput_container}>
//             <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
//             <TextInput
//               placeholder="Full Name"
//               placeholderTextColor="#8B8787"
//               style={signupStyles.forms_textinput}
//               // onChangeText={text => setName(text)}
//               // value={fname}
//               value = {this.props.user.fullName}
//               onChangeText={fullName => this.props.updateFullName(fullName)}
//             />
//           </View>
//           <View style={signupStyles.forms_textinput_container}>
//             <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
//             <TextInput
//               placeholder="Specialty"
//               placeholderTextColor="#8B8787"
//               style={signupStyles.forms_textinput}
//               // onChangeText={text => setSpec(text)}
//               // value={specialty}
//               value = {this.props.user.userSpecialty}
//               onChangeText={userSpecialty => this.props.updateUserSpecialty(userSpecialty)}
//             />
//           </View>
//           <View style={signupStyles.forms_textinput_container}>
//             <Icon style={globalStyles.icon_global} name="id-card" size={15} />
//             <TextInput
//               placeholder="LIC Number"
//               placeholderTextColor="#8B8787"
//               style={signupStyles.forms_textinput}
//               // onChangeText={text => setLic(text)}
//               // value={lic}
//               value = {this.props.user.userLIC}
//               onChangeText={ userLIC=> this.props.updateUserLIC(userLIC)}
//             />
//           </View>
//           <Dynamic_Input />
//           <TouchableOpacity
//             activeOpacity={0.6}
//             style={signupStyles.forms_paybutton}
//             onPress={() => { }}
//           >
//             <Text style={signupStyles.forms_paybutton_label}>Pay Through PayPal</Text>
//           </TouchableOpacity>
//           <Text style={signupStyles.forms_text}>2/4</Text>
//           <TouchableOpacity
//             activeOpacity={0.6}
//             style={signupStyles.forms_button}
//             onPress={Next}
//           >
//             <Text style={signupStyles.forms_button_label}>NEXT</Text>
//           </TouchableOpacity>
//         </View>
//       </LinearGradient>
//     </View>
//   );
// }


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ updateFullName, updateUserSpecialty, updateUserLIC, updateUserSubSpecialty }, dispatch )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupConsultant2)

