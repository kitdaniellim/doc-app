import React from 'react';
import { AppRegistry } from "react-native";
// import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
// import Selection from './components/2_SelectionPage.js';
// import { LinearGradient } from  'expo-linear-gradient';
import Routes from './routes/Routes.js';

const App = () => {

  return ( 
    <Routes /> 
  );
  
}

export default App;
AppRegistry.registerComponent("App", () => App);


