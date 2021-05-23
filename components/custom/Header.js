import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Header = () => {
    return(
        <View style={styles.header}>
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
    header: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: 45,
    },
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