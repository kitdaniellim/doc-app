import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
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
      //static consultant data
      consultant: {
        location: "IT Park, Apas",
        time_start: moment("07:30", "HH:mm"),
        time_end: moment("22:30", "HH:mm"),
      }
    };
  }
  componentDidMount() {
    let selected = [], count = 1;
    //consultant time_start and time_end is set here
    let time_start = this.state.consultant.time_start;
    let time_end = this.state.consultant.time_end;
    while (time_start.isBefore(time_end)) {
      let schedule = {
        key: count,
        time_start: time_start.format("HH:mm").toString(),
        time_end: time_start.add('15', 'minutes').format("HH:mm").toString(),
      }
      selected.push(schedule);
      count++;
    }
    this.setState(() => ({ selected }));
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
                <View style={calendarStyles.date_header_container}>
                  <Text style={calendarStyles.date_details_header}>LOCATION: {this.state.consultant.location}</Text>
                </View>
                {this.state.selected.map((item) => {
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
                      return null;
                    }
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
                              this.props.location == this.state.consultant.location &&
                                this.props.time_start == item.time_start &&
                                this.props.time_end == item.time_end
                                ? calendarStyles.date_details_button_review_active
                                : calendarStyles.date_details_button_review
                            }
                          >
                            <Text
                              style={
                                this.props.location == this.state.consultant.location &&
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
                  } else {
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
                              this.props.location == this.state.consultant.location &&
                                this.props.time_start == item.time_start &&
                                this.props.time_end == item.time_end
                                ? calendarStyles.date_details_button_review_active
                                : calendarStyles.date_details_button_review
                            }
                          >
                            <Text
                              style={
                                this.props.location == this.state.consultant.location &&
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
                })}
              </ScrollView>
            </View>
          </View>
        </React.Fragment>
      );
    }
  }
}

export default Book2_Time;

