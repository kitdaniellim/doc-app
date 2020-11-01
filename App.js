import React from 'react';
import { StyleSheet } from 'react-native';
// import Selection from './components/2_SelectionPage.js';
// import { LinearGradient } from  'expo-linear-gradient';
import { Provider } from 'react-redux';
import Routes from './routes/Routes.js';
import {decode, encode} from 'base-64'
import { MenuProvider } from 'react-native-popup-menu';
import firebase from "firebase"
import configureStore from './store/configureStore';
import 'firebase/firestore';

const store = configureStore();

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


  
