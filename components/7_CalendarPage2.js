import React, { useState } from 'react';
import { Text, TextInput, Component, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';
import Modal from 'react-native-modal';

const CalendarPage2 = ({ navigation }) => {
  //sample userType
  const userType = 'client' // <-- switch between 'client' or 'consultant'
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

  const [text, setText] = useState('');
  const [isConfirmModalVisible, toggleConfirmModal] = useState(false);
  const [isNotifyModalVisible, toggleNotifyModal] = useState(false);

  function Okay() {
    toggleConfirmModal(false)
  }

  const ConfirmAll = () => {
    toggleConfirmModal(true)
  }

  function Cancel() {
    toggleNotifyModal(false)
  }

  const Notify_2 = () => {
    toggleNotifyModal(false)
  }

  const Notify = () => {
    toggleNotifyModal(true)
  }


  const Close = () => {
    navigation.goBack()
  }

  const Review = () => {
    navigation.navigate('Calendar3_Review')
  }

  return (
    <View style={calendarStyles.container}>
      <Modal
        isVisible={isConfirmModalVisible}
        animationIn='bounceInDown'
        animationOut='slideOutUp'
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
      <Modal
        isVisible={isNotifyModalVisible}
        animationIn='slideInUp'
        animationOut='slideOutDown'
        animationInTiming={1100}
        animationOutTiming={900}
      >
        <View style={calendarStyles.modal_container}>
          <View style={calendarStyles.modal_container_top}>
            <Text style={calendarStyles.modal_notif_bold}>Notify Your Client</Text>
            <Text style={calendarStyles.modal_notif}>Text and inform your client.</Text>
            <View style={calendarStyles.modal_textinput_container}>
              <TextInput
                placeholder="Type your message here.."
                placeholderTextColor="#8B8787"
                style={calendarStyles.modal_textinput}
                onChangeText={text => setText(text)}
                value={text}
              />
            </View>
          </View>
          <View style={calendarStyles.modal_container_bottom}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={Cancel}
              style={calendarStyles.modal_button_container_cancel}
            >
              <Text style={calendarStyles.modal_button_label}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={Notify_2}
              style={calendarStyles.modal_button_container_notify}
            >
              <Text style={calendarStyles.modal_button_label_bold}>Notify</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>APPOINTMENT</Text>
        </View>
        {/* if consultant then show button, else not */}
        {(userType === 'consultant' && selected.length !== 0) ?
          <View style={{ flexDirection: 'row', flex: 3 }}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={Notify}
              style={calendarStyles.header_confirmall_container}
            >
              <Text style={calendarStyles.header_confirmall_text}>Notify All</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={ConfirmAll}
              style={calendarStyles.header_confirmall_container}
            >
              <Text style={calendarStyles.header_confirmall_text}>Confirm All</Text>
            </TouchableOpacity>
          </View>
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
          <View style={calendarStyles.date_details_container}>
            {(selected.length !== 0) ?
              <FlatList
                data={selected}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.key.toString()}
                ListHeaderComponent={() => {
                  return (
                    <View style={calendarStyles.date_header_container}>
                      <Text style={calendarStyles.date_details_header}>DECEMBER{" "} 25{" "} 2020, {" "}Wednesday</Text>
                    </View>
                  );
                }}
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
                            <Text style={calendarStyles.date_details_button_label}>Pending</Text>
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
                              <Text style={calendarStyles.date_details_button_label}>Finished</Text>
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
              :
              <View>
                <View style={calendarStyles.date_header_container}>
                  <Text style={calendarStyles.date_details_header}>DECEMBER{" "} 25{" "} 2020, {" "}Wednesday</Text>
                </View>
                <View style={calendarStyles.date_details_scaffold}>
                  <View style={{margin: 5}}>
                    <Text>No upcoming or past appointments for this day.</Text>
                  </View>
                </View>
              </View>
            }

          </View>
        </View>
      </View>
    </View>
  );
}

export default CalendarPage2;