import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Calendar, CalendarList} from 'react-native-calendars';
import { calendarStyles, globalStyles } from '../styles/styles';








const CalendarPage = ({ navigation }) => {
  const Submit = () => {
    navigation.navigate('LoginClient');
  }

  const Search = () => {
    navigation.navigate('Search');
  }

  const b = () => {
    navigation.navigate('LoginClient');
  }

  return (
    <View style={calendarStyles.container}>
      <View style={calendarStyles.header_container}>
        <Text style={calendarStyles.header_text_bold}>CALENDAR</Text>
      </View>
      <View style={calendarStyles.scaffold}>
        <View style={calendarStyles.calendar_container}>
          <Calendar
            current={'2020-05-30'}
            markedDates={{
              '2020-05-10': {selected: true, marked: true, selectedColor: 'blue'},
              '2020-05-12': {marked: true},
              '2020-05-14': {marked: true, dotColor: 'red', activeOpacity: 0},
              '2020-05-20': {disabled: true, disableTouchEvent: true}
            }}
            
            style={{
              borderRadius: 15,
              
            }}

            theme={{
              backgroundColor: '#fff',
              calendarBackground: 'pink',
              
              textSectionTitleColor: '#8B8787',
              // selectedDayBackgroundColor: '#00adf5',
              // selectedDayTextColor: '#ffffff',
              // todayTextColor: '#00adf5',
              dayTextColor: 'black',
              textDayFontSize: 8,
              // textDisabledColor: '#d9e1e8',
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
                  width: 30,
                  height: 10,
                  alignItems: 'center'
                }
              }
            }}
          />
        </View>
        <View style={calendarStyles.calendar_legend_container}>
          <Text>Legend: </Text>
          <View style={calendarStyles.calendar_legend_finished}>
            <View></View>
            <Text> - Finished Appointment</Text>
          </View>
          <View style={calendarStyles.calendar_legend_upcoming}>
            <View></View>
            <Text> - Upcoming Appointment</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default CalendarPage;