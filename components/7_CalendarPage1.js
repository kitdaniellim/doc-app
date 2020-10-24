import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Calendar} from 'react-native-calendars';
import { calendarStyles, globalStyles } from '../styles/styles';


const CalendarPage = ({ navigation }) => {
  //Highlighted dates 
  const markedDates={
    //Finished Appointments
    '2020-08-10': {selected: true, selectedColor: '#56EC65'},
    '2020-08-11': {selected: true, selectedColor: '#56EC65'},

    //Upcoming Appointments
    '2020-08-12': {selected: true, selectedColor: '#FCD034'},
    '2020-08-13': {selected: true, selectedColor: '#FCD034'},
  }

  const Appointment = () => {
    navigation.navigate('Calendar2');
  }

  return (
    <View style={calendarStyles.container}>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>CALENDAR</Text>
        </View>
      </View>
      <View style={calendarStyles.scaffold}>
        <View style={calendarStyles.calendar_container}>
          <Calendar
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
              // selectedDayBackgroundColor: '#56EC65',
              // selectedDayTextColor: 'orange',
              // todayTextColor: '#00adf5',
              dayTextColor: 'black',
              textDayFontSize: 10,
              // textDisabledColor: 'orange',
              // dotColor: '#00adf5',
              // selectedDotColor: '#ffffff',
              // arrowColor: 'orange',
              // disabledArrowColor: '#d9e1e8',
              // monthTextColor: 'blue',
              // indicatorColor: 'blue',
              // textDayFontFamily: 'monospace',
              // textMonthFontFamily: 'monospace',
              // textDayHeaderFontFamily: 'monospace',
              // textDayFontWeight: '300',
              // textMonthFontWeight: 'bold',
              // textDayHeaderFontWeight: '300',
              
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
          <View style={calendarStyles.calendar_legend_text_container}>
            <View style={calendarStyles.calendar_legend_upcoming_hue}></View>
            <Text style={calendarStyles.calendar_legend_text}> - Upcoming Appointments</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CalendarPage;