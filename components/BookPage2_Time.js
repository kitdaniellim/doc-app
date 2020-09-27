import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';


const Book2_Time = ({ navigation }) => {
  const selected = [
    {
      key: 1,
      name: 'Dr. Jesus',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '7:00 PM - 11:00 PM',
    },
    {
      key: 2,
      name: 'Dr. Jose',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '3:00 PM - 5:00 PM',
    },
    {
      key: 3,
      name: 'Dr. Romero',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '7:30 AM - 8:30 AM',
    },
    {
      key: 4,
      name: 'Dr. Juan',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '8:30 PM - 10:00 AM',
    },
  ]

  const Close = () => {
    navigation.goBack()
  }

  const Choose = () => {
    navigation.navigate('Book3_Form');
  }

  return (
    <View style={calendarStyles.container}>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>AVAILABLE DATES</Text>
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
              <Text style={calendarStyles.date_details_header}>DECEMBER{" "} 25{" "} 2020, {" "}Wednesday</Text>
            </View>
            {selected.map((item) => {
              return (
                <View key={item.key.toString()} style={calendarStyles.date_details_scaffold}>
                  <View style={calendarStyles.date_details_text_container}>
                    <View>
                      <Text style={calendarStyles.date_details_text}>
                        Location: {"\n"}
                        {item.location} {"\n"}
                        Time: {"\n"}
                        {item.time}
                      </Text>
                    </View>
                  </View>
                  <View style={calendarStyles.date_details_button_container}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={Choose}
                      style={calendarStyles.date_details_button_review}
                    >
                      <Text style={calendarStyles.date_details_button_label}>Choose</Text>
                    </TouchableOpacity>
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