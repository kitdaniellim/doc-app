import React from 'react';
import { ActivityIndicator, Text, FlatList, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Calendar } from 'react-native-calendars';
import moment from "moment";
import { calendarStyles, globalStyles } from '../styles/styles';

class BookPage1_Date extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AVAILABLE_DAYS: [],
      markedDates: this.getDaysInMonth(moment().month(), moment().year(), [])
    }
  }

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      // console.log(this.props.daysAvailable)
      // console.log(prevProps.daysAvailable)
      const AVAILABLE_DAYS = [];
      this.props.daysAvailable.forEach((item) => {
        AVAILABLE_DAYS.push(item.day);
      })

      // console.log('============AVAILABLE DAYS BRO==============');
      this.setState(() => ({
        AVAILABLE_DAYS: AVAILABLE_DAYS
      }));
      // console.log(this.state.AVAILABLE_DAYS);
      // console.log('===========================================');

      this.setState(() => ({
        markedDates: this.getDaysInMonth(moment().month(), moment().year(), AVAILABLE_DAYS)
      }));
    }
  }

  getDaysInMonth(month, year, days) {
    let pivot = moment().month(month).year(year).startOf('month')
    const end = moment().month(month).year(year).endOf('month')

    let dates = {}
    const available = { selected: true, selectedColor: '#56EC65' }
    while (pivot.isBefore(end)) {
      days.forEach((day) => {
        // console.log(pivot.day(day).format("YYYY-MM-DD"));
        if (pivot.day(day).isAfter(new Date())) {
          dates[pivot.day(day).format("YYYY-MM-DD")] = available
        }
      })
      pivot.add(7, 'days')
    }

    return dates
  }

  render() {
    if (this.props.currentStep !== 1) {
      return null;
    } else {
      // console.log('showingBOOK 1 props')
      // console.log(this.props)
      // console.log('------')
      return (
        <React.Fragment>
          <View style={calendarStyles.header_container}>
            <View style={calendarStyles.header_text_container}>
              <Text style={calendarStyles.header_text_bold}>AVAILABLE DATES</Text>
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
            <View style={calendarStyles.calendar_container}>
              {/* {this.props.occupied_dates_obj === undefined ? (
                <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]}>
                  <ActivityIndicator size="large" color="#00ff00" />
                </View>
              ) : ( */}
              <Calendar
                current={new Date()}
                minDate={new Date()}
                // disabledByDefault
                onDayPress={(day) => { this.props.onStep1Submit(day.dateString) }}
                //36 months
                pastScrollRange={36}
                //24 months
                futureScrollRange={24}
                style={{
                  borderRadius: 15,
                }}
                markedDates={this.state.markedDates}
                onMonthChange={(date) => {
                  this.setState({
                    markedDates: this.getDaysInMonth(date.month - 1, date.year, this.state.AVAILABLE_DAYS)
                  })
                }}
                // disableAllTouchEventsForDisabledDays={true}
                theme={{
                  backgroundColor: '#fff',
                  calendarBackground: '#fff',
                  textSectionTitleColor: '#8B8787',
                  todayTextColor: '#19BAB9',
                  dayTextColor: 'black',
                  textDayFontSize: 10,
                  textMonthFontSize: 14,
                  textDayHeaderFontSize: 12,
                  'stylesheet.day.basic': {
                    'base': {
                      width: 25,
                      height: 25,
                      alignItems: 'center',
                      borderRadius: 0,
                    }
                  }
                }}
              // enableSwipeMonths={true}
              />
              {/* )} */}
            </View>
            <View style={calendarStyles.calendar_legend_container}>
              <Text style={calendarStyles.calendar_legend_label}>Legend:</Text>
              <View style={calendarStyles.calendar_legend_text_container}>
                <View style={calendarStyles.calendar_legend_finished_hue}></View>
                <Text style={calendarStyles.calendar_legend_text}> - Available Days</Text>
              </View>
              <FlatList
                keyExtractor={(item, index) => index.toString()}
                data={this.props.daysAvailable}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) =>
                  <View style={{ width: '50%' }}>
                    <Text style={calendarStyles.calendar_legend_text}>{item.day} ({item.day.substr(0, 3)})</Text>
                  </View>
                }
              />
            </View>
            {/* <View style={calendarStyles.calendar_legend_container}>
              <Text style={calendarStyles.calendar_legend_label}>Legend:</Text>
              <View style={calendarStyles.calendar_legend_text_container}>
                <View style={calendarStyles.calendar_legend_finished_hue}></View>
                <Text style={calendarStyles.calendar_legend_text}> - Available Days</Text>
              </View>
              <View style={calendarStyles.calendar_legend_text_container}>
                <View style={calendarStyles.calendar_legend_unavailable_hue}></View>
                <Text style={calendarStyles.calendar_legend_text}> - Occupied Date</Text>
              </View>
            </View> */}
          </View>
        </React.Fragment>
      );
    }
  }
}

export default BookPage1_Date;