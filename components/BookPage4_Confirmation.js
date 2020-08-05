import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { calendarStyles, globalStyles } from '../styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

class BookPage4_Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }
    Close = () => {
        this.props.navigation.goBack()
    }
    render() {
        return (
            <React.Fragment>
                <View style={calendarStyles.header_container}>
                    <View style={calendarStyles.header_text_container}>
                        <Text style={calendarStyles.header_text_bold}>CONFIRMATION</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={this.Close}
                        style={calendarStyles.header_icon_container}
                    >
                        <Icon style={globalStyles.icon_global} name="times" size={18} />
                    </TouchableOpacity>
                </View>
                <View style={calendarStyles.scaffold}>
                    <View style={calendarStyles.forms_container}>
                        <View style={calendarStyles.conf_container}>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Date</Text>
                                <Text style={calendarStyles.conf_data}>2020-02-02</Text>
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Location</Text>
                                <Text style={calendarStyles.conf_data}>IT Park, Apas, Cebu City</Text>
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Time</Text>
                                <Text style={calendarStyles.conf_data}>2:00 AM - 4:00 PM</Text>
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Symptoms</Text>
                                <Text style={calendarStyles.conf_data}>Symptom 1</Text>
                                <Text style={calendarStyles.conf_data}>Symptom 2</Text>
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Documents</Text>
                                <Text style={calendarStyles.conf_data}>Document 1</Text>
                                <Text style={calendarStyles.conf_data}>Document 2</Text>
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
                </View>
            </React.Fragment>
        )

    }
}

export default BookPage4_Confirmation;
