import React, { useState } from 'react';
import { Text, View, ScrolLView, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';


const CalendarPage2 = ({ navigation }) => {

  //Sample Data
  // const selected = {
  //   userType: 'client',
  //   name: 'Dr. Jesus',
  //   location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
  //   time: '1:00 PM',
  //   status: 'pending' // <-- change status here
  //   // status: 'pending' <-- disabled yellow button
  //   // status: 'review' <-- bright green button
  //   // status: 'reviewed' <-- disabled low opacity green button 
  // }

  const userType = 'client'
  const selected = [
    {
      key: 1,
      name: 'Dr. Jesus',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '7:00 PM - 11:00 PM',
      status: 'pending' // <-- change status here
      // status: 'pending' <-- disabled yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled low opacity green button
    },
    {
      key: 2,
      name: 'Dr. Jose',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '3:00 PM - 5:00 PM',
      status: 'review' // <-- change status here
      // status: 'pending' <-- disabled yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled low opacity green button
    },
    {
      key: 3,
      name: 'Dr. Romero',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '7:30 AM - 8:30 AM',
      status: 'reviewed' // <-- change status here
      // status: 'pending' <-- disabled yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled low opacity green button
    },
    {
      key: 4,
      name: 'Dr. Juan',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '8:30 PM - 10:00 AM',
      status: 'reviewed' // <-- change status here
      // status: 'pending' <-- disabled yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled low opacity green button
    },
  ]

  const Close = () => {
    navigation.goBack()
  }

  const Review = () => {
    
  }

  return (
    <View style={calendarStyles.container}>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>APPOINTMENT</Text>
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
          <View style={calendarStyles.date_header_container}>
            <Text style={calendarStyles.date_header_text}>DECEMBER{" "} 25{" "} 2020</Text>
          </View>
          <View style={calendarStyles.date_details_container}>
            <Text style={calendarStyles.date_details_header}>Wednesday</Text>
            <FlatList
              data={selected}
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.key.toString()}
              renderItem={({ item }) => (
                <View key={item.key.toString()} style={calendarStyles.date_details_scaffold}>
                  <View style={calendarStyles.date_details_text_container}>
                    <Text style={calendarStyles.date_details_text}>
                      Appointment with{" "}
                      {item.name} {"\n"}
                      {item.location} {"\n"}
                      {item.time}
                    </Text>
                  </View>
                  <View style={calendarStyles.date_details_button_container}>
                    {/* if user is a client then button displays, else null and does not display */}
                    {(userType === 'client') ?
                      (item.status === 'pending') ?
                        <TouchableOpacity
                          activeOpacity={0.6}
                          disabled
                          style={calendarStyles.date_details_button_pending}
                        >
                          <Text style={calendarStyles.date_details_button_label_pending}>Upcoming</Text>
                        </TouchableOpacity>
                        :
                        (item.status === 'review') ?
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => {Review}}
                            style={calendarStyles.date_details_button_review}
                          >
                            <Text style={calendarStyles.date_details_button_label_review}>Review</Text>
                          </TouchableOpacity>
                          :
                          <TouchableOpacity
                            activeOpacity={0.6}
                            disabled
                            style={calendarStyles.date_details_button_reviewed}
                          >
                            <Text style={calendarStyles.date_details_button_label_reviewed}>Reviewed</Text>
                          </TouchableOpacity>
                      : null
                    }
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CalendarPage2;