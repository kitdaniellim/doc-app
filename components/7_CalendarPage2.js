import React from "react";
import {
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
import { getFiles } from "../actions/appointments";
import AsyncStorage from "@react-native-community/async-storage";
import FilesModal from "./7_FilesModal.js";
import moment from "moment";

class CalendarPage2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClient: true,
      isNotifyModalVisible: false,
      isConfirmModalVisible: false,
      isFilesModalVisible: false,
      text: "",
      appointments: [],
      files: [],
      user: {}
    };
  }
  async componentDidMount() {
    try {
      const appointments = JSON.parse(
        await AsyncStorage.getItem("appointments")
      );
      const user = JSON.parse(
        await AsyncStorage.getItem("user")
      );
      await this.setState(() => ({ user }));
      await this.setState(() => ({ appointments }));
    } catch (e) {
      console.log(`Error! Details: ${e}`);
    }
  }
  Okay = () => {
    this.setState(() => ({ isConfirmModalVisible: false }));
  };
  ConfirmAll = () => {
    this.setState(() => ({ isConfirmModalVisible: true }));
  };
  Cancel = () => {
    this.setState(() => ({ isNotifyModalVisible: false }));
  };
  Notify_2 = () => {
    this.setState(() => ({ isNotifyModalVisible: false }));
  };
  Notify = () => {
    this.setState(() => ({ isNotifyModalVisible: true }));
  };
  Close = () => {
    this.props.navigation.navigate('Calendar1');
  };
  Review = () => {
    this.props.navigation.navigate("Calendar3_Review");
  };
  setText = (text) => {
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
  render() {
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
                onPress={this.Okay}
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
                Text and inform your client.
              </Text>
              <View style={calendarStyles.modal_textinput_container}>
                <TextInput
                  placeholder="Type your message here.."
                  placeholderTextColor="#8B8787"
                  style={calendarStyles.modal_textinput}
                  onChangeText={(text) => this.setText(text)}
                  value={this.state.text}
                />
              </View>
            </View>
            <View style={calendarStyles.modal_container_bottom}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.Cancel}
                style={calendarStyles.modal_button_container_cancel}
              >
                <Text style={calendarStyles.modal_button_label}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.Notify_2}
                style={calendarStyles.modal_button_container_notify}
              >
                <Text style={calendarStyles.modal_button_label_bold}>
                  Notify
                </Text>
              </TouchableOpacity>
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
                  onPress={this.Notify}
                  style={calendarStyles.header_confirmall_container}
                >
                  <Text style={calendarStyles.header_confirmall_text}>
                    Notify All
                </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={this.ConfirmAll}
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
            onPress={this.Close}
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
                  {moment(this.props.navigation.state.params.date)
                    .format("dddd")
                    .toUpperCase() +
                    ", " +
                    moment(this.props.navigation.state.params.date)
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
                        item.status === "Pending" ? (
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
                        ) : item.status === "Approved" ? (
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
                          </View>
                        ) : item.status === "Done" ? (
                          <TouchableOpacity
                            activeOpacity={0.6}
                            onPress={this.Review}
                            style={calendarStyles.date_details_button_review}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              Review
                            </Text>
                          </TouchableOpacity>
                        ) : (
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
                              )
                      ) : item.status === "Pending" ? (
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
                            onPress={this.Notify}
                          >
                            <Text
                              style={calendarStyles.date_details_button_label}
                            >
                              Notify
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : (
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
                                style={calendarStyles.date_details_button_notify}
                                onPress={this.Notify}
                              >
                                <Text
                                  style={calendarStyles.date_details_button_label}
                                >
                                  Notify
                            </Text>
                              </TouchableOpacity>
                            </View>
                          )}
                      {
                        item.status === "Pending" || item.status === "Approved" &&
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={this.Review}
                          style={calendarStyles.date_details_button_cancel}
                        >
                          <Text
                            style={calendarStyles.date_details_button_label}
                          >
                            Cancel
                              </Text>
                        </TouchableOpacity>
                      }
                    </View>
                  </View>
                );
              }) : (
                  <View style={calendarStyles.no_appointments_scaffold}>
                    <View style={calendarStyles.date_details_button_container}>
                      <Text style={calendarStyles.no_appointments_text}>You have no appointments on this date</Text>
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
});

const mapDispatchToProps = (dispatch) => ({
  getFiles: (appointment_id) => dispatch(getFiles(appointment_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage2);
