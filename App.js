import React from 'react';
import { Alert, AppRegistry, Button, TextInput, View, StyleSheet } from 'react-native';
// import Selection from './components/2_SelectionPage.js';
// import { LinearGradient } from  'expo-linear-gradient';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { Constants } from 'expo';
import Routes from './routes/Routes.js';
import reducer from './reducers';
import {decode, encode} from 'base-64'
import { CommonActions } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
import firebase from "firebase"
require("firebase/firestore");

import { API_KEY, 
         AUTH_DOMAIN, 
         DATABASE_URL,
         PROJECT_ID, 
         STORAGE_BUCKET, 
         MESSAGING_SENDER_ID, 
         APP_ID, 
         MEASUREMENT_ID } 
from 'react-native-dotenv';
import 'firebase/firestore';

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(reducer, middleware);

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID
};


if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }



export default class App extends React.Component {

  Home = ( navigation ) => {
    //console.log("WEW MGA DUES")
    navigation.navigate("Home");
  }

  componentDidMount(){
    //alert("PUTANGNGNGGNGNNG")

  
    
  
    //firebase.initializeApp(firebaseConfig);
        
 
  
  
  // const Firebase = ({navigation}) => {}
  
  }
  
  render() {
    
    //console.log("PUTANG INA NIYO PO")
 
    
    
    return (
      <Provider store = {store}>
           <MenuProvider>
          <Routes />
        </MenuProvider>

      </Provider>  
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

export const db = firebase.firestore();


  
