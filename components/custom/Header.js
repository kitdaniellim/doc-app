import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Header = () => {
    return(
        <View style={{flexDirection: 'row', marginLeft: -5}}>
            <Image
                source={require("../../assets/app_logo.png")}
                style={styles.image_2}
            />
            <Image
                source={require("../../assets/app_name_1.png")}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 70
    },
    image_2: {
        height: 40,
        width: 30,
        marginRight: 8,
    },
});

export default Header;