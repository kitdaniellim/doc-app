import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            <Text style={selectionStyles.left_icon_text}>
              CLIENT
            </Text>
            <Icon style={globalStyles.icon_client} name="wheelchair-alt" size={80} />
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
            <Text style={selectionStyles.right_icon_text}>
              CONSULTANT
            </Text>
            <Icon style={globalStyles.icon_client} name="user-md" size={80} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

export default Selection;