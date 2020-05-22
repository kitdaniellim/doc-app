import React, { Component } from 'react';
import { Text, TextInput, Button, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';

class Dynamic_Input extends Component {
  constructor(props){
    super(props);
    this.state = {
      textInput : [],
    }
  }

  //function to add TextInput dynamically
  addField = () => {
    let textInput = this.state.textInput;
    textInput.push(
    <View style={signupStyles.forms_textinput_container}>
      <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
      <TextInput 
        placeholder="Sub-specialty" 
        placeholderTextColor = "#8B8787"
        style={signupStyles.forms_textinput}
      />
      <TouchableOpacity
        onPress={() => this.removeField()}
      >
        <Icon style={globalStyles.icon_global} name="times" size={18} />
      </TouchableOpacity>
    </View>
    );
    this.setState({ textInput });
  }

  //function to remove TextInput dynamically
  removeField = () => {
    let textInput = this.state.textInput;
    textInput.pop();
    this.setState({ textInput });
  }

  render(){
    return(
      <View>
        {this.state.textInput.map((value) => {
          return value
        })}
        <TouchableOpacity
          activeOpacity={0.6}
          style={signupStyles.forms_add_textinput_button_container}
          onPress={() => this.addField()}
        >
          <Text style={signupStyles.forms_add_textinput_text} >ADD SUB-SPECIALTY{" "}</Text>
          <Icon style={globalStyles.icon_global} name="plus" size={18} />
        </TouchableOpacity>
        </View>
    )
  }
}

const SignupConsultant2 = ( {navigation} ) => {
  const Next = () => {
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
      <Text style={signupStyles.forms_label}> CONSULTANT SIGN UP </Text>
      <Text style={signupStyles.forms_label_small}> Professional Details: </Text>
      
      {/* top line */}
      <View style={signupStyles.forms_textinput_container}>
        <Icon style={globalStyles.icon_global} name="user-circle" size={18} />
        <TextInput 
          placeholder="Full Name" 
          placeholderTextColor = "#8B8787"
          style={signupStyles.forms_textinput}
        />
      </View>
      
      <View style={signupStyles.forms_textinput_container}>
        <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
        <TextInput 
          placeholder="Specialty" 
          placeholderTextColor = "#8B8787"
          style={signupStyles.forms_textinput}
        />
      </View>
      <View style={signupStyles.forms_textinput_container}>
        <Icon style={globalStyles.icon_global} name="id-card" size={15} />
        <TextInput 
          placeholder="LIC Number" 
          placeholderTextColor = "#8B8787"
          style={signupStyles.forms_textinput}
        />
      </View>
      <Dynamic_Input />
      {/* bottom line */}
      <Text style={signupStyles.forms_text}>2/4</Text>
      <TouchableOpacity
        activeOpacity={0.6}
        style={signupStyles.forms_button}
        onPress={Next}
      >
        <Text style={signupStyles.forms_button_label}>NEXT</Text>
      </TouchableOpacity> 
    </View>
    </LinearGradient>
  </View>
  );
}


export default SignupConsultant2;