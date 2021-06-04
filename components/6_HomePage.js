import React from 'react';
import { Text, Image, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StarRating from 'react-native-star-rating';
import { BackgroundCarousel } from './custom/BackgroundCarousel'
import { homeStyles } from '../styles/styles';
import { getAllConsultant, getConsultant } from '../actions/users';
import { getReviews, getAllReviews } from '../actions/reviews';
import { addNotif } from '../actions/notifs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { uniqueId } from 'lodash';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      notification: {},
    }
  }

  async componentDidMount() {
    this.props.getAllReviews();
    this.props.getAllConsultant();
  }

  SeeAll(userSpecialty) {
    // console.log('clicked see all')
    // console.log(userSpecialty)
    this.props.navigation.navigate('Search', { userSpecialty: userSpecialty });
  }

  Profile = async (uid) => {
    // console.log('Clicked ' + uid)
    await this.props.getConsultant(uid);
    await this.props.getReviews(uid);

    // this.props.navigation.navigate('Profile', { singleConsultant: this.props.singleConsultant, reviews: this.props.reviews })
    if (this.props.singleConsultant.office_details != null) {
      await this.props.navigation.navigate('Profile')
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

  render() {
    // console.log('showing props')
    // console.log(this.props.consultant)
    // console.log('------')

    let images = [
      {
        key: 1,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fcarousel_1.png?alt=media&token=1a018edf-bdfb-47ae-a293-5e4336f861fc',
      },
      {
        key: 2,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fcarousel_2.png?alt=media&token=b3d55721-fa07-4b3f-b8a0-d17b53f9caab',
      },
      {
        key: 3,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fcarousel_3.png?alt=media&token=9cecb0a8-4f5e-4a01-b2cd-6ea9fa3ca6c0',
      },
      {
        key: 4,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fcarousel_4.png?alt=media&token=c1f7f535-6165-413a-9e94-fc45c0525424',
      },
      {
        key: 5,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fcarousel_5.png?alt=media&token=877d306f-f6ca-4d75-9ce6-da91cadb7ed8',
      },
    ];


    const userSpecialty_list = [
      {
        key: 1,
        userSpecialty: "Doctor",
      },
      {
        key: 2,
        userSpecialty: "Lawyer",
      },
      {
        key: 3,
        userSpecialty: "Engineer",
      },
      {
        key: 4,
        userSpecialty: "Architect",
      },
    ]

    return (
      // <SafeAreaView style={{ flex: 1 }}>
      <View style={homeStyles.container}>
        <View style={{ height: 250, marginTop: 10 }}>
          <BackgroundCarousel images={images} />
        </View>

        {/* //test button */}
        {/* <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            this.props.addNotif('CLIENT', '99adfbd0-8a38-11eb-bc09-a977e0d274c7', 'BOOK')

            // const trigger = new Date(Date.now() + 60 * 60 * 1000);
            // trigger.setMinutes(0);
            // trigger.setSeconds(0);

            // Notifications.scheduleNotificationAsync({
            //   content: {
            //     title: 'Happy new hour!',
            //   },
            //   trigger,
            // });

            // Notifications.scheduleNotificationAsync({
            //   content: {
            //     title: "Time's up!",
            //     body: 'Change sides!',
            //   },
            //   trigger: {
            //     seconds: 10,
            //   },
            // });
          }}
          style={homeStyles.scaffold_vlist_item_header_container_2}
        >
          <Text style={homeStyles.scaffold_vlist_item_header_2}>TEST NOTIFY</Text>
        </TouchableOpacity> */}

        <View style={homeStyles.scaffold}>
          <FlatList
            data={userSpecialty_list}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
              <View key={item.key.toString()}>
                <View style={homeStyles.scaffold_list_container}>
                  <View style={homeStyles.scaffold_vlist_item_container}>
                    <View style={{ flexDirection: 'row' }}>
                      <TouchableOpacity
                        disabled
                        activeOpacity={0.6}
                        onPress={() => { }}
                        style={homeStyles.scaffold_vlist_item_header_container}
                      >
                        <Text style={homeStyles.scaffold_vlist_item_header}>{item.userSpecialty.toUpperCase()}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { this.SeeAll(item.userSpecialty) }}
                        style={homeStyles.scaffold_vlist_item_header_container_2}
                      >
                        <Text style={homeStyles.scaffold_vlist_item_header_2}>See All</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={homeStyles.scaffold_hlist_container}>
                      <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{}}
                      >
                        {this.props.consultant && this.props.consultant.map((data) => {

                          if (item.userSpecialty === data.userSpecialty) {
                            return (
                              <View style={homeStyles.scaffold_hlist_item_container} key={data.uid}>
                                <View style={homeStyles.scaffold_hlist_item_box_container}>
                                  <View style={homeStyles.scaffold_hlist_item_box_content}>
                                    <TouchableOpacity
                                      activeOpacity={0.6}
                                      onPress={() => this.Profile(data.uid)}
                                      style={homeStyles.scaffold_hlist_item_box_image_container}
                                    >
                                      <Image
                                        source={{ uri: data.profilePicture }}
                                        style={homeStyles.scaffold_hlist_item_box_image}
                                      />
                                    </TouchableOpacity>
                                    {/* <Text style={homeStyles.scaffold_hlist_item_box_name}>{(data.userSpecialty === "Doctor") ? 'Dr. ' : data.userSpecialty} {data.fullName}</Text> */}
                                    <Text style={homeStyles.scaffold_hlist_item_box_name}>
                                      {((data.fullName).length > 15) ?
                                        (((data.fullName).substring(0, 15)) + '...') :
                                        data.fullName
                                        }
                                    </Text>
                                    <View style={{ flex: 1, alignSelf: 'flex-start', justifyContent: 'center' }}>
                                      <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={data.rating}
                                        selectedStar={() => { }}
                                        fullStarColor='#FDBB3B'
                                        starSize={12}
                                        starStyle={{ marginRight: 5, alignSelf: 'center' }}
                                      />
                                    </View>
                                  </View>
                                </View>
                              </View>
                            )
                          }
                        })}
                      </ScrollView>
                    </View>
                  </View>
                </View>
              </View>
            )}
          />
        </View>
      </View>
      // </SafeAreaView>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllConsultant, getConsultant, getReviews, getAllReviews, addNotif }, dispatch)
}

const mapStateToProps = state => {
  return {
    consultant: state.users.consultant,
    singleConsultant: state.users.singleConsultant,
    all_reviews: state.reviews.all_reviews,
    reviews: state.reviews.items
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

