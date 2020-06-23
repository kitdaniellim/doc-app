import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Calendar, CalendarList} from 'react-native-calendars';
import { calendarStyles, globalStyles } from '../styles/styles';


const Book1_Date = ({ navigation }) => {
  //Highlighted dates 
  const markedDates={
    //Available Dates
    '2020-06-10': {selected: true, selectedColor: '#56EC65'},
    '2020-06-11': {selected: true, selectedColor: '#56EC65'},
    '2020-06-12': {selected: true, selectedColor: '#56EC65'},
    '2020-06-13': {selected: true, selectedColor: '#56EC65'},
  }

  const Appointment = () => {
    navigation.navigate('Book2_Time');
  }

  return (
    <View style={calendarStyles.container}>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>AVAILABLE DATES</Text>
        </View>
      </View>
      <View style={calendarStyles.scaffold}>
        <View style={calendarStyles.calendar_container}>
          <Calendar
            // disabledByDefault
            onDayPress={Appointment}
            markedDates={markedDates} 
            //36 months
            pastScrollRange={36}
            //24 months
            futureScrollRange={24}
            style={{
              borderRadius: 15,
            }}

            theme={{
              backgroundColor: '#fff',
              calendarBackground: '#fff',
              textSectionTitleColor: '#8B8787',
              todayTextColor: '#000',
            //   dayTextColor: 'black',
              textDayFontSize: 10,
              textMonthFontSize: 14,
              textDayHeaderFontSize: 12,
              'stylesheet.day.basic':{
                'base':{
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
            <Text style={calendarStyles.calendar_legend_text}> - Finished Appointments</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Book1_Date;