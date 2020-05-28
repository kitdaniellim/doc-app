import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';


const Calendar = ({ navigation }) => {
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
        <Text style={calendarStyles.header_text_bold}>HOME</Text>
        <Text style={calendarStyles.header_text}>Highest Rated by Profession</Text>
      </View>
      <View style={calendarStyles.scaffold}>
        <View style={calendarStyles.calendar_container}>

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

export default Calendar;