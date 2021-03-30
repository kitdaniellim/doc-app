import React from "react";
import {
  Alert,
  Text,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import { calendarStyles, globalStyles } from "../styles/styles";
import Modal from "react-native-modal";
import { getUserAppointments, getFiles, updateAppointmentStatus } from "../actions/appointments";
import { addNotif } from '../actions/notifs';
import AsyncStorage from "@react-native-community/async-storage";
import FilesModal from "./7_FilesModal.js";
import moment from "moment";

class CalendarPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNotifyModalVisible: false,
      isNotifyAllModalVisible: false,
      isConfirmModalVisible: false,
      isDeclineModalVisible: false,
      isFilesModalVisible: false,
      isCancelAppointmentModalVisible: false,
      isReasonCancelModalVisible: false,
      isViewReasonModalVisible: false,
      text: "",
      reason: "",
      appointments: [],
      files: [],
      user: {},
      id: "",
      typeofReject: "",
      reasonView: ""
    };
  }

  async componentDidMount() {
    try {
      const user = JSON.parse(
        await AsyncStorage.getItem("user")
      );
      await this.setState(() => ({ user }));
      await this.props.getUserAppointments(user.uid, user.userType);
      if (this.props.appointments !== undefined) {
        await this.setState(() => ({ appointments: this.props.appointments.filter((appointment) => appointment.date == this.props.route.params.date) }));
      }

      // console.log("START===================================================================")
      // console.log(this.state.user)
      // console.log("===================================================================")
      // console.log(this.state.appointments)
    } catch (e) {
      console.log(`Error! Details: ${e}`);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.appointments !== prevProps.appointments) {
      this.setState(() => ({ appointments: this.props.appointments.filter((appointment) => appointment.date == this.props.route.params.date) }));
    }
  }

  //Toggle modal of viewing reason for decline/cancel
  toggleViewReasonModal = (reasonView) => {
    if (this.state.isViewReasonModalVisible) {
      this.setState(() => ({ isViewReasonModalVisible: false }));
      this.setState(() => ({ reasonView: "" }));
      // setTimeout(() => {this.setState(() => ({ reasonView: "" }))}, 2000);
    } else {
      this.setState(() => ({ reasonView }));
      this.setState(() => ({ isViewReasonModalVisible: true }));
    }
  }

  //Navigates to the previous page "Calendar1" where it shows 
  //the calendar and appointments and their corresponding day/s
  back = () => {
    this.props.navigation.navigate('Calendar1');
  };

  //Toggle modal to confirm all appointments for this day via "Confirm All" button
  toggleConfirmAllModal = () => {
    if (this.state.isConfirmModalVisible) {
      this.setState(() => ({ isConfirmModalVisible: false }));
    } else {
      //Confirm all appointments here
      this.setState(() => ({ isConfirmModalVisible: true }));
    }
  };

  //Function called by the consultant to accept the client's request for 
  //an appointment (via check-icon)

  // CHANGE MODAL STYLE HERE
  acceptClient = (id) => {
    Alert.alert(
      'Appointment Approval',
      'Accept appointment?',
      [
        {
          text: 'Accept', onPress: async () => {
            console.log("Client accepted by consultant");
            this.props.updateAppointmentStatus(id, "Approved");
            //insert notif from consultant to client- your appointment has been approved @client
            this.props.addNotif(this.state.user.userType, id, 'APPROVE')
            if (!this.props.error) {
              Alert.alert(
                'Success!',
                `Appointment has been approved`,
                [
                  {
                    text: 'OK',
                    style: 'cancel'
                  }
                ],
                { cancelable: true }
              );
            } else {
              Alert.alert(
                'Oops!',
                `There was a problem in approving appointment. \n Details: ${this.props.error}`,
                [
                  {
                    text: 'OK',
                    style: 'cancel'
                  }
                ],
                { cancelable: true }
              );
            }
            await new Promise(acc => {
              setTimeout(acc, 2000);
            });
            this.props.getUserAppointments(this.state.user.uid, this.state.user.userType);
            await this.setState(() => ({ appointments: this.props.appointments.filter((appointment) => appointment.date == this.props.route.params.date) }));
          }
        },
        {
          text: 'Cancel',
          style: 'cancel'
        }
      ],
      { cancelable: true }
    );
  };

  //Toggle Modal to decline clients request for an appointment (via times-icon)
  toggleDeclineClientModal = (id) => {
    if (this.state.isDeclineModalVisible) {
      this.setState(() => ({ isDeclineModalVisible: false }));
    } else {
      this.setState(() => ({ isDeclineModalVisible: true }));
      this.setState(() => ({ id }));
      this.setState(() => ({ typeofReject: "Declined" }));
    }
  };

  //Toggle modal to notify single client via "Notify All" button
  toggleNotifyClientModal = (id) => {
    if (this.state.isNotifyModalVisible) {
      this.setState(() => ({ isNotifyModalVisible: false }));
    } else {
      this.setState(() => ({ isNotifyModalVisible: true }));
      this.setState(() => ({ id }));
    }
  };

  //Toggle modal to notify multiple clients via "Notify" button
  toggleNotifyAllClientsModal = (id) => {
    if (this.state.isNotifyAllModalVisible) {
      this.setState(() => ({ isNotifyAllModalVisible: false }));
    } else {
      this.setState(() => ({ isNotifyAllModalVisible: true }));
      this.setState(() => ({ id }));
    }
  };

  //Function called when Notify on modal-popup is pressed. Sends text to single client
  notifyClient = () => {
    if (this.state.text != "") {
      console.log("Notification sent to client: " + this.state.text);
      this.props.addNotif(this.state.user.userType, this.state.id, this.state.text)
      this.setState(() => ({ isNotifyModalVisible: false, text: "" }));
    }
  };

  //Function called when Notify on modal-popup is pressed. Sends text to multiple client
  notifyAllClients = (id) => {
    if (this.state.text != "") {
      console.log("Notification sent to all clients. " + this.state.text);
      this.props.addNotif(this.state.user.userType, this.state.id, this.state.text)
      this.setState(() => ({ isNotifyAllModalVisible: false, text: "" }));
    }
  };

  //Toggle modal to cancel appointments via "Cancel" button (visible when status of appointment is not pending)
  toggleCancelAppointmentModal = (id) => {
    if (this.state.isCancelAppointmentModalVisible) {
      this.setState(() => ({ isCancelAppointmentModalVisible: false }));
    } else {
      this.setState(() => ({ isCancelAppointmentModalVisible: true }));
      this.setState(() => ({ id }));
      this.setState(() => ({ typeofReject: "Cancelled" }));
    }
  };

  //Toggle modal to input the reason of the appointment to be cancelled
  toggleReasonCancelModal = () => {
    if (this.state.isReasonCancelModalVisible) {
      this.setState(() => ({ isReasonCancelModalVisible: false }));
    } else {
      this.setState(() => ({ isCancelAppointmentModalVisible: false }));
      this.setState(() => ({ isDeclineModalVisible: false }));
      this.setState(() => ({ isReasonCancelModalVisible: true }));
    }
  }

  markDoneAppointment = (id) => {
    Alert.alert(
      'Finish Appointment',
      'Mark appointment as Done?',
      [
        {
          text: 'Yes', onPress: async () => {
            await this.props.updateAppointmentStatus(id, "Done");
            //insert notif from consultant to client - please leave a review for the consultant @client
            this.props.addNotif(this.state.user.userType, this.state.id, 'DONE')
            if (!this.props.error) {
              Alert.alert(
                'Success!',
                `Appointment has been marked done`,
                [
                  {
                    text: 'OK',
                    style: 'cancel'
                  }
                ],
                { cancelable: true }
              );
              await this.props.getUserAppointments(this.state.user.uid, this.state.user.userType);
              await new Promise(acc => {
                setTimeout(acc, 2000);
              });
              this.setState(() => ({ appointments: this.props.appointments.filter((appointment) => appointment.date == this.props.route.params.date) }));
            } else {
              Alert.alert(
                'Oops!',
                `There was a problem in marking appointment as done. \n Details: ${this.props.error}`,
                [
                  {
                    text: 'OK',
                    style: 'cancel'
                  }
                ],
                { cancelable: true }
              );
            }
          }
        },
        {
          text: 'No',
          style: 'cancel'
        }
      ],
      { cancelable: true }
    );
  }

  //Function called upon pressing "Yes" when prompted "Are you sure you want to 
  //cancel your appointment with... etc". Cancels appointment with client/consultant.
  cancelAppointment = async () => {

    //CODE FOR GIVING REASON TO CLIENT FOR CANCEL - Dan, edited on 24/03/2021, functionality according to Troy Go is taken out
    // let reason = this.state.reason
    // if (this.state.user.userType === "CONSULTANT" && !reason.trim()) {
    //   Alert.alert(
    //     'Invalid Input!',
    //     `Please input a reason`,
    //     [
    //       {
    //         text: 'OK',
    //         style: 'cancel'
    //       }
    //     ],
    //     { cancelable: true }
    //   );
    // } else {
    await this.props.updateAppointmentStatus(this.state.id, this.state.typeofReject, this.state.reason);
    //insert notif that appointment has been cancelled/declined
    this.props.addNotif(this.state.user.userType, this.state.id, this.state.typeofReject)
    //if current user type is client, send notif to consultant, and vice versa
    await new Promise(acc => {
      setTimeout(acc, 2000);
    });
    await this.props.getUserAppointments(this.state.user.uid, this.state.user.userType);
    await new Promise(acc => {
      setTimeout(acc, 2000);
    });
    this.setState(() => ({ appointments: this.props.appointments.filter((appointment) => appointment.date == this.props.route.params.date) }));
    if (!this.props.error) {
      Alert.alert(
        'Success!',
        `Appointment ${this.state.typeofReject}`,
        [
          {
            text: 'OK',
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
    } else {
      Alert.alert(
        'Oops!',
        `There was a problem in declining/cancelling. \n Details: ${this.props.error}`,
        [
          {
            text: 'OK',
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
    }
    this.setState(() => ({
      reason: "",
      typeofReject: "",
      id: "",
      isReasonCancelModalVisible: false,
      isCancelAppointmentModalVisible: false,
      isDeclineModalVisible: false,
    }));
    // }
  };

  //Navigates to the Review Page for the client
  review = (item) => {
    this.props.navigation.navigate("Calendar3_Review", {
      item
    });
  };

  //Sets string value for text variable under this.state; "text" is the message sent from the consultants
  //to the clients via text SMS
  setNotificationText = (text) => {
    this.setState(() => ({ text }));
  };

  onViewFiles = async (id) => {
    console.log(`fetching files from appointment id: ${id}`)
    await this.props.getFiles(id);
    if (!this.props.loading) {
      if (!this.props.error) {
        this.props.files.length > 0 && this.setState(() => ({ isFilesModalVisible: true }));
      } else {
        Alert.alert(
          'Oops!',
          `There was an error in fetching data. \n Details: ${this.props.error}`,
          [
            {
              text: 'OK',
              style: 'cancel'
            }
          ],
          { cancelable: true }
        );
      }

    }
  };
  onCloseFilesModal = async () => {
    this.setState(() => ({ isFilesModalVisible: false }));
  };

  //Returns true or false (based on current date) if client/consultant is allowed to cancel or not.
  //Checks if current date is equal to appointment date
  mayCancel = (date) => {
    let currentDate = moment().format("Y-M-D");
    // console.log('--------DATE------');
    // console.log(date);
    // console.log('-------CURR-------');
    // console.log(currentDate)
    let bool = true;
    if (moment(currentDate).isSameOrAfter(date)) {
      bool = false;
    }
    // console.log(bool);
    return bool;
  };

  render() {
    // console.log('showing appointments')
    // console.log(this.state.appointments)
    // console.log('--------------')
    return (
      <View style={calendarStyles.container}>
        <FilesModal
          isFilesModalVisible={this.state.isFilesModalVisible}
          onCloseFilesModal={this.onCloseFilesModal}
          files={this.props.files}
        />
        <Modal
          isVisible={this.state.isConfirmModalVisible}
          animationIn="bounceInDown"
          animationOut="slideOutUp"
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.modal_container}>
            <View style={globalStyles.modal_container_top_verified}>
              <Icon
                style={globalStyles.modal_icon}
                name="check-circle-o"
                size={29}
              />
            </View>
            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.modal_notif_bold}>Confirmed.</Text>
              <Text style={globalStyles.modal_notif}>
                All appointments for this day have been scheduled!
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.toggleConfirmAllModal}
                style={globalStyles.modal_button_container_verified}
              >
                <Text style={globalStyles.modal_button_label}>Okay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isNotifyModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={calendarStyles.modal_container}>
            <View style={calendarStyles.modal_container_top}>
              <Text style={calendarStyles.modal_notif_bold}>
                Notify Your Client
              </Text>
              <Text style={calendarStyles.modal_notif}>
                Notify your client.
              </Text>
              <View style={calendarStyles.modal_textinput_container}>
                <TextInput
                  placeholder="Type your message here.."
                  placeholderTextColor="#8B8787"
                  style={calendarStyles.modal_textinput}
                  onChangeText={(text) => this.setNotificationText(text)}
                  value={this.state.text}
                />
              </View>
            </View>
            <View style={calendarStyles.modal_container_bottom}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.toggleNotifyClientModal}
                style={calendarStyles.modal_button_container_cancel}
              >
                <Text style={calendarStyles.modal_button_label}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.notifyClient}
                style={calendarStyles.modal_button_container_notify}
              >
                <Text style={calendarStyles.modal_button_label_bold}>
                  Notify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        {/* If ever design changes, may use this for reference -Dan */}
        {/* <View style={globalStyles.reason_modal_container}>
            <View style={globalStyles.modal_container_top_dblue}>
              <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
              <View style={{ marginTop: 10 }}>
                <Text style={globalStyles.modal_notif_bold_white}>Reason for Decline</Text>
              </View>
            </View>
            <View style={globalStyles.reason_modal_container_bottom}>
              <Text style={globalStyles.reason_modal_notif_center}>Please input your reason to be read {'\n'} by your {this.state.user.userType === "CONSULTANT" ? "client" : "consultant"}.</Text>
              <TextInput
                style={calendarStyles.reason_modal_textinput}
                multiline={true}
                maxLength={200}
                numberOfLines={5}
                onChangeText={(reason) => this.setState({ reason })}
                value={this.state.reason}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.cancelAppointment}
                  style={globalStyles.modal_button_container_dblue}
                >
                  <Text style={globalStyles.modal_button_label}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.toggleReasonCancelModal}
                  style={globalStyles.modal_button_container_fade_dblue}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}


        <Modal
          isVisible={this.state.isNotifyAllModalVisible}
          animationIn="slideInUp"
          animationOut="slideOutDown"
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={calendarStyles.modal_container}>
            <View style={calendarStyles.modal_container_top}>
              <Text style={calendarStyles.modal_notif_bold}>
                Notify All Your Clients
              </Text>
              <Text style={calendarStyles.modal_notif}>
                Notify all your clients for this day.
              </Text>
              <View style={calendarStyles.modal_textinput_container}>
                <TextInput
                  placeholder="Type your message here.."
                  placeholderTextColor="#8B8787"
                  style={calendarStyles.modal_textinput}
                  onChangeText={(text) => this.setNotificationText(text)}
                  value={this.state.text}
                />
              </View>
            </View>
            <View style={calendarStyles.modal_container_bottom}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.toggleNotifyAllClientsModal}
                style={calendarStyles.modal_button_container_cancel}
              >
                <Text style={calendarStyles.modal_button_label}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.notifyAllClients}
                style={calendarStyles.modal_button_container_notify}
              >
                <Text style={calendarStyles.modal_button_label_bold}>
                  Notify
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isDeclineModalVisible}
          animationIn='bounceInDown'
          animationOut='bounceOutUp'
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.modal_container}>

            <View style={globalStyles.modal_container_top}>
              <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
            </View>


            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.modal_notif}>Are you sure you want to decline {'\n'} this client?</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.toggleDeclineClientModal}
                  style={globalStyles.modal_button_container_fade}
                >
                  <Text style={globalStyles.modal_button_label}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  // onPress={this.toggleReasonCancelModal}
                  onPress={this.cancelAppointment}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Yes</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isViewReasonModalVisible}
          animationIn='bounceInDown'
          animationOut='bounceOutUp'
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.reason_modal_container}>
            <View style={globalStyles.modal_container_top_dblue}>
              <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
              <View style={{ marginTop: 10 }}>
                <Text style={globalStyles.modal_notif_bold_white}>Reason for Decline</Text>
              </View>

            </View>
            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.reason_modal_notif}>{this.state.reasonView}</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.toggleViewReasonModal}
                  style={globalStyles.modal_button_container_dblue}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isCancelAppointmentModalVisible}
          animationIn='bounceInDown'
          animationOut='bounceOutUp'
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.modal_container}>
            <View style={globalStyles.modal_container_top}>
              <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
            </View>
            <View style={globalStyles.modal_container_bottom}>
              <Text style={globalStyles.modal_notif}>Are you sure you want to cancel your {'\n'} appointment with this {this.state.user.userType === "CONSULTANT" ? "client" : "consultant"}?</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.toggleCancelAppointmentModal}
                  style={globalStyles.modal_button_container_fade}
                >
                  <Text style={globalStyles.modal_button_label}>No</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  // onPress={() => {
                  //   if (this.state.user.userType == "CONSULTANT") {
                  //     this.toggleReasonCancelModal()
                  //   } else if (this.state.user.userType == "CLIENT") {
                  //     this.cancelAppointment()
                  //   }
                  // }
                  // }
                  onPress={this.cancelAppointment}
                  style={globalStyles.modal_button_container}
                >
                  <Text style={globalStyles.modal_button_label}>Yes</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>
        </Modal>

        <Modal
          isVisible={this.state.isReasonCancelModalVisible}
          animationIn='bounceInDown'
          animationOut='bounceOutUp'
          animationInTiming={1100}
          animationOutTiming={900}
        >
          <View style={globalStyles.reason_modal_container}>
            <View style={globalStyles.modal_container_top_dblue}>
              <Icon style={globalStyles.modal_icon} name="times-circle-o" size={29} />
              <View style={{ marginTop: 10 }}>
                <Text style={globalStyles.modal_notif_bold_white}>Reason for {this.state.user.userType === "CONSULTANT" ? "Decline" : "Cancel"}</Text>
              </View>
            </View>
            <View style={globalStyles.reason_modal_container_bottom}>
              <Text style={globalStyles.reason_modal_notif_center}>Please input your reason to be read {'\n'} by your {this.state.user.userType === "CONSULTANT" ? "client" : "consultant"}.</Text>
              <TextInput
                style={calendarStyles.reason_modal_textinput}
                multiline={true}
                maxLength={200}
                numberOfLines={5}
                onChangeText={(reason) => this.setState({ reason })}
                value={this.state.reason}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.cancelAppointment}
                  style={globalStyles.modal_button_container_dblue}
                >
                  <Text style={globalStyles.modal_button_label}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.toggleReasonCancelModal}
                  style={globalStyles.modal_button_container_fade_dblue}
                >
                  <Text style={globalStyles.modal_button_label}>Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        <View style={calendarStyles.header_container}>
          <View style={calendarStyles.header_text_container}>
            <Text style={calendarStyles.header_text_bold}>APPOINTMENT</Text>
          </View>
          {/* if consultant then show button, else not */}
          {this.state.user.userType === "CONSULTANT" &&
            this.state.appointments.length !== 0 ? (
            <View style={{ flexDirection: "row", flex: 3 }}>
              <TouchableOpacity
                activeOpacity={0.6}
                // onPress={() => { this.toggleNotifyAllClientsModal(item.uid) }}
                onPress={() => { }}
                style={calendarStyles.header_confirmall_container}
              >
                <Text style={calendarStyles.header_confirmall_text}>
                  Notify All
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                // onPress={this.toggleConfirmAllModal}
                onPress={() => { }}
                style={calendarStyles.header_confirmall_container}
              >
                <Text style={calendarStyles.header_confirmall_text}>
                  Confirm All
                </Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={this.back}
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
                <Text style={calendarStyles.date_details_header}>
                  {moment(this.props.route.params.date, "YYYY-MM-DD")
                    .format("dddd")
                    .toUpperCase() +
                    ", " +
                    moment(this.props.route.params.date, "YYYY-MM-DD")
                      .format("MMMM DD YYYY")
                      .toUpperCase()}
                </Text>
              </View>
              {this.state.appointments.length > 0 ? this.state.appointments.map((item) => {
                return (
                  <View
                    key={item.uid.toString()}
                    style={calendarStyles.date_details_scaffold}
                  >
                    <View style={calendarStyles.date_details_text_container}>
                      <View>
                        <Text style={calendarStyles.date_details_text}>
                          Appointment with {" "}
                          {this.state.user.userType == "CLIENT" ? item.consultant_name : item.client_name} {"\n"}
                          {item.location} {"\n"}
                          {moment(item.time_start, "HH:mm").format(
                            "h:mm A"
                          )} - {moment(item.time_end, "HH:mm").format("h:mm A")}
                        </Text>
                      </View>
                      {item.files.length > 0 ? (
                        <View style={{ flexDirection: "row" }}>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => {
                              this.onViewFiles(item.uid);
                            }}
                            style={
                              calendarStyles.date_details_button_download_container
                            }
                          >
                            <Text
                              style={
                                calendarStyles.date_details_button_download_label
                              }
                            >
                              View Files
                            </Text>
                          </TouchableOpacity>

                        </View>
                      ) : (
                        <View style={{ flexDirection: "row" }}>
                          <Text style={calendarStyles.date_details_no_files}>
                            No Files Attached
                          </Text>
                        </View>
                      )}
                    </View>
                    <View style={calendarStyles.date_details_button_container}>
                      {/* if user is a client then button displays, else null and does not display */}
                      {this.state.user.userType === "CLIENT" ? (
                        item.status === "Pending" ? ( //Appointment is Not Approved by Consultant and awaiting appointment date
                          <View>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              disabled
                              style={calendarStyles.date_details_button_pending}
                            >
                              <Text
                                style={calendarStyles.date_details_button_label}
                              >
                                Pending
                            </Text>
                            </TouchableOpacity>
                            {this.mayCancel(item.date) ?
                              (<TouchableOpacity
                                activeOpacity={0.6}
                                onPress={() => {
                                  this.toggleCancelAppointmentModal(item.uid)
                                }}
                                style={calendarStyles.date_details_button_cancel}
                              >
                                <Text
                                  style={calendarStyles.date_details_button_label}
                                >
                                  Cancel
                                </Text>
                              </TouchableOpacity>)
                              :
                              (<TouchableOpacity
                                disabled
                                activeOpacity={0.6}
                                style={calendarStyles.date_details_button_cancel_fade}
                              >
                                <Text
                                  style={calendarStyles.date_details_button_label}
                                >
                                  Cancel
                                </Text>
                              </TouchableOpacity>)
                            }
                          </View>
                        ) : item.status === "Approved" ? ( //Appointment is Approved by Consultant but awaiting appointment date
                          <View>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              disabled
                              style={
                                calendarStyles.date_details_button_reviewed
                              }
                            >
                              <Text
                                style={calendarStyles.date_details_button_label}
                              >
                                Approved
                              </Text>
                            </TouchableOpacity>
                            {this.mayCancel(item.date) ? //Cancellation button will be disabled if current date is on or past appointment date
                              (<TouchableOpacity
                                activeOpacity={0.6}
                                // onPress={this.cancelAppointment}
                                onPress={this.toggleReasonCancelModal}
                                style={calendarStyles.date_details_button_cancel}
                              >
                                <Text
                                  style={calendarStyles.date_details_button_label}
                                >
                                  Cancel
                                </Text>
                              </TouchableOpacity>)
                              :
                              (<TouchableOpacity
                                disabled
                                activeOpacity={0.6}
                                style={calendarStyles.date_details_button_cancel_fade}
                              >
                                <Text
                                  style={calendarStyles.date_details_button_label}
                                >
                                  Cancel
                                </Text>
                              </TouchableOpacity>)
                            }
                          </View>
                        ) : item.status === "Done" ? ( //Appointment is Done but awaiting Review
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={() => { this.review(item) }}
                            style={calendarStyles.date_details_button_review}
                          >
                            <Text
                              style={calendarStyles.date_details_button_review_label}
                            >
                              Review
                            </Text>
                          </TouchableOpacity>
                        ) : item.status === "Reviewed" ? ( //Appointment is Done and Reviewed
                          <TouchableOpacity
                            activeOpacity={0.6}
                            disabled
                            style={calendarStyles.date_details_button_reviewed}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              Finished
                                  </Text>
                          </TouchableOpacity>
                        ) : (   //Appointment is Declined/Cancelled
                          <View>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              disabled
                              style={calendarStyles.date_details_button_cancelled}
                            >
                              <Text
                                style={calendarStyles.date_details_button_label}
                              >
                                {item.status}
                              </Text>
                            </TouchableOpacity>
                            {/* View Reason for Cancelling */}
                            {/* <TouchableOpacity
                              style={calendarStyles.date_details_button_viewreason}
                              onPress={() => { this.toggleViewReasonModal(item.reason) }}
                            >
                              <Text
                                style={calendarStyles.date_details_button_label}
                              >
                                View Reason
                                  </Text>
                            </TouchableOpacity> */}
                          </View>
                        )
                        //CONSULTANT
                      ) : item.status === "Pending" ? ( //Appointment is pending approval
                        <View>
                          <View
                            style={{
                              flexDirection: "row",
                              justifyContent: "space-around",
                              marginHorizontal: 4,
                            }}
                          >
                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={calendarStyles.date_details_button_confirm}
                              onPress={() => { this.acceptClient(item.uid) }}
                            >
                              <Icon
                                style={calendarStyles.date_details_button_icon}
                                name="check"
                                size={16}
                              />
                            </TouchableOpacity>
                            <TouchableOpacity
                              activeOpacity={0.6}
                              style={calendarStyles.date_details_button_decline}
                              onPress={() => { this.toggleDeclineClientModal(item.uid) }}
                            >
                              <Icon
                                style={calendarStyles.date_details_button_icon}
                                name="times"
                                size={16}
                              />
                            </TouchableOpacity>
                          </View>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            style={calendarStyles.date_details_button_notify}
                            onPress={() => { this.toggleNotifyClientModal(item.uid) }}
                          // onPress={() => { }}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              Notify
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : item.status === "Approved" ? ( //Appointment is approved
                        <View>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            disabled
                            style={calendarStyles.date_details_button_confirmed}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              Confirmed
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            style={calendarStyles.date_details_button_markdone}
                            onPress={() => { this.markDoneAppointment(item.uid) }}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              Mark as Done
                            </Text>
                          </TouchableOpacity>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            style={calendarStyles.date_details_button_notify}
                            onPress={() => { this.toggleNotifyClientModal(item.uid) }}
                          // onPress={() => { }}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              Notify
                                </Text>
                          </TouchableOpacity>
                          {this.mayCancel(item.date) ? //Cancellation button will be disabled if current date is on or past appointment date
                            (<TouchableOpacity
                              activeOpacity={0.6}
                              onPress={() => this.toggleCancelAppointmentModal(item.uid)}
                              style={calendarStyles.date_details_button_cancel}
                            >
                              <Text
                                style={calendarStyles.date_details_button_label}
                              >
                                Cancel
                                </Text>
                            </TouchableOpacity>)
                            :
                            (<TouchableOpacity
                              disabled
                              activeOpacity={0.6}
                              style={calendarStyles.date_details_button_cancel_fade}
                            >
                              <Text
                                style={calendarStyles.date_details_button_label}
                              >
                                Cancel
                                </Text>
                            </TouchableOpacity>)
                          }
                        </View>
                      ) : item.status === "Done" ? ( //Appointment is Done but awaiting Review
                        <TouchableOpacity
                          activeOpacity={0.6}
                          disabled
                          style={calendarStyles.date_details_button_done}
                        >
                          <Text
                            style={calendarStyles.date_details_button_label}
                          >
                            Done
                          </Text>
                        </TouchableOpacity>
                      ) : item.status === "Reviewed" ? ( //Appointment is Done and Reviewed
                        <TouchableOpacity
                          activeOpacity={0.6}
                          disabled
                          style={calendarStyles.date_details_button_reviewed}
                        >
                          <Text
                            style={calendarStyles.date_details_button_label}
                          >
                            Finished
                          </Text>
                        </TouchableOpacity>
                      ) : (   //Appointment is Declined/Cancelled
                        <View>
                          <TouchableOpacity
                            activeOpacity={0.6}
                            disabled
                            style={calendarStyles.date_details_button_cancelled}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              {item.status}
                            </Text>
                          </TouchableOpacity>
                          {/* VIEW REASON FOR DECLINE  */}
                          {/* <TouchableOpacity
                            style={calendarStyles.date_details_button_viewreason}
                            onPress={() => { this.toggleViewReasonModal(item.reason) }}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              View Reason
                                  </Text>
                          </TouchableOpacity> */}
                        </View>
                      )}
                    </View>
                  </View>
                );
              }) : (
                <View style={calendarStyles.no_appointments_scaffold}>
                  <View style={calendarStyles.date_details_button_container}>
                    <Text style={calendarStyles.no_appointments_text}>You have no appointments on this date.</Text>
                  </View>
                </View>
              )}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.appointments.loading,
  files: state.appointments.files,
  error: state.appointments.error,
  appointments: state.appointments.items
});

const mapDispatchToProps = (dispatch) => ({
  getUserAppointments: (id, type) => dispatch(getUserAppointments(id, type)),
  getFiles: (appointment_id) => dispatch(getFiles(appointment_id)),
  updateAppointmentStatus: (appointment_id, status, reason) => dispatch(updateAppointmentStatus(appointment_id, status, reason)),
  addNotif: (userType, uid, type) => dispatch(addNotif(userType, uid, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage2);
