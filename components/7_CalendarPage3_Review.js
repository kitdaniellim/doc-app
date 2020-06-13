import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';


const CalendarPage3_Review = ({ navigation }) => {

    const Close = () => {
        navigation.goBack()
    }

    const selected = {
        key: 1,
        name: 'Dr. Jesus',
        location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
        time: '7:00 PM - 11:00 PM',

        //if client
        status: 'pending', // <-- change status here
        // status: 'pending' <-- disabled/unclickable yellow button
        // status: 'review' <-- bright green button
        // status: 'reviewed' <-- disabled/unclickable low opacity green button

        //if consultant
        isConfirmed: false,
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
                <View style={calendarStyles.scaffold}>
                    <View style={calendarStyles.date_container}>
                        <View style={calendarStyles.date_details_container}>
                            <Text style={calendarStyles.date_details_header}>DECEMBER{" "} 25{" "} 2020, {" "}Wednesday</Text>
                            <View style={calendarStyles.date_details_scaffold}>
                                <View style={calendarStyles.date_details_text_container}>
                                    <Text style={calendarStyles.date_details_text}>
                                        Appointment with{" "}
                                        {selected.name} {"\n"}
                                        {selected.location} {"\n"}
                                        {selected.time}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ flexDirection: 'row' }}>
                            <View>
                                <Text>You to {selected.name}</Text>
                                <Text>-insert starts here-</Text>
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={Close}
                                style={calendarStyles.header_icon_container}
                            >
                                <Icon style={globalStyles.icon_global} name="times" size={18} />
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>Text Input starts here</Text>
                        </View>
                    </View>


                </View>
            </View>
        </View>
    );
}

export default CalendarPage3_Review;