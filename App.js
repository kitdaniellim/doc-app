import React, { Component } from 'react';
import { Alert, Text, AppRegistry, Button, TextInput, View, StyleSheet } from 'react-native';

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
import Icon from 'react-native-vector-icons/FontAwesome';
// import MenuButton from 'react-native-menu-button'
import { MenuProvider } from 'react-native-popup-menu';
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

if (!firebase.apps.length) {
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
    auth.createUserWithEmailAndPassword(username, password);
  }

  render() {
    return (
      <MenuProvider>
        <Routes />
      </MenuProvider>

      // <View style={{flex: 1, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center'}}>
      //   <Icon color="#19BAB9" name="ellipsis-v" size={170}/>
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
