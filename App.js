import React from 'react';
import { Provider } from 'react-redux';

import Routes from './routes/Routes.js';

import { decode, encode } from 'base-64'
import { MenuProvider } from 'react-native-popup-menu';
import firebase from "firebase"
import configureStore from './store/configureStore';
import 'firebase/firestore';

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

  }

  render() {
    console.disableYellowBox = true;
    return (
      <Provider store={store}>
        <MenuProvider>
          <Routes/>
        </MenuProvider>
      </Provider>
    );
  }
}

export const db = firebase.firestore();



