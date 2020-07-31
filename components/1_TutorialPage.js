import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BackgroundCarousel } from './custom/BackgroundCarousel'
import { homeStyles } from '../styles/styles';

const Tutorial = ({ navigation }) => {

    const images = [
        {
            key: 1,
            img: require("../assets/tutorial_home.jpg"),
        },
        {
            key: 2,
            img: require("../assets/tutorial_schedule.jpg"),
        },
        {
            key: 3,
            img: require("../assets/tutorial_search.jpg"),
        },
        {
            key: 4,
            img: require("../assets/tutorial_profile.jpg"),
        },
    ];

    const Skip = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={homeStyles.container}>
            <View style={{ flex: 1, marginTop: 40 }}>
                <BackgroundCarousel images={images} />
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={Skip}
                style={{height: 40, width: 110, marginTop: 10, marginBottom: 18, borderRadius: 15, backgroundColor: '#19BAB9', justifyContent: 'center'}}
            >
                <Text style={{textAlign: 'center', color: '#fff'}}>Got it!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Tutorial;