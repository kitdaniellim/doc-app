import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { calendarStyles, globalStyles } from '../styles/styles';
import Icon from "react-native-vector-icons/FontAwesome";
import moment from 'moment';

class BookPage4_Confirmation extends React.Component {
    constructor(props) {
        super(props);
    }
    Close = () => {
        this.props.navigation.goBack()
    }
    render() {
        if (this.props.currentStep !== 4) {
            return null
        } else {
            return (
                <React.Fragment>
                    <View style={calendarStyles.header_container}>
                        <View style={calendarStyles.header_text_container}>
                            <Text style={calendarStyles.header_text_bold}>CONFIRMATION</Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={this.props._prev}
                            style={calendarStyles.header_icon_container}
                        >
                            <Icon style={globalStyles.icon_global} name="times" size={18} />
                        </TouchableOpacity>
                    </View>
                    <View style={calendarStyles.scaffold}>
                        <View style={calendarStyles.forms_container}>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Date</Text>
                                <Text style={calendarStyles.conf_data}>{this.props.date}</Text>
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Location</Text>
                                <Text style={calendarStyles.conf_data}>{this.props.location}</Text>
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Time</Text>
                                <Text style={calendarStyles.conf_data}>{moment(this.props.time_start, "HH:mm").format("h:mm A")}-{moment(this.props.time_end, "HH:mm").format("h:mm A")}</Text>
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Symptoms</Text>
                                {
                                    this.props.symptoms.length > 0 ? this.props.symptoms.map((item, key) => <Text key={key} style={calendarStyles.conf_data}>{item}</Text>) : <Text style={calendarStyles.conf_data}>None</Text>
                                }
                            </View>
                            <View style={calendarStyles.conf_item}>
                                <Text style={calendarStyles.conf_label}>Documents</Text>
                                {
                                    this.props.files.length > 0 ? this.props.files.map((item, key) => <Text key={key} style={calendarStyles.conf_data}>{item.name}</Text>) : <Text style={calendarStyles.conf_data}>None</Text>
                                }
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => { this.props.onFormSubmit() }}
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
}

export default BookPage4_Confirmation;
