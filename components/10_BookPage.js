import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import BookPage1_Date from "./BookPage1_Date";
import BookPage2_Time from "./BookPage2_Time";
import BookPage3_Form from "./BookPage3_Form";
import BookPage4_Confirmation from "./BookPage4_Confirmation";
import { calendarStyles, globalStyles } from "../styles/styles";
import { bookAppointment, getAppointments } from "../actions/appointments";

class BookPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
      date: "",
      time_start: "",
      time_end: "",
      location: "",
      symptoms: [],
      attachment: [],
      appointments_on_date: [],
      occupied_dates: [],
      occupied_times: [],
      occupied_dates_obj: {},
      consultant_id: this.props.navigation.state.params.consultant_id,
      symptoms: [],
      files: [],
    };
  }
  async componentDidMount() {
    let occupied_dates = [];
    await this.props.getAppointments(1, 1);
    if (this.props.appointments.length > 0) {
      this.props.appointments.map((appointment) => {
        occupied_dates.push(appointment.date);
      });
      occupied_dates.sort((a, b) => a - b);
      this.setState(() => ({ occupied_dates }));
      this.showOccupiedDates();
    }
  }
  showOccupiedDates = () => {
    let temp,
      count = 0,
      occupied_dates_obj = {};
    //Assuming date is unavailable when 3 appointments are already booked on the same said date
    this.state.occupied_dates.forEach((val) => {
      if (!temp) {
        temp = val;
      }
      if (val == temp) {
        count++;
      } else {
        count = 1;
      }
      if (count == 3) {
        occupied_dates_obj[val] = {
          selected: true,
          disableTouchEvent: true,
          selectedColor: "#d9534f",
        };
      }
      temp = val;
    });
    if (this.state.date !== "") {
      occupied_dates_obj[this.state.date] = {
        selected: true,
        selectedColor: "#56EC65",
      };
    }
    this.setState(() => ({ occupied_dates_obj }));
  };
  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState(() => ({ currentStep }));
  };
  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState(() => ({ currentStep }));
    this.showOccupiedDates();
  };
  onStep1Submit = async (date) => {
    await this.setState(() => ({ date }));
    const appointments_on_date =
      this.props.appointments.filter(
        (appointment) => appointment.date.toString() == date.toString()
      ) || [];
    await this.setState(() => ({ appointments_on_date }));
    this.setState(() => ({ currentStep: 2 }));
  };
  onStep2Submit = (item) => {
    this.setState(() => ({ location: item.location }));
    this.setState(() => ({ time_start: item.time_start }));
    this.setState(() => ({ time_end: item.time_end }));
    this.setState(() => ({ currentStep: 3 }));
  };
  onStep3SymptomsChange = (symptoms) => {
    this.setState(() => ({ symptoms }));
  };
  onStep3FilesChange = (files) => {
    this.setState(() => ({ files }));
  };
  onStep3Submit = () => {
    if (
      this.state.date == "" ||
      this.state.location == "" ||
      this.state.time_start == "" ||
      this.state.time_end == ""
    ) {
      alert("Please input the missing fields");
    } else {
      this.setState(() => ({ currentStep: 4 }));
    }
  };
  onFormSubmit = async () => {
    let files = [];
    this.state.files.map((file) => {
      files.push({
        uri: file.uri,
        name: file.name,
      });
    });
    const appointment = {
      date: this.state.date,
      time_start: this.state.time_start,
      time_end: this.state.time_end,
      location: this.state.location,
      client_id: 1,
      consultant_id: this.state.consultant_id,
      symptoms: this.state.symptoms,
      files,
      status: "Pending",
    };
    await this.props.bookAppointment(appointment);
    if (this.props.error) {
      console.log(this.props.error);
      alert(this.props.error);
    } else if (!this.props.error && this.props.appointment) {
      alert("Booking Successful");
    }
  };
  render() {
    return (
      <View style={calendarStyles.container}>
        <BookPage1_Date
          currentStep={this.state.currentStep}
          onStep1Submit={this.onStep1Submit}
          date={this.state.date}
          occupied_dates_obj={this.state.occupied_dates_obj}
        />
        <BookPage2_Time
          appointments_on_date={this.state.appointments_on_date}
          currentStep={this.state.currentStep}
          onStep2Submit={this.onStep2Submit}
          date={this.state.date}
          location={this.state.location}
          time_start={this.state.time_start}
          time_end={this.state.time_end}
        />
        <BookPage3_Form
          currentStep={this.state.currentStep}
          onStep3SymptomsChange={this.onStep3SymptomsChange}
          onStep3FilesChange={this.onStep3FilesChange}
          onStep3Submit={this.onStep3Submit}
          symptoms={this.state.symptoms}
        />
        <BookPage4_Confirmation
          currentStep={this.state.currentStep}
          onFormSubmit={this.onFormSubmit}
          date={this.state.date}
          location={this.state.location}
          time_start={this.state.time_start}
          time_end={this.state.time_end}
          symptoms={this.state.symptoms}
          files={this.state.files}
        />

        <View
          style={
            this.state.currentStep !== 1
              ? calendarStyles.step_buttons_container
              : calendarStyles.step_buttons_container_reverse
          }
        >
          {this.state.currentStep !== 1 && (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this._prev}
              style={calendarStyles.prev_step_button}
            >
              <Text style={calendarStyles.step_buttons_label}>Previous</Text>
            </TouchableOpacity>
          )}

          {this.state.currentStep < 3 && (
            <TouchableOpacity
              onPress={this._next}
              style={calendarStyles.next_step_button}
            >
              <Text style={calendarStyles.step_buttons_label}>Next</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.appointments.loading,
  appointments: state.appointments.items,
  appointment: state.appointments.item,
  error: state.appointments.error,
});

const mapDispatchToProps = (dispatch) => ({
  bookAppointment: (data) => dispatch(bookAppointment(data)),
  getAppointments: (client_id, consultant_id) =>
    dispatch(getAppointments(client_id, consultant_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
