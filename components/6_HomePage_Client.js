import React from 'react';
import { Button, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeStyles, navbarStyles } from '../styles/styles';



const Home = () => {

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Text>Hello World</Text>
      </View>
      <View style={{flex: 1, backgroundColor: 'blue'}}>
        <Text>Goodbye World</Text>
      </View>

    </View>
  );
}

export default Home;