import React from "react";
import { Alert, View, TouchableOpacity, Text } from "react-native";
import { connect } from "react-redux";
import BookPage1_Date from "./BookPage1_Date";
import BookPage2_Time from "./BookPage2_Time";
import BookPage3_Form from "./BookPage3_Form";
import BookPage4_Confirmation from "./BookPage4_Confirmation";
import { calendarStyles, globalStyles } from "../styles/styles";
import { bookAppointment, getAppointments } from "../actions/appointments";
import moment from "moment";
import AsyncStorage from '@react-native-community/async-storage';
import { getConsultant } from "../actions/users";

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
      user: {},
      daysAvailable: []
    };
  }
  async componentDidMount() {
    let occupied_dates = [], daysAvailable = [];
    const user = await JSON.parse(
      await AsyncStorage.getItem("user")
    );
    if (!user) {
      navigation.navigate('Login');
    } else {
      this.setState(() => ({ user }));
      await this.props.getConsultant(this.state.consultant_id);
      await this.props.getAppointments(user.uid, this.state.consultant_id);
      if (this.props.appointments.length > 0) {
        this.props.appointments.map((appointment) => {
          occupied_dates.push(appointment.date);
        });
        occupied_dates.sort((a, b) => a - b);
        this.setState(() => ({ occupied_dates }));
        this.showOccupiedDates();
      }
      this.props.singleConsultant.office_details.map(ind_od => {
        ind_od.office_day.map(ind_day => {
          const filter = daysAvailable.filter(item => item.day == ind_day);
          filter.length == 0 && daysAvailable.push({ day: ind_day });
        });
      });
      await this.setState(() => ({ daysAvailable }))
      console.log('================days available===================');
      console.log(daysAvailable);
      console.log('================consultant data===================');
      console.log(this.props.singleConsultant);
      console.log('==================================================');
    }
  }
  showOccupiedDates = () => {
    let temp,
      count = 0,
      occupied_dates_obj = {};
    //Assuming date is unavailable when 8 appointments are already booked on the same said date
    this.state.occupied_dates.forEach((val) => {
      if (!temp) {
        temp = val;
      }
      if (val == temp) {
        count++;
      } else {
        count = 1;
      }
      if (count == 8) {
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
    if (currentStep == 1) {
      Alert.alert(
        'Cancel Application',
        'Are you sure you want to cancel your application?',
        [
          {
            text: 'No',
            style: 'cancel'
          },
          { text: 'OK', onPress: () => this.props.navigation.navigate("Home") }
        ],
        { cancelable: true }
      );
    } else {
      currentStep = currentStep <= 1 ? 1 : currentStep - 1;
      this.setState(() => ({ currentStep }));
      this.showOccupiedDates();
    }
  };
  onStep1Submit = async (date) => {
    await this.setState(() => ({ date }));
    const appointments_on_date =
      this.props.appointments.filter(
        (appointment) => appointment.date.toString() == date.toString()
      ) || [];
    await this.setState(() => ({ appointments_on_date }));
    await this.setState(() => ({ currentStep: 2 }));
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
      client_id: this.state.user.uid,
      client_name: this.state.user.fullName,
      consultant_id: this.state.consultant_id,
      consultant_name: this.props.singleConsultant.fullName,
      symptoms: this.state.symptoms,
      files,
      status: "Pending",
      isCancelled: false,
      created_at: moment().format('YYYY-MM-DD HH:mm:ss').toString()
    };
    await this.props.bookAppointment(appointment);
    if (this.props.error) {
      console.log(this.props.error);
      Alert.alert(
        'Oops!',
        `There was a problem in booking. \n Details: ${this.props.error}`,
        [
          {
            text: 'OK',
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
    } else if (!this.props.error) {
      Alert.alert(
        'Booking Successful',
        'Thank you for booking',
        [
          {
            text: 'OK',
            onPress: () => {
              this.props.navigation.navigate("Home");
              this.props.navigation.navigate("Calendar1");
            }
          }
        ],
        { cancelable: true }
      );
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
          _prev={this._prev}
          consultant={this.props.singleConsultant}
          daysAvailable={this.state.daysAvailable}
        />
        <BookPage2_Time
          appointments_on_date={this.state.appointments_on_date}
          currentStep={this.state.currentStep}
          onStep2Submit={this.onStep2Submit}
          date={this.state.date}
          location={this.state.location}
          time_start={this.state.time_start}
          time_end={this.state.time_end}
          _prev={this._prev}
          consultant={this.props.singleConsultant}
        />
        <BookPage3_Form
          currentStep={this.state.currentStep}
          onStep3SymptomsChange={this.onStep3SymptomsChange}
          onStep3FilesChange={this.onStep3FilesChange}
          onStep3Submit={this.onStep3Submit}
          symptoms={this.state.symptoms}
          _prev={this._prev}
          consultant={this.props.singleConsultant}
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
          _prev={this._prev}
          consultant={this.props.singleConsultant}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loading: state.appointments.loading,
  appointments: state.appointments.items,
  appointment: state.appointments.item,
  error: state.appointments.error,
  singleConsultant: state.users.singleConsultant
});

const mapDispatchToProps = (dispatch) => ({
  bookAppointment: (data) => dispatch(bookAppointment(data)),
  getAppointments: (client_id, consultant_id) =>
    dispatch(getAppointments(client_id, consultant_id)),
  getConsultant: (uid) => dispatch(getConsultant(uid))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);
