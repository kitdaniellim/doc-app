import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Components
import Routes from './routes/Routes.js';

//Backend
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
      isLoggedIn: false,
    }
  }


  // async componentDidMount() {
  //   const user = JSON.parse(
  //     await AsyncStorage.getItem("user")
  //   );

  //   if (user != null) {
  //     this.setState(() => ({
  //       user: user,
  //       isLoggedIn: true,
  //     }))
  //   }
  // }

  render() {
    // console.disableYellowBox = true;
    console.log('Initializing App...')
    return (
      <SafeAreaProvider>
        <Provider store={store}>
          <MenuProvider>
            <Routes />
          </MenuProvider>
        </Provider >
      </SafeAreaProvider>
    );
  }
}



export const db = firebase.firestore();


