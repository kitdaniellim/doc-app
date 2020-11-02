import React from "react";
import { Alert, Text, View, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { calendarStyles, globalStyles } from "../styles/styles";
import moment from "moment";

class Book2_Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      current_date: moment().format("YYYY-MM-DD"),
      current_time: moment().format("HH:mm").toString(),
      locations: []
    };
    this.setup = this.setup.bind(this);
  }
  async componentDidUpdate(prevProps, prevState) {
    if (this.props.date != prevProps.date) {
      await this.setState(() => ({ locations: [], selected: [] }));
      this.setup();
    }
  }
  setup = async () => {
    let selected = [], locations_list = [], officeTime = [], count = 1;
    //consultant time_start and time_end is set here
    const day = moment(this.props.date).day();
    let weekDay;
    switch (day) {
      case 0:
        weekDay = "Sunday"; break;
      case 1:
        weekDay = "Monday"; break;
      case 2:
        weekDay = "Tuesday"; break;
      case 3:
        weekDay = "Wednesday"; break;
      case 4:
        weekDay = "Thursday"; break;
      case 5:
        weekDay = "Friday"; break;
      case 6:
        weekDay = "Saturday"; break;
    }
    console.log(`Weekday is ${weekDay}`)
    this.props.consultant.office_details.map((ind_od) => {
      ind_od.office_day.map((ind_day) => {
        if (ind_day == weekDay) {
          let timeDetails = {
            time_start: moment(moment(ind_od.office_hour_from.toUpperCase(), "HH:mm A").format("HH:mm").toString(), "HH:mm"),
            time_end: moment(moment(ind_od.office_hour_to.toUpperCase(), "HH:mm A").format("HH:mm").toString(), "HH:mm"),
            location: ind_od.office_location
          }
          officeTime.push(timeDetails);
          const index = this.state.locations.indexOf(ind_od.office_location);
          index == -1 && locations_list.push(ind_od.office_location);
        }
      });
    });
    if (officeTime.length > 0) {
      console.log(officeTime);
      await this.setState(() => ({ locations: locations_list }));
      console.log(this.state.locations);
      officeTime.map((ind_ot) => {
        console.log(`Start: ${ind_ot.time_start}, End: ${ind_ot.time_end}`);
        while (ind_ot.time_start.isBefore(ind_ot.time_end)) {
          let schedule = {
            key: count,
            time_start: ind_ot.time_start.format("HH:mm").toString(),
            time_end: ind_ot.time_start.add('15', 'minutes').format("HH:mm").toString(),
            location: ind_ot.location
          }
          selected.push(schedule);
          count++;
        }
      });
      //console.log(selected);
      await this.setState(() => ({ selected }));

      console.log(this.state.selected.length);
    } else {
      Alert.alert(
        'Sorry!',
        `No schedule is available on this day.`,
        [
          {
            text: 'OK',
            style: 'cancel',
            onPress: () => this.props._prev()
          }
        ],
        { cancelable: true }
      );
    }
  }
  getUTCValue = (time) => {
    return moment.utc(time, "hh:mm").format("HH:mm").toString();
  };
  isWithin = (value, min, max) => {
    if (value >= min && value <= max) {
      return true;
    } else {
      return false;
    }
  };
  render() {
    if (this.props.currentStep !== 2) {
      return null;
    } else {
      return (
        <React.Fragment>
          <View style={calendarStyles.header_container}>
            <View style={calendarStyles.header_text_container}>
              <Text style={calendarStyles.header_text_bold}>AVAILABLE TIME SLOTS</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this.props._prev}
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
                  <Text style={calendarStyles.date_details_header}>{this.props.date
                    ? moment(this.props.date).format("dddd").toUpperCase() +
                    ", " +
                    moment(this.props.date)
                      .format("MMMM DD YYYY")
                      .toUpperCase()
                    : "No Date Selected"}</Text>
                </View>
                {
                  this.state.locations.map(ind_loc => {
                    return (
                      <View style={calendarStyles.slot_list_container} key={ind_loc}>
                        <View style={calendarStyles.date_header_container}>
                          <Text style={calendarStyles.date_details_header}>LOCATION: {ind_loc}</Text>
                        </View>

                        {
                          this.state.selected.map((item) => {
                            let canReturn = true;
                            if (
                              this.state.current_date.toString().trim() ==
                              this.props.date.toString().trim()
                            ) {
                              if (
                                this.isWithin(
                                  this.state.current_time,
                                  this.getUTCValue(item.time_start),
                                  this.getUTCValue(item.time_end)
                                ) ||
                                this.state.current_time >=
                                this.getUTCValue(item.time_end) ||
                                moment(this.state.current_time, "HH:mm")
                                  .add(30, "minutes")
                                  .format("HH:mm")
                                  .toString() > this.getUTCValue(item.time_start)
                              ) {
                                console.log(`Slot not available: ${moment(item.time_start, "HH:mm").format("h:mm A")}-${moment(item.time_end, "HH:mm").format("h:mm A")}`);
                                return null;
                              }
                            }
                            if (this.props.appointments_on_date.length > 0) {
                              this.props.appointments_on_date.map((appointment) => {
                                const time_start = this.getUTCValue(
                                  appointment.time_start
                                );
                                const time_end = this.getUTCValue(appointment.time_end);
                                if (
                                  this.isWithin(
                                    this.getUTCValue(item.time_start),
                                    time_start,
                                    time_end
                                  ) ||
                                  this.isWithin(
                                    this.getUTCValue(item.time_end),
                                    time_start,
                                    time_end
                                  )
                                ) {
                                  canReturn = false;
                                }
                              });
                              if (!canReturn) {
                                console.log(`Slot not available: ${moment(item.time_start, "HH:mm").format("h:mm A")}-${moment(item.time_end, "HH:mm").format("h:mm A")}`);
                                return null;
                              }
                              if (item.location == ind_loc) {
                                return (
                                  <View
                                    key={item.key.toString()}
                                    style={calendarStyles.date_details_scaffold}
                                  >
                                    <View
                                      style={calendarStyles.date_details_text_container}
                                    >
                                      <View>
                                        <Text style={calendarStyles.date_details_text}>
                                          SLOT {"\n"}
                                          {moment(item.time_start, "HH:mm").format(
                                            "h:mm A"
                                          )}{" "}
                                  -{" "}
                                          {moment(item.time_end, "HH:mm").format("h:mm A")}
                                        </Text>
                                      </View>
                                    </View>
                                    <View
                                      style={calendarStyles.date_details_button_container}
                                    >
                                      <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={() => {
                                          this.props.onStep2Submit(item);
                                        }}
                                        style={
                                          this.props.location == ind_loc &&
                                            this.props.time_start == item.time_start &&
                                            this.props.time_end == item.time_end
                                            ? calendarStyles.date_details_button_review_active
                                            : calendarStyles.date_details_button_review
                                        }
                                      >
                                        <Text
                                          style={
                                            this.props.location == ind_loc &&
                                              this.props.time_start == item.time_start &&
                                              this.props.time_end == item.time_end
                                              ? calendarStyles.date_details_button_label_active
                                              : calendarStyles.date_details_button_label
                                          }
                                        >
                                          Choose
                                </Text>
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                );
                              }
                            } else {
                              if (item.location == ind_loc) {
                                return (
                                  <View
                                    key={item.key.toString()}
                                    style={calendarStyles.date_details_scaffold}
                                  >
                                    <View
                                      style={calendarStyles.date_details_text_container}
                                    >
                                      <View>
                                        <Text style={calendarStyles.date_details_text}>
                                          SLOT {"\n"}
                                          {moment(item.time_start, "HH:mm").format(
                                            "h:mm A"
                                          )}{" "}
                                -{" "}
                                          {moment(item.time_end, "HH:mm").format("h:mm A")}
                                        </Text>
                                      </View>
                                    </View>
                                    <View
                                      style={calendarStyles.date_details_button_container}
                                    >
                                      <TouchableOpacity
                                        activeOpacity={0.6}
                                        onPress={() => {
                                          this.props.onStep2Submit(item);
                                        }}
                                        style={
                                          this.props.location == ind_loc &&
                                            this.props.time_start == item.time_start &&
                                            this.props.time_end == item.time_end
                                            ? calendarStyles.date_details_button_review_active
                                            : calendarStyles.date_details_button_review
                                        }
                                      >
                                        <Text
                                          style={
                                            this.props.location == ind_loc &&
                                              this.props.time_start == item.time_start &&
                                              this.props.time_end == item.time_end
                                              ? calendarStyles.date_details_button_label_active
                                              : calendarStyles.date_details_button_label
                                          }
                                        >
                                          Choose
                              </Text>
                                      </TouchableOpacity>
                                    </View>
                                  </View>
                                )
                              };
                            }
                          })
                        }
                      </View>
                    )
                  })

                }
              </ScrollView>
            </View>
          </View>
        </React.Fragment>
      );
    }
  }
}

export default Book2_Time;

