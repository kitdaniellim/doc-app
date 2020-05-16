import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { selectionStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from  'expo-linear-gradient';



const Selection = ( {navigation} ) => {
  const LoginClient = () => {
    navigation.navigate('LoginClient');
  }
  
  const LoginConsultant = () => {
    navigation.navigate('LoginConsultant');
  }

  return (
  
  <View style={selectionStyles.container}>
      <TouchableOpacity 
        activeOpacity={0.6}
        style={selectionStyles.left_scaffold} 
        onPress={LoginClient}>
        <LinearGradient 
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{x : 0, y : 1}}
          end={{x : 0, y : 0}}
          style={globalStyles.gradient}
        >
          <View style={selectionStyles.left_icon_container}>
            <Text style={selectionStyles.left_icon_text}>CLIENT</Text>
            <Icon style={globalStyles.icon_client} name="wheelchair-alt" size={60} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <TouchableOpacity 
        activeOpacity={0.6}
        style={selectionStyles.right_scaffold} 
        onPress={LoginConsultant}>
        <LinearGradient 
          colors={['rgba(243,243,243,0.4)', 'transparent']}
          start={{x : 0, y : 1}}
          end={{x : 0, y : 0}}
          style={globalStyles.gradient}
        >
          <View style={selectionStyles.right_icon_container}>
            <Text style={selectionStyles.right_icon_text}>CONSULTANT</Text>
            <Icon style={globalStyles.icon_client} name="user-md" size={60} />
          </View>
        </LinearGradient>
      </TouchableOpacity>
  </View> 
  );
}

export default Selection;