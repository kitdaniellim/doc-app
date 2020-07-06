import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { calendarStyles, globalStyles } from '../styles/styles';

class BookPage1_Date extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    if (this.props.currentStep !== 1) {
      return null;
    } else {
      return (
        <React.Fragment>
          <View style={calendarStyles.header_container}>
            <View style={calendarStyles.header_text_container}>
              <Text style={calendarStyles.header_text_bold}>AVAILABLE DATES</Text>
            </View>
          </View>
          <View style={calendarStyles.scaffold}>
            <View style={calendarStyles.calendar_container}>
              <Calendar
                current={new Date()}
                minDate={new Date()}
                // disabledByDefault
                onDayPress={(day) => { this.props.onStep1Submit(day.dateString) }}
                //36 months
                pastScrollRange={36}
                //24 months
                futureScrollRange={24}
                style={{
                  borderRadius: 15,
                }}
                markedDates={this.props.occupied_dates_obj}
                disableAllTouchEventsForDisabledDays={true}
                theme={{
                  backgroundColor: '#fff',
                  calendarBackground: '#fff',
                  textSectionTitleColor: '#8B8787',
                  todayTextColor: '#000',
                  //   dayTextColor: 'black',
                  textDayFontSize: 10,
                  textMonthFontSize: 14,
                  textDayHeaderFontSize: 12,
                  'stylesheet.day.basic': {
                    'base': {
                      width: 25,
                      height: 25,
                      alignItems: 'center',
                      borderRadius: 0,
                    }
                  }
                }}
              />
            </View>
            <View style={calendarStyles.calendar_legend_container}>
              <Text style={calendarStyles.calendar_legend_label}>Legend:</Text>
              <View style={calendarStyles.calendar_legend_text_container}>
                <View style={calendarStyles.calendar_legend_finished_hue}></View>
                <Text style={calendarStyles.calendar_legend_text}> - Selected Date</Text>
              </View>
              <View style={calendarStyles.calendar_legend_text_container}>
                <View style={calendarStyles.calendar_legend_unavailable_hue}></View>
                <Text style={calendarStyles.calendar_legend_text}> - Occupied Date</Text>
              </View>
            </View>
          </View>
        </React.Fragment>
      );
    }
  }
}

export default BookPage1_Date;