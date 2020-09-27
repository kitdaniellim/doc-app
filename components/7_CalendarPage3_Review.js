import React, { useState } from 'react';
import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { calendarStyles, globalStyles } from '../styles/styles';


const CalendarPage3_Review = ({ navigation }) => {
    const [review, setReview] = useState('');
    const [starCount, setStar] = useState(0);

    const Close = () => {
        navigation.goBack()
    }

    const Submit = () => {
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
            <KeyboardAvoidingView
                behavior={Platform.OS == "ios" ? "padding" : "height"}
                style={calendarStyles.scaffold}
            >
                <View style={calendarStyles.date_container}>
                    <View style={calendarStyles.date_details_container}>
                        <View style={calendarStyles.date_header_container}>
                            <Text style={calendarStyles.date_details_header}>DECEMBER{" "} 25{" "} 2020, {" "}Wednesday</Text>
                        </View>
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
                <View style={calendarStyles.review_container}>
                    <View style={calendarStyles.review_details_container}>
                        <View>
                            <Text style={calendarStyles.review_details_header}>You to {selected.name}</Text>
                            <StarRating
                                disabled={false}
                                maxStars={5}
                                rating={starCount}
                                selectedStar={(rating) => setStar(rating)}
                                fullStarColor='#FDBB3B'
                                starSize={13}
                                starStyle={{}}
                            />
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={Submit}
                            style={calendarStyles.review_details_submit_button}
                        >
                            <Text style={calendarStyles.date_details_button_label}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={calendarStyles.review_textinput_container}>
                        <TextInput
                            placeholder="Write your review here!"
                            placeholderTextColor="#8B8787"
                            multiline
                            style={calendarStyles.review_textinput}
                            onChangeText={text => setReview(text)}
                            value={review}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </View>
    );
}

export default CalendarPage3_Review;