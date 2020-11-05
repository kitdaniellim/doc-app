
/* This configuration will connect the app to the Firestore using the credentials provided by Firebase. 
/* Programmer: Eldrin Jake Augusto 
/* Date: May 2020 */
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
import { Alert } from "react-native";


/* Firebase credentials */
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

export const db = firebase.firestore();
export const storage = firebase.storage();

    let Firebase = firebase.initializeApp(firebaseConfig);
    
    Firebase.auth().onAuthStateChanged((user) => {
        if (user) {  
          console.log("Navigating Home");
        }else{
          console.log("Error!");
        }
    })
  
// const Firebase = ({navigation}) => {}

export default Firebase;
