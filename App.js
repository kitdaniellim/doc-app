import React, { Component } from 'react';
import { Alert, Button, TextInput, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';
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
    
    this.state = {
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
      <View style={styles.container}>
        <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
      </View>
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
