import React from 'react';
import {View, Image, TouchableOpacity } from 'react-native';
import { selectionStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';

const Selection = ({ navigation }) => {
  const SignUpClient = () => {
    navigation.navigate('SignupClient1');
  }
  const SignUpConsultant = () => {
    navigation.navigate('SignupConsultant1');
  }

  return (
    <View style={selectionStyles.container}>
      <TouchableOpacity
        activeOpacity={0.6}
        style={selectionStyles.left_scaffold}
        onPress={SignUpClient}>
        <LinearGradient
          colors={['rgba(239,239,239,0.5)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={globalStyles.gradient}
        >
          <View style={selectionStyles.left_icon_container}>
            <Image 
              style={{ width: 140, height: 140 }}
              source={require('../assets/client.png')} 
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.6}
        style={selectionStyles.right_scaffold}
        onPress={SignUpConsultant}>
        <LinearGradient
          colors={['rgba(239,239,239,0.5)', 'transparent']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={globalStyles.gradient}
        >
          <View style={selectionStyles.right_icon_container}>
            <Image 
              style={{ width: 140, height: 140 }}
              source={require('../assets/consultant.png')} 
            />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default Selection;
