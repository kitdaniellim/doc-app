import React, { Component } from 'react';
import { Text, TextInput, Button, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';

class Dynamic_Input extends Component {
  constructor(){
    super();
    this.state = {
      key: 0, //unique key prop
      count: 0, //item count
      textInput : [],
    }
  }

  //function to add TextInput dynamically
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
        placeholderTextColor = "#8B8787"
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

  //function to remove TextInput dynamically
  removeField = () => {
    let textInput = this.state.textInput;
    let count = this.state.count;

    if(count !== 0){
      textInput.pop();
      count -= 1;
    }
    this.setState({ 
      count: count,
      textInput 
    });
  }

  render(){
    return(
      <View>
        {this.state.textInput.map((value) => {
          return value
        })}

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