import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { connect } from "react-redux";
import { Calendar } from "react-native-calendars";
import { calendarStyles, globalStyles } from "../styles/styles";
import { getUserAppointments } from "../actions/appointments";
import AsyncStorage from "@react-native-async-storage/async-storage";

class CalendarPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      upcoming_dates: [],
      finished_dates: [],
      occupied_dates_obj: {},
    };
  }

  async componentDidMount() {
    try {
      const user = JSON.parse(
        await AsyncStorage.getItem("user")
      );
      if (!user) {
        this.props.navigation.navigate('Login');
      } else {
        let upcoming_dates = [],
          finished_dates = [];
        await this.props.getUserAppointments(user.uid, user.userType);
        setTimeout(async () => {
          if (!this.props.loading && this.props.appointments.length > 0) {
            // console.log(this.props.appointments.length);
            this.props.appointments.sort((a, b) => a.created_at - b.created_at);
            await this.props.appointments.map((appointment) => {
              if (
                appointment.status == "Pending" ||
                appointment.status == "Approved"
              ) {
                upcoming_dates.push(appointment.date);
              } else if (appointment.status == "Done" || appointment.status == "Reviewed") {
                !upcoming_dates.includes(appointment.date) &&
                  finished_dates.push(appointment.date);
              }
            });
            upcoming_dates = Array.from(new Set(upcoming_dates));
            finished_dates = Array.from(new Set(finished_dates));
            upcoming_dates.sort((a, b) => a - b);
            finished_dates.sort((a, b) => a - b);
            this.setState(() => ({ upcoming_dates }));
            this.setState(() => ({ finished_dates }));
            this.showOccupiedDates();
          }
        }, 2000);
      }
    } catch (e) {
      console.log(`Error! Details: ${e}`);
    }
  }

  // async componentDidUpdate(prevProps) {
  //   if (this.props.appointments !== prevProps.appointments) {
  //     try {
  //       const user = JSON.parse(
  //         await AsyncStorage.getItem("user")
  //       );
  //       if (!user) {
  //         this.props.navigation.navigate('Login');
  //       } else {
  //         let upcoming_dates = [],
  //           finished_dates = [];
  //         await this.props.getUserAppointments(user.uid, user.userType);
  //         setTimeout(async () => {
  //           if (!this.props.loading && this.props.appointments.length > 0) {
  //             // console.log(this.props.appointments.length);
  //             this.props.appointments.sort((a, b) => a.created_at - b.created_at);
  //             await this.props.appointments.map((appointment) => {
  //               if (
  //                 appointment.status == "Pending" ||
  //                 appointment.status == "Approved"
  //               ) {
  //                 upcoming_dates.push(appointment.date);
  //               } else if (appointment.status == "Done" || appointment.status == "Reviewed") {
  //                 !upcoming_dates.includes(appointment.date) &&
  //                   finished_dates.push(appointment.date);
  //               }
  //             });
  //             upcoming_dates = Array.from(new Set(upcoming_dates));
  //             finished_dates = Array.from(new Set(finished_dates));
  //             upcoming_dates.sort((a, b) => a - b);
  //             finished_dates.sort((a, b) => a - b);
  //             this.setState(() => ({ upcoming_dates }));
  //             this.setState(() => ({ finished_dates }));
  //             this.showOccupiedDates();
  //           }
  //         }, 2000);
  //       }
  //     } catch (e) {
  //       console.log(`Error! Details: ${e}`);
  //       this.props.navigation.navigate('Login');
  //     }
  //   }
  // }

  showOccupiedDates = async () => {
    let occupied_dates_obj = {};
    this.state.upcoming_dates.forEach((val) => {
      occupied_dates_obj[val] = {
        selected: true,
        selectedColor: "#FCD034",
      };
    });
    this.state.finished_dates.forEach((val) => {
      occupied_dates_obj[val] = {
        selected: true,
        selectedColor: "#56EC65",
      };
    });
    this.setState(() => ({ occupied_dates_obj }));
    // console.log(this.state.occupied_dates_obj);
  };

  onDayPress = async (date) => {
    try {
      const appointments = this.props.appointments.filter(
        (appointment) => appointment.date == date
      );
      await AsyncStorage.removeItem("appointments");
      await AsyncStorage.setItem("appointments", JSON.stringify(appointments));
      this.props.navigation.navigate("Calendar2", {
        date,
      });
    } catch (e) {
      console.log(`Error! Details: ${e}`);
    }
  };

  render() {
    // console.log('showing state')
    // console.log(this.state)
    // console.log('--------------')
    return (
      <View style={calendarStyles.container}>
        <View style={calendarStyles.header_container}>
          <View style={calendarStyles.header_text_container}>
            <Text style={calendarStyles.header_text_bold}>CALENDAR</Text>
          </View>
        </View>
        <View style={calendarStyles.scaffold}>
          <View style={calendarStyles.calendar_container}>
            {this.props.loading ? (
              <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]}>
                <ActivityIndicator size="large" color="#56EC65" />
              </View>
            ) : (
              <Calendar
                onDayPress={(day) => {
                  this.onDayPress(day.dateString);
                }}
                //36 months
                pastScrollRange={36}
                //24 months
                futureScrollRange={24}
                style={{
                  borderRadius: 15,
                }}
                markedDates={this.state.occupied_dates_obj}
                theme={{
                  backgroundColor: "#fff",
                  calendarBackground: "#fff",
                  textSectionTitleColor: "#8B8787",
                  todayTextColor: '#19BAB9',
                  dayTextColor: "black",
                  textDayFontSize: 10,
                  textMonthFontSize: 14,
                  textDayHeaderFontSize: 12,
                  "stylesheet.day.basic": {
                    base: {
                      width: 25,
                      height: 25,
                      alignItems: "center",
                      borderRadius: 0,
                    },
                  },
                }}
              />
            )}
          </View>
          <View style={calendarStyles.calendar_legend_container}>
            <Text style={calendarStyles.calendar_legend_label}>Legend:</Text>
            <View style={calendarStyles.calendar_legend_text_container}>
              <View style={calendarStyles.calendar_legend_finished_hue}></View>
              <Text style={calendarStyles.calendar_legend_text}>
                {" "}
                - Finished Appointments
              </Text>
            </View>
            <View style={calendarStyles.calendar_legend_text_container}>
              <View style={calendarStyles.calendar_legend_upcoming_hue}></View>
              <Text style={calendarStyles.calendar_legend_text}>
                {" "}
                - Upcoming Appointments
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// const markedDates = {
//   //Finished Appointments
//   '2020-06-10': { selected: true, selectedColor: '#56EC65' },
//   '2020-06-11': { selected: true, selectedColor: '#56EC65' },

//   //Upcoming Appointments
//   '2020-06-12': { selected: true, selectedColor: '#FCD034' },
//   '2020-06-13': { selected: true, selectedColor: '#FCD034' },
// }

const mapStateToProps = (state) => ({
  loading: state.appointments.loading,
  appointments: state.appointments.items,
  error: state.appointments.error,
});

const mapDispatchToProps = (dispatch) => ({
  getUserAppointments: (id, type) => dispatch(getUserAppointments(id, type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage);
