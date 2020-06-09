import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';
import Modal from 'react-native-modal';

const CalendarPage2 = ({ navigation }) => {
  const userType = 'consultant' // <-- switch between 'client' or 'consultant'
  //sample data
  const selected = [
    {
      key: 1,
      name: 'Dr. Jesus',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '7:00 PM - 11:00 PM',

      //if client
      status: 'pending', // <-- change status here
      // status: 'pending' <-- disabled/unclickable yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled/unclickable low opacity green button

      //if consultant
      isConfirmed: false,
    },
    {
      key: 2,
      name: 'Dr. Jose',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '3:00 PM - 5:00 PM',
      status: 'review', // <-- change status here
      // status: 'pending' <-- disabled yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled low opacity green button

      //if consultant
      isConfirmed: true,
    },
    {
      key: 3,
      name: 'Dr. Romero',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '7:30 AM - 8:30 AM',
      status: 'reviewed', // <-- change status here
      // status: 'pending' <-- disabled yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled low opacity green button

      //if consultant
      isConfirmed: true,
    },
    {
      key: 4,
      name: 'Dr. Juan',
      location: '333 St., aaa Bldg, Lapu-lapu, Philippines',
      time: '8:30 PM - 10:00 AM',
      status: 'reviewed', // <-- change status here
      // status: 'pending' <-- disabled yellow button
      // status: 'review' <-- bright green button
      // status: 'reviewed' <-- disabled low opacity green button

      //if consultant
      isConfirmed: false,
    },
  ]

  const [isModalVisible, toggleModal] = useState(false);

  function Okay() {
    toggleModal(false)
  }

  const ConfirmAll = () => {
    toggleModal(true)
  }

  const Close = () => {
    navigation.goBack()
  }

  const Review = () => {
    navigation.navigate('Calendar3_Review')
  }

  const Notify = () => {
    navigation.navigate('Calendar3_Notify')
  }

  

  return (
    <View style={calendarStyles.container}>
      <Modal
        isVisible={isModalVisible}
        animationIn='bounceInDown'
        animationOut='bounceOutUp'
        animationInTiming={1100}
        animationOutTiming={900}
      >
        <View style={globalStyles.modal_container}>
          <View style={globalStyles.modal_container_top_verified}>
            <Icon style={globalStyles.modal_icon} name="check-circle-o" size={29} />
          </View>
          <View style={globalStyles.modal_container_bottom}>
          <Text style={globalStyles.modal_notif_bold}>Confirmed.</Text>
            <Text style={globalStyles.modal_notif}>All appointments for this day have been scheduled!</Text>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={Okay}
              style={globalStyles.modal_button_container_verified}
            >
              <Text style={globalStyles.modal_button_label}>Okay</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>APPOINTMENT</Text>
        </View>
        {/* if consultant then show button, else not */}
        {(userType === 'consultant') ?
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={ConfirmAll}
            style={calendarStyles.header_confirmall_container}
          >
            <Text style={calendarStyles.header_confirmall_text}>Confirm All</Text>
          </TouchableOpacity>
          : null
        }
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
                          <Text style={calendarStyles.date_details_button_label}>Upcoming</Text>
                        </TouchableOpacity>
                        :
                        (item.status === 'review') ?
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={Review}
                            style={calendarStyles.date_details_button_review}
                          >
                            <Text style={calendarStyles.date_details_button_label}>Review</Text>
                          </TouchableOpacity>
                          :
                          <TouchableOpacity
                            activeOpacity={0.6}
                            disabled
                            style={calendarStyles.date_details_button_reviewed}
                          >
                            <Text style={calendarStyles.date_details_button_label}>Reviewed</Text>
                          </TouchableOpacity>
                      :
                      (item.isConfirmed === false) ?
                        <View>
                          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 4 }}>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={calendarStyles.date_details_button_confirm}
                            >
                              <Icon style={calendarStyles.date_details_button_icon} name="check" size={16} />
                            </TouchableOpacity>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={calendarStyles.date_details_button_decline}
                            >
                              <Icon style={calendarStyles.date_details_button_icon} name="times" size={16} />
                            </TouchableOpacity>
                          </View>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            style={calendarStyles.date_details_button_notify}
                            onPress={Notify}
                          >
                            <Text style={calendarStyles.date_details_button_label}>Notify</Text>
                          </TouchableOpacity>
                        </View>
                        :
                        <View>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            disabled
                            style={calendarStyles.date_details_button_confirmed}
                          >
                            <Text style={calendarStyles.date_details_button_label}>Confirmed</Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            style={calendarStyles.date_details_button_notify}
                            onPress={Notify}
                          >
                            <Text style={calendarStyles.date_details_button_label}>Notify</Text>
                          </TouchableOpacity>
                        </View>
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