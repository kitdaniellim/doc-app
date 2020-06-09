import React, { Component } from 'react';
import { Alert, Text, AppRegistry, Button, TextInput, View, StyleSheet } from 'react-native';
// import Selection from './components/2_SelectionPage.js';
// import { LinearGradient } from  'expo-linear-gradient';

//temp
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/AntDesign';
import Icon3 from 'react-native-vector-icons/EvilIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Octicons';
import Icon6 from 'react-native-vector-icons/Feather';
import { globalStyles } from './styles/styles';

import { Constants } from 'expo';
import Routes from './routes/Routes.js';
import firebase from "firebase"
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyAc9jbCdsAr25GlhpcLMWap-XBJy60Z2uE",
  authDomain: "appointmentapp-d867d.firebaseapp.com",
  databaseURL: "https://appointmentapp-d867d.firebaseio.com",
  projectId: "appointmentapp-d867d",
  storageBucket: "appointmentapp-d867d.appspot.com",
  messagingSenderId: "346336386740",
  appId: "1:346336386740:web:7f7788d6882e9b8c8d41e1",
  measurementId: "G-32FB2FHN7B"
};
  
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}


// Make Auth and Firestore References
//const auth = firebase.auth();
const auth = firebase.auth();
const db = firebase.firestore();

//Update Firestore Settings
//db.settings( {timestampsInSnapshots: true} )

export default class App extends Component {
  constructor(props) {
    super(props);
  
     this.state = {  //DONT REMOVE -Eldrin
      username: '',
      password: '',
    }; 

  }
  
  onLogin() {
    const { username, password } = this.state;

    Alert.alert('Credentials', `${username} + ${password}`);
    auth.createUserWithEmailAndPassword(username,password);
  }

  render() {
    return (
     <Routes/>
      // <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'space-around', alignItems: 'center', marginVertical: 50}}>
      //   {/* FontAwesome */}
      //   <View style={{flexDirection: 'row', backgroundColor: '#19BAB9', padding: 15}}>
      //     <Icon1 style={globalStyles.icon_global} name="home" size={20} />
      //     <Icon1 style={globalStyles.icon_global} name="calendar" size={20} />
      //     <Icon1 style={globalStyles.icon_global} name="search" size={20} />
      //     <Icon1 style={globalStyles.icon_global} name="pencil" size={20} />
      //     <Icon1 style={globalStyles.icon_global} name="user" size={20} />
      //   </View>
        
      //   {/* AntDesign */}
      //   <View style={{flexDirection: 'row', backgroundColor: '#19BAB9', padding: 15}}>
      //     <Icon2 style={globalStyles.icon_global} name="home" size={18} />
      //     <Icon2 style={globalStyles.icon_global} name="calendar" size={18} />
      //     <Icon2 style={globalStyles.icon_global} name="search1" size={18} />
      //     <Icon2 style={globalStyles.icon_global} name="edit" size={18} />
      //     <Icon2 style={globalStyles.icon_global} name="user" size={18} />
      //   </View>

      //   {/* Evilicons */}
      //   {/* <View style={{flexDirection: 'row', backgroundColor: '#19BAB9', padding: 15}}>
      //     <Icon3 style={globalStyles.icon_global} name="home" size={18} />
      //     <Icon3 style={globalStyles.icon_global} name="calendar" size={25} />
      //     <Icon3 style={globalStyles.icon_global} name="search" size={25} />
      //     <Icon3 style={globalStyles.icon_global} name="pencil" size={25} />
      //     <Icon3 style={globalStyles.icon_global} name="user" size={25} />
      //   </View> */}

      //   {/* MaterialCommunityIcons */}
      //   <View style={{flexDirection: 'row', backgroundColor: '#19BAB9', padding: 15}}>
      //     <Icon4 style={globalStyles.icon_global} name="home" size={18} />
      //     <Icon4 style={globalStyles.icon_global} name="calendar" size={18} />
      //     <Icon4 style={globalStyles.icon_global} name="magnify" size={18} />
      //     <Icon4 style={globalStyles.icon_global} name="pencil" size={18} />
      //     <Icon4 style={globalStyles.icon_global} name="account" size={18} />
      //   </View>

      //   {/* Octicons */}
      //   <View style={{flexDirection: 'row', backgroundColor: '#19BAB9', padding: 15}}>
      //     <Icon5 style={globalStyles.icon_global} name="home" size={20} />
      //     <Icon5 style={globalStyles.icon_global} name="calendar" size={20} />
      //     <Icon5 style={globalStyles.icon_global} name="search" size={20} />
      //     <Icon5 style={globalStyles.icon_global} name="pencil" size={20} />
      //     <Icon5 style={globalStyles.icon_global} name="person" size={20} />
      //   </View>

      //   {/* Feather */}
      //   <View style={{flexDirection: 'row', backgroundColor: '#19BAB9', padding: 15}}>
      //     <Icon6 style={globalStyles.icon_global} name="home" size={18} />
      //     <Icon6 style={globalStyles.icon_global} name="calendar" size={18} />
      //     <Icon6 style={globalStyles.icon_global} name="search" size={18} />
      //     <Icon6 style={globalStyles.icon_global} name="edit" size={18} />
      //     <Icon6 style={globalStyles.icon_global} name="user" size={18} />
      //   </View>

      // </View>



    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
