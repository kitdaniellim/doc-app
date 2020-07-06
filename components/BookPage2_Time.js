import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';
import moment from 'moment';

class Book2_Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [
        {
          key: 1,
          location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
          time_start: '7:00 AM',
          time_end: '11:00 AM'
        },
        {
          key: 2,
          location: 'Gen Maxilom Avenue, Kamputhaw',
          time_start: '3:00 PM',
          time_end: '5:00 PM'
        },
        {
          key: 3,
          location: 'Nasipit, Talamban',
          time_start: '7:30 AM',
          time_end: '8:00 AM'
        },
        {
          key: 4,
          location: 'IT Park, Apas',
          time_start: '8:30 PM',
          time_end: '10:30 PM'
        },
      ]
    }
  }
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    } else {
      return (
        <React.Fragment>
          <View style={calendarStyles.header_container}>
            <View style={calendarStyles.header_text_container}>
              <Text style={calendarStyles.header_text_bold}>AVAILABLE TIME</Text>
            </View>
          </View>
          <View style={calendarStyles.scaffold}>
            <View style={calendarStyles.date_container}>
              <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={calendarStyles.date_details_container}
              >
                <View style={calendarStyles.date_header_container}>
                  <Text style={calendarStyles.date_details_header}>{this.props.date? moment(this.props.date).format('dddd').toUpperCase() + ", " + moment(this.props.date).format('MMMM DD YYYY').toUpperCase() : "No Date Selected"}</Text>
                </View>
                {this.state.selected.map((item) => {
                  return (
                    <View key={item.key.toString()} style={calendarStyles.date_details_scaffold}>
                      <View style={calendarStyles.date_details_text_container}>
                        <View>
                          <Text style={calendarStyles.date_details_text}>
                            Location: {"\n"}
                            {item.location} {"\n"}
                            Time: {"\n"}
                            {item.time_start} - {item.time_end} 
                          </Text>
                        </View>
                      </View>
                      <View style={calendarStyles.date_details_button_container}>
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => { this.props.onStep2Submit(item) }}
                          style={(this.props.location == item.location) && (this.props.time_start == item.time_start) && (this.props.time_end ==  item.time_end)? calendarStyles.date_details_button_review_active : calendarStyles.date_details_button_review}
                        >
                          <Text style={(this.props.location == item.location) && (this.props.time_start == item.time_start) && (this.props.time_end ==  item.time_end)? calendarStyles.date_details_button_label_active : calendarStyles.date_details_button_label}>Choose</Text>
                        </TouchableOpacity>
                      </View>

                    </View>
                  )
                })}
              </ScrollView>
            </View>
          </View>
        </React.Fragment>
      );
    }
  }
}

export default Book2_Time;