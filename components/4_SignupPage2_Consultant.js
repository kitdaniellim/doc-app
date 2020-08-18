import React, { useState, Component } from 'react';
import { Text, TextInput, KeyboardAvoidingView, ScrollView, View, FlatList, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { signupStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
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
          placeholder="Sub-profession"
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
        <View style={{ height: 95 }}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            showsVerticalScrollIndicator={false}
          >
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
            <Icon style={globalStyles.icon_global} name="plus" size={16} />
            <Text style={signupStyles.forms_add_textinput_text}>ADD{"\n"}SUB-PROFESSION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={signupStyles.forms_add_textinput_button_container}
            onPress={() => this.removeField()}
          >
            <Icon style={globalStyles.icon_global} name="times" size={16} />
            <Text style={signupStyles.forms_add_textinput_text}>REMOVE{"\n"}SUB-PROFESSION</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const SignupConsultant2 = ({ navigation }) => {
  const [fname, setName] = useState('Troy Austin Go');
  const [profession, setProf] = useState('Doctor');
  const [lic, setLic] = useState('111010-101');
  const [isModalVisible, toggleModal] = useState(false);

  function Close() {
    toggleModal(false)
  }

  const Next = () => {
    if ((fname !== '' && profession !== '' && lic !== '')) {
      navigation.navigate('SignupConsultant3_1');
    } else {
      toggleModal(true)
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={signupStyles.container}
    >
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
        </Modal>
        <View style={signupStyles.forms_container_2}>
          <Text style={signupStyles.forms_label}>CONSULTANT SIGN UP</Text>
          <View style={signupStyles.forms_label_small_container_2}>
            <Text style={signupStyles.forms_label_small}>Professional Details:</Text>
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
          <View style={signupStyles.forms_textinput_container}>
            <Icon style={globalStyles.icon_global} name="briefcase" size={18} />
            <TextInput
              placeholder="Profession"
              placeholderTextColor="#8B8787"
              style={signupStyles.forms_textinput}
              onChangeText={text => setProf(text)}
              value={profession}
            />
          </View>
          <View style={signupStyles.forms_textinput_container}>
            <Icon style={globalStyles.icon_global} name="id-card" size={15} />
            <TextInput
              placeholder="PRC ID Number/Certification ID Number"
              placeholderTextColor="#8B8787"
              style={signupStyles.forms_textinput}
              onChangeText={text => setLic(text)}
              value={lic}
            />
          </View>
          <Dynamic_Input />
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
    </KeyboardAvoidingView>
  );
}


export default SignupConsultant2;