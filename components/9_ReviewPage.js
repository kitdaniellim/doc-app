import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

import StarRating from 'react-native-star-rating';
import moment from "moment";
import { reviewStyles, calendarStyles } from '../styles/styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getReviewedBy } from '../actions/reviews';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    }
  }

  async componentDidMount() {
    try {
      const user = JSON.parse(
        await AsyncStorage.getItem("user")
      );
      console.log(user)
      this.props.getReviewedBy(user.uid);
    } catch (e) {
      console.log(`Review Page Error! Details: ${e}`);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props !== prevProps) {
      // console.log(this.props)
      // const reviews = [];
      // this.props.results.forEach((item) => {
      //   reviews.push(item);
      // })
      // this.setState(() => ({ reviews : reviews}));

    }
  }



  Edit = (uid) => {
    console.log('Clicked Edit');
    console.log(uid)
    this.props.navigation.navigate('EditReview', { review_uid: uid })
  }

  // Profile = async (uid) => {
  //   await this.props.getConsultant(uid);
  //   await this.props.getReviews(uid);

  //   if (this.props.singleConsultant.office_details != null) {
  //     this.props.navigation.navigate('Profile', { singleConsultant: this.props.singleConsultant, reviews: this.props.reviews })
  //   }
  // }

  render() {
    // console.log('hellooooooo')
    // console.log(this.state.reviews)
    // console.log('hellooooooo')
    return (
      <View style={reviewStyles.container}>
        <View style={reviewStyles.header_container}>
          <View style={reviewStyles.header_text_container}>
            <Text style={reviewStyles.header_text_bold}>YOUR REVIEWS</Text>
          </View>
        </View>
        <View style={reviewStyles.scaffold}>
          <View style={calendarStyles.date_container}>
            {this.props.client_reviews.length == 0 ?
              <View style={calendarStyles.no_appointments_scaffold}>
                <View style={calendarStyles.date_details_button_container}>
                  <Text style={calendarStyles.no_appointments_text}>You have no reviews yet</Text>
                </View>
              </View>
              // <View style={reviewStyles.review_container}>
              //   <View style={reviewStyles.review_details_container}>
              //     <View style={calendarStyles.date_details_button_container}>
              //       <Text style={calendarStyles.no_appointments_text}>You have no reviews yet</Text>
              //     </View>
              //   </View>
              // </View>

              :
              <FlatList
                data={this.props.client_reviews}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.uid}
                renderItem={({ item }) => (
                  <View style={reviewStyles.review_container}>
                    <View style={reviewStyles.review_details_container}>
                      <View>
                        <Text style={reviewStyles.review_details_header}>You to {item.reviewee_name}</Text>
                        <View style={{ alignItems: 'flex-start' }}>
                          <StarRating
                            disabled={true}
                            maxStars={5}
                            rating={item.rating}
                            fullStarColor='#FDBB3B'
                            starSize={13}
                            starStyle={{ marginRight: 10 }}
                          />
                        </View>
                        <Text style={reviewStyles.review_details_header}>
                          {moment(item.created_at, "YYYY-MM-DD HH:mm:ss")
                            .format("dddd") +
                            ", " +
                            moment(item.created_at, "YYYY-MM-DD HH:mm:ss")
                              .format("MMMM DD, YYYY")}
                        </Text>
                      </View>
                      <View style={{ justifyContent: 'center', marginBottom: 8 }}>
                        <TouchableOpacity
                          activeOpacity={0.6}
                          onPress={() => { this.Edit(item.uid) }}
                          style={reviewStyles.review_details_submit_button}
                        >
                          <Text style={reviewStyles.date_details_button_label}>Edit</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={reviewStyles.review_textinput_container}>
                      <Text style={reviewStyles.review_textinput}>
                        {item.comment}
                      </Text>
                    </View>
                  </View>
                )}
              />
            }
          </View>
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getReviewedBy }, dispatch)
}

const mapStateToProps = state => {
  return {
    client_reviews: state.reviews.client_reviews
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Review);



