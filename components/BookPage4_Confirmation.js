import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { calendarStyles, globalStyles } from '../styles/styles';

class BookPage4_Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <View style={calendarStyles.header_container}>
                    <View style={calendarStyles.header_text_container}>
                        <Text style={calendarStyles.header_text_bold}>CONFIRMATION</Text>
                    </View>
                </View>
                <View style={calendarStyles.scaffold}>
                    <View style={calendarStyles.forms_container}>
                        <View>
                            <Text style={calendarStyles.conf_label}>Date</Text>
                            <Text>2020-02-02</Text>
                        </View>
                        <View>
                            <Text style={calendarStyles.conf_label}>Location</Text>
                            <Text>IT Park, Apas, Cebu City</Text>
                        </View>
                        <View>
                            <Text style={calendarStyles.conf_label}>Time</Text>
                            <Text>2:00 AM - 4:00 PM</Text>
                        </View>
                        <View>
                            <Text style={calendarStyles.conf_label}>Symptoms</Text>
                            <Text>Symptom 1</Text>
                            <Text>Symptom 2</Text>
                        </View>
                        <View>
                            <Text style={calendarStyles.conf_label}>Documents</Text>
                            <Text>Document 1</Text>
                            <Text>Document 2</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => { }}
                            style={calendarStyles.forms_button_submit}
                        >
                            <Text style={calendarStyles.forms_button_submit_label}>CONFIRM & SUBMIT</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </React.Fragment>
        )

    }
}

export default BookPage4_Confirmation;
