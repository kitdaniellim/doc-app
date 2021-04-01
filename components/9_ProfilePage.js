import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { profileStyles, globalStyles, calendarStyles } from '../styles/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getConsultant } from '../actions/users';
import { getReviews } from '../actions/reviews';
import AsyncStorage from '@react-native-community/async-storage';

class Profile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      consultant: {},
      reviews: [],
      average: 0,
      office: [],
    }
  }

  async componentDidMount() {
    try {
      const user = JSON.parse(
        await AsyncStorage.getItem("user")
      );
      this.setState(() => ({ user }));
      if (user.userType === "CONSULTANT") {
        await this.props.getConsultant(user.uid)
        await this.props.getReviews(user.uid);
      }
    } catch (e) {
      console.log(`Error! Details: ${e}`);
    }
  }

  getRatingAverage = (reviews) => {
    let sum = 0, result = 0;
    reviews.map(item => {
      sum += item.rating;
    });
    result = sum / reviews.length;

    return result;
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let consultant = this.props.singleConsultant;
      let reviews = this.props.reviews;
      let average = this.getRatingAverage(this.props.reviews);
      let office;
      if (consultant !== undefined) {
        office = Array.from(consultant.office_details);
      }
      // let office = Array.from(consultant.office_details);

      this.setState(() => ({
        consultant: consultant,
        reviews: reviews,
        average: average,
        office: office
      }))
    }
  }

  Edit = (uid) => {
    if (uid) {
      this.props.getConsultant(uid);
      this.props.navigation.navigate('EditProfile_1');
    }
  }

  BackToProfile = async () => {
    if (this.state.user.userType === "CONSULTANT") {
      await this.props.getConsultant(this.state.user.uid);
      await this.props.getReviews(this.state.user.uid);
      this.props.navigation.replace('Profile');
    } else {
      this.props.navigation.goBack();
    }
  };

  List({ items, fallback }) {
    if (!items || items.length === 0) {
      return fallback
    } else {
      return items.map(item => {
        return <View style={profileStyles.profile_hours_details}>
          <Text> {items.office_location} {"\n"}
            {item.office_hour_from} - {item.office_hour_to}

          </Text>
        </View>
      })
    }

  }

  Paypal = (id) => {

    // this.props.navigation.navigate('Paypal', {
    //   consultant_id: id
    // });

    this.props.navigation.navigate('BookPage', {
      id
    });

  }

  render() {
    console.log('SHOWING PROFILE PROPS============')
    console.log(this.props.singleConsultant)
    console.log('END OF PROFILE PROPS============')
    return (
      <View style={profileStyles.container}>
        <View style={profileStyles.header_container}>
          <View style={profileStyles.header_text_container}>
            <Text style={profileStyles.header_text_bold}>PROFILE: {this.state.consultant.fullName} </Text>
          </View>
          {this.state.user.uid !== this.state.consultant.uid ?
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this.BackToProfile}
              style={profileStyles.header_icon_container}
            >
              <Icon style={globalStyles.icon_global} name="times" size={18} />
            </TouchableOpacity>
            : null}
        </View>
        <View style={profileStyles.scaffold}>
          <View style={profileStyles.profile_container}>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                padding: 14,
                marginTop: 10,
                borderRadius: 15,
                backgroundColor: '#fff',
              }}
            >
              {/* {this.props.loading ? (
                <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]}>
                  <ActivityIndicator size="large" color="#00ff00" />
                </View>
              ) : (
                <View> */}
              <View style={profileStyles.profile_officeimg_container}>
                <Image
                  source={{ uri: this.state.consultant.officeImage }}
                  style={profileStyles.profile_officeimg}
                />
              </View>
              <View style={profileStyles.profile_b_info_container}>
                <Text style={profileStyles.profile_b_info_header}>Basic Information</Text>
                {/* {this.props.loading ? (
                  <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]}>
                    <ActivityIndicator size="large" color="#00ff00" />
                  </View>
                ) : ( */}
                <View style={profileStyles.profile_b_info_details_container}>
                  <View style={profileStyles.profile_b_info_profileimg_container}>
                    <Image
                      source={{ uri: this.state.consultant.profilePicture }}
                      style={profileStyles.profile_b_info_profileimg}
                    />
                  </View>
                  <View style={profileStyles.profile_b_info_details}>
                    {this.state.consultant.userSpecialty ?
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                          Specialty: {this.state.consultant.userSpecialty}
                        </Text>
                      </View>
                      :
                      null
                    }
                    {this.state.consultant.userSubSpecialty ?
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                          Sub-specialty: {this.state.consultant.userSubSpecialty}
                        </Text>
                      </View>
                      :
                      null
                    }
                    {this.state.consultant.userSpecialty ?
                      <View style={{ fullName: 'row' }}>
                        <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                          Name: {this.state.consultant.fullName}
                        </Text>
                      </View>
                      :
                      null
                    }
                    {this.state.consultant.email ?
                      <View style={{ flexDirection: 'row' }}>
                        <Text style={{ flex: 1, flexWrap: 'wrap' }}>
                          Email: {this.state.consultant.email}
                        </Text>
                      </View>
                      :
                      null
                    }
                  </View>
                </View>
                {/* )} */}

              </View>

              <View style={profileStyles.profile_rating_container}>
                <Text style={profileStyles.profile_rating_header}>Overall Rating</Text>
                <View style={profileStyles.profile_rating_details}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={this.state.average}
                    selectedStar={() => { }}
                    fullStarColor='#FDBB3B'
                    starSize={12}
                    starStyle={{}}
                  />
                </View>
              </View>
              <View style={profileStyles.profile_hours_container}>
                <Text style={profileStyles.profile_hours_header}>Office Hours</Text>
                {/* {this.props.loading ? (
                  <View style={[globalStyles.loading_container, globalStyles.loading_horizontal]}>
                    <ActivityIndicator size="large" color="#00ff00" />
                  </View>
                ) : (

                  <View style={profileStyles.divider} />
                )} */}

                {
                  this.state.office.map((data, i) => {
                    return (
                      <View key={i} style={profileStyles.profile_hours_details}>
                        <View style={{ flex: 1 }}>
                          <Text>
                            {data.office_location}{"\n"}
                            {data.office_hour_from} - {data.office_hour_to}
                          </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                          <Text>Available Days: </Text>
                          {data.office_day.map((data1, i) => {
                            return (
                              <Text key={i}>{data1}</Text>
                            )
                          })}
                        </View>

                      </View>
                    )
                  })
                }

              </View>
              {/* <View style={profileStyles.divider} /> */}
              {this.state.consultant.uid === this.state.user.uid ? <TouchableOpacity
                activeOpacity={0.6}
                style={profileStyles.edit_button}
                onPress={() => this.Edit(this.state.consultant.uid)}
              >
                <Text style={profileStyles.edit_button_label}>Edit Profile</Text>
              </TouchableOpacity> : this.state.user.userType === "CLIENT" && <TouchableOpacity
                activeOpacity={0.6}
                style={profileStyles.edit_button}
                onPress={() => {
                  this.Paypal(this.state.consultant.uid)
                }}
              >
                <Text style={profileStyles.edit_button_label}>BOOK</Text>
              </TouchableOpacity>}

              <View style={profileStyles.review_container}>
                <Text style={profileStyles.review_header}>Reviews</Text>
                {
                  this.state.reviews.length > 0 ? this.state.reviews.slice(0, 5).map((data) => {
                    return (
                      <View key={data.uid} style={profileStyles.review_details}>
                        <View style={profileStyles.review_details_header}>
                          <Text style={profileStyles.review_details_label}>By {data.reviewer_name}</Text>
                          <View style={{ alignSelf: 'flex-start' }}>
                            <StarRating
                              disabled={true}
                              maxStars={5}
                              rating={data.rating}
                              selectedStar={() => { }}
                              fullStarColor='#FDBB3B'
                              starSize={12}
                              starStyle={{ marginRight: 5 }}
                            />
                          </View>
                        </View>
                        <Text style={profileStyles.review_details_text}>
                          {data.comment}
                        </Text>
                      </View>
                    )
                  }) : (
                    <View style={calendarStyles.no_appointments_scaffold}>
                      <View style={calendarStyles.date_details_button_container}>
                        <Text style={calendarStyles.no_appointments_text}>No Reviews Yet</Text>
                      </View>
                    </View>
                  )
                }
              </View>

              {/* </View>
              )} */}
            </ScrollView>
          </View>
        </View>
      </View>

    );
  }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getConsultant, getReviews }, dispatch)
}
const mapStateToProps = state => {
  return {
    // loading: state.users.loading,
    singleConsultant: state.users.singleConsultant,
    reviews: state.reviews.items
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
