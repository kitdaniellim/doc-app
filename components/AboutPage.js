import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { aboutStyles } from '../styles/styles';

const About = () => {
    const goToHome = () => {
        Actions.home()
    }
    return (
        <View style={aboutStyles.container}>
            <TouchableOpacity onPress={goToHome}>
                <Text style={aboutStyles.header}>This is the about page!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default About;