import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { BackgroundCarousel } from './custom/BackgroundCarousel'
import { homeStyles } from '../styles/styles';

const Tutorial = ({ navigation }) => {

    const images = [
        {
            key: 1,
            img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample1.png?alt=media&token=b84c2e8e-c810-41ba-99aa-74655ee4cac6',
        },
        {
            key: 2,
            img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample1.png?alt=media&token=b84c2e8e-c810-41ba-99aa-74655ee4cac6',
        },
        {
            key: 3,
            img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample1.png?alt=media&token=b84c2e8e-c810-41ba-99aa-74655ee4cac6',
        },
        {
            key: 4,
            img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample1.png?alt=media&token=b84c2e8e-c810-41ba-99aa-74655ee4cac6',
        },
    ];

    const Skip = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={homeStyles.container}>
            <View style={{ flex: 1, marginTop: 90, marginBottom: 40 }}>
                <BackgroundCarousel images={images} />
            </View>
            <TouchableOpacity
                activeOpacity={0.6}
                onPress={Skip}
                style={{height: 40, width: 110, marginBottom: 38, borderRadius: 15, backgroundColor: '#19BAB9', justifyContent: 'center'}}
            >
                <Text style={{textAlign: 'center', color: '#fff'}}>Got it!</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Tutorial;