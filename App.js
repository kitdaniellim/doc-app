import React from 'react';
import { StyleSheet } from 'react-native';
// import Selection from './components/2_SelectionPage.js';
// import { LinearGradient } from  'expo-linear-gradient';
import { Provider } from 'react-redux';

import Routes from './routes/Routes.js';

import { decode, encode } from 'base-64'
import { MenuProvider } from 'react-native-popup-menu';
import firebase from "firebase"
import configureStore from './store/configureStore';
import 'firebase/firestore';
import AsyncStorage from "@react-native-community/async-storage";

const store = configureStore();

if (!global.btoa) { global.btoa = encode }

if (!global.atob) { global.atob = decode }



export default class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: {},
    };
  }

  Home = (navigation) => {
    //console.log("WEW MGA DUES")
    navigation.navigate("Home");
  }

  async componentDidMount() {
    //alert("PUTANGNGNGGNGNNG")
    //firebase.initializeApp(firebaseConfig);
    // const Firebase = ({navigation}) => {}

    // const user = JSON.parse(
    //     await AsyncStorage.getItem("user")
    // );

    // this.setState(() => ({ user }));

    // console.log(user);

    // console.log('==================user type=========================');
    // console.log(user.userType);
    // console.log('===========================================');

    // console.log('==================state user type=========================');
    // console.log(this.state.user.userType);
    // console.log('===========================================');
  }

  async getUserType(){
    const user = JSON.parse(
      await AsyncStorage.getItem("user")
    );
    console.log(user.userType);
    return user.userType;
  }

  render() {
    return (
      <Provider store={store}>
        <MenuProvider>
          <Routes/>
          {/* <Routes userType = {this.getUserType()}/> */}
        </MenuProvider>
      </Provider>
    );
  }
}

export const db = firebase.firestore();



