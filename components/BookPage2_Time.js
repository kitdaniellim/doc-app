import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';
import TimeSlot from './custom/TimeSlot.js';

const Book2_Time = ({ navigation }) => {

  //selected professional with locations and corresponding time_start and time_end
  const selected = [
    {
      key: 1,
      name: 'Dr. Siliman',
      location: 'Manila, Philippines',
      time_start: '7:30',
      time_end: '8:00',
    },
    {
      key: 2,
      name: 'Dr. Siliman',
      location: 'Cebu, Philippines',
      time_start: '15:00',
      time_end: '16:00',
    },
  ]

  //list of unavailable slots
  const booked_list = [
    {
        key: 1,
        time_start: "12:15",
        time_end: "12:30"
    },
    {
        key: 2,
        time_start: "13:00",
        time_end: "13:15"
    },
    {
        key: 3,
        time_start: "13:45",
        time_end: "14:00"
    },
]

  const Close = () => {
    navigation.goBack()
  }

  return (
    <View style={calendarStyles.container}>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>AVAILABLE TIME SLOTS</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={Close}
          style={calendarStyles.header_icon_container}
        >
          <Icon style={globalStyles.icon_global} name="times" size={18} />
        </TouchableOpacity>
      </View>
      <View style={calendarStyles.scaffold}>
        <View style={calendarStyles.date_container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={calendarStyles.date_details_container}
          >
            <View style={calendarStyles.date_header_container}>
              <Text style={calendarStyles.date_details_header}>DECEMBER 25 2020, Wednesday</Text>
            </View>
            {selected.map((item) => {
              return (
                <View key={item.key.toString()} style={calendarStyles.date_details_text_container}>
                  <View>
                    <Text style={calendarStyles.date_details_text_header}>LOCATION</Text>
                    <Text style={calendarStyles.date_details_text_header}>{item.location}</Text>
                  </View>
                  <View>
                    <TimeSlot start={item.time_start} end={item.time_end} booked={booked_list}/>
                  </View>
                </View>
              )
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Book2_Time;