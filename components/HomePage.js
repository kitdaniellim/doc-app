import React from 'react';
import { Button, Text, View } from 'react-native';
import { homeStyles } from '../styles/styles';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  const goToAbout = () => {
    Actions.about()
  }
  return (
    <View style={homeStyles.container}>
      <Text style={homeStyles.header}>Welcome! This is the home page</Text>
      <Button
        onPress={goToAbout}
        title="Go to About"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

export default Home;