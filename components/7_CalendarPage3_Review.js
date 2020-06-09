import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';


const CalendarPage3_Review = ({ navigation }) => {

    const Close = () => {
        navigation.goBack()
    }

    return (
        <View style={calendarStyles.container}>
            <View style={calendarStyles.header_container}>
                <View style={calendarStyles.header_text_container}>
                    <Text style={calendarStyles.header_text_bold}>WRITE A REVIEW</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={Close}
                    style={calendarStyles.header_icon_container}
                >
                    <Icon style={globalStyles.icon_global} name="times" size={18} />
                </TouchableOpacity>
            </View>
            <View style={calendarStyles.scaffold}>
                <Text>Write Review</Text>
            </View>
        </View>
    );
}

export default CalendarPage3_Review;