import React, { useEffect } from 'react';
import { View } from 'react-native';
import { loginStyles, globalStyles } from '../styles/styles';
import { LinearGradient } from 'expo-linear-gradient';
import ImageLoader from './custom/ImageLoader.js';
import AsyncStorage from '@react-native-community/async-storage';

const Landing = (props) => {
    useEffect(() => {
        setTimeout(async () => {
            // if(props.route.params.path === undefined) {
                // props.navigation.navigate((props.route.params.path === 'auth') ? 'Login' : 'Home');
                
            // }
            props.navigation.navigate('Login');
        }, 2500)
    })

    return (
        <View style={loginStyles.container}>
            <LinearGradient
                colors={['rgba(239,239,239,0.5)', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={globalStyles.gradient}
            >
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <ImageLoader
                        source={require("../assets/app_logo.png")}
                        style={{ height: 110, width: 110 }}
                    />
                    <ImageLoader
                        source={require("../assets/app_name_1.png")}
                        style={{ height: 50, width: 120, }}
                    />
                </View>
            </LinearGradient>
        </View>
    );
}

export default Landing;