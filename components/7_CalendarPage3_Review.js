import React from 'react';
import { connect } from "react-redux";
import { Alert, Text, TextInput, ToastAndroid, View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { calendarStyles, globalStyles } from '../styles/styles';
import { addReview } from '../actions/reviews';
import { updateAppointmentStatus } from "../actions/appointments";
import moment from "moment";

class CalendarPage3_Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0,
            review: ""
        }
    }
    close = () => {
        this.props.navigation.goBack()
    }
    submit = async () => {
        if (this.state.starCount == 0 || this.state.review == "") {
            Alert.alert(
                'Invalid Input!',
                `Please rate and write a review`,
                [
                    {
                        text: 'Close',
                        style: 'cancel'
                    }
                ],
                { cancelable: true }
            );
        } else {
            const data = {
                rating: this.state.starCount,
                comment: this.state.review,
                review_to: this.props.route.params.item.consultant_id,
                reviewee_name: this.props.route.params.item.consultant_name,
                reviewer_id: this.props.route.params.item.client_id,
                reviewer_name: this.props.route.params.item.client_name,
                created_at: moment().format('YYYY-MM-DD HH:mm:ss').toString()
            }
            await this.props.addReview(data);
            await this.props.updateAppointmentStatus(this.props.route.params.item.uid, "Reviewed");
            //Review addnotif
            if (!this.props.error) {
                Alert.alert(
                    'Review Added Successfully',
                    'Thank you for reviewing this appointment',
                    [
                        {
                            text: 'OK',
                            onPress: () => this.props.navigation.navigate("Calendar1")
                        }
                    ],
                    { cancelable: true }
                );
            } else {
                Alert.alert(
                    'Oh no!',
                    `Error in adding review. {\n} Details: ${this.props.error}`,
                    [
                        {
                            text: 'Close',
                            style: 'cancel'
                        }
                    ],
                    { cancelable: true }
                );
            }

        }
    }
    render() {
        return (
            <View style={calendarStyles.container}>
                <View style={calendarStyles.header_container}>
                    <View style={calendarStyles.header_text_container}>
                        <Text style={calendarStyles.header_text_bold}>WRITE A REVIEW</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={this.close}
                        style={calendarStyles.header_icon_container}
                    >
                        <Icon style={globalStyles.icon_global} name="times" size={18} />
                    </TouchableOpacity>
                </View>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                    style={calendarStyles.scaffold}
                >
                    <View style={calendarStyles.date_container}>
                        <View style={calendarStyles.date_details_container}>
                            <View style={calendarStyles.date_header_container}>
                                <Text style={calendarStyles.date_details_header}>
                                    {moment(this.props.route.params.item.date)
                                        .format("dddd")
                                        .toUpperCase() +
                                        ", " +
                                        moment(this.props.route.params.item.date)
                                            .format("MMMM DD YYYY")
                                            .toUpperCase()}
                                </Text>
                            </View>
                            <View style={calendarStyles.date_details_scaffold}>
                                <View style={calendarStyles.date_details_text_container}>
                                    <Text style={calendarStyles.date_details_text}>
                                        Appointment with{" "}
                                        {this.props.route.params.item.consultant_name} {"\n"}
                                        {this.props.route.params.item.location} {"\n"}
                                        {moment(this.props.route.params.item.time_start, "HH:mm").format(
                                            "h:mm A"
                                        )} - {moment(this.props.route.params.item.time_end, "HH:mm").format("h:mm A")}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={calendarStyles.review_container}>
                        <View style={calendarStyles.review_details_container}>
                            <View>
                                <Text style={calendarStyles.review_details_header}>You to {this.props.route.params.item.consultant_name}</Text>
                                <StarRating
                                    disabled={false}
                                    maxStars={5}
                                    rating={this.state.starCount}
                                    selectedStar={(rating) => this.setState(() => ({ starCount: rating }))}
                                    fullStarColor='#FDBB3B'
                                    starSize={13}
                                    starStyle={{}}
                                />
                            </View>
                            <TouchableOpacity
                                activeOpacity={0.6}
                                onPress={this.submit}
                                style={calendarStyles.review_details_submit_button}
                            >
                                <Text style={calendarStyles.date_details_button_label}>Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={calendarStyles.review_textinput_container}>
                            <TextInput
                                placeholder="Write your review here!"
                                placeholderTextColor="#8B8787"
                                multiline
                                style={calendarStyles.review_textinput}
                                onChangeText={text => text.length < 255 && this.setState(() => ({ review: text }))}
                                value={this.state.review}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    loading: state.reviews.loading,
    error: state.reviews.error,
    item: state.reviews.item
});

const mapDispatchToProps = (dispatch) => ({
    addReview: (data) => dispatch(addReview(data)),
    updateAppointmentStatus: (appointment_id, status, reason) => dispatch(updateAppointmentStatus(appointment_id, status, reason))
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarPage3_Review);