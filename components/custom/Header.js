import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

const Header = () => {
    return(
        <View>
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
});

export default Header;