import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { calendarStyles } from '../../styles/styles';
import { withNavigation } from 'react-navigation';

//accepts time_start, time_end and booked_list as parameters and returns display of 15 minute interval
class TimeSlot extends React.Component {
    state = {
        slots: [],
    };

    Choose = () => {
        this.props.navigation.navigate('Book3_Form')
    }

    componentDidMount() {
        const { start } = this.props;
        const { end } = this.props;
        const { booked } = this.props;
        const { slots } = this.state;

        const moment = require('moment');
        const temp = slots;
        let t_start = moment(start, 'hh:mm A')
        let t_end = moment(end, 'hh:mm A')
        
        let key = 0
        while (t_start.isBefore(t_end)){
            key++
            temp.push(
                < View key={key} style={calendarStyles.date_details_scaffold}>
                    <View style={calendarStyles.date_details_text_container}>
                        <View style={calendarStyles.date_details_text_item_container}>
                            <Text style={calendarStyles.date_details_label}>SLOT</Text>

                            {/* function to filter unavailable time slots */}
                            {/* {booked.map((item) => {
                                (t_start !== moment(item.time_start, 'hh:mm A'))? 
                                    <View key={item.key}> */}
                            <Text style={calendarStyles.date_details_text}>{t_start.format("hh:mm A") + ' - ' + t_start.add('15', 'minutes').format("hh:mm A")}</Text>
                                    {/* </View>
                                : 
                                t_start.add('15', 'minutes').format("hh:mm A")
                            })} */}
                        </View>
                    </View>
                    <View style={calendarStyles.date_details_button_container}>
                        <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={this.Choose}
                            style={calendarStyles.date_details_button_review}
                        >
                            <Text style={calendarStyles.date_details_button_label}>Choose</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            )

            this.setState({
                slots: temp,
            });
        }
    }

    render() {
        const { slots } = this.state;
        return (
            <View>
                {slots.map((value) => {
                    return value
                })}
            </View>
        );
    }
}

export default withNavigation(TimeSlot);