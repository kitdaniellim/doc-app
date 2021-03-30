import React from 'react';
import { Text, Image, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StarRating from 'react-native-star-rating';
import { BackgroundCarousel } from './custom/BackgroundCarousel'
import { homeStyles } from '../styles/styles';
import { getAllConsultant, getConsultant } from '../actions/users';
import { getReviews, getAllReviews } from '../actions/reviews';
import { getNotifs, addNotif } from '../actions/notifs';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { db } from '../config/Firebase';
// import {Permissions, Notifications} from 'expo';

class Home extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props);

  }

  async componentDidMount() {

    const user = JSON.parse(
      await AsyncStorage.getItem("user")
    );
    this.props.getAllReviews();
    this.props.getAllConsultant();

    //Listener for real-time notifications
    db.collection('notifs')
      .doc(user.uid)
      .onSnapshot(documentSnapshot => {
        // console.log('notif data: ', documentSnapshot.data());

        console.log('something changed ssss');
        this.props.navigation.setOptions({
          headerRight: () => { 
            return <Text>Fuckkk</Text> },
        })
      });



  }

  SeeAll(userSpecialty) {
    this.props.navigation.navigate('Search', { userSpecialty: userSpecialty });
  }

  Profile = async (uid) => {
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
    // console.log(this.props.navigation)
    // console.log('------')

    let images = [
      {
        key: 1,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample1.png?alt=media&token=b84c2e8e-c810-41ba-99aa-74655ee4cac6',
      },
      {
        key: 2,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample2.png?alt=media&token=02db3f2f-a342-454b-8ae1-ecc32543a769',
      },
      {
        key: 3,
        img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample3.png?alt=media&token=60635cf7-dc00-4685-b379-731d722673b9',
      },
    ];


    const userSpecialty_list = [
      {
        key: 1,
        userSpecialty: "Engineer",
      },
      {
        key: 2,
        userSpecialty: "Architect",
      },
      {
        key: 3,
        userSpecialty: "Doctor",
      },
      {
        key: 4,
        userSpecialty: "Lawyer",
      },
    ]

    return (
      // <SafeAreaView style={{ flex: 1 }}>
      <View style={homeStyles.container}>
        <View style={{ height: 200 }}>
          <BackgroundCarousel images={images} />
        </View>

        {/* //test button */}
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => { this.props.addNotif('CLIENT', '99adfbd0-8a38-11eb-bc09-a977e0d274c7', 'BOOK') }}
          style={homeStyles.scaffold_vlist_item_header_container_2}
        >
          <Text style={homeStyles.scaffold_vlist_item_header_2}>TEST NOTIFY</Text>
        </TouchableOpacity>

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
                        <Text style={homeStyles.scaffold_vlist_item_header}>{item.userSpecialty}</Text>
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
                                    <Text style={homeStyles.scaffold_hlist_item_box_name}>{(data.userSpecialty === "Doctor") ? 'Dr. ' : data.userSpecialty} {data.fullName}</Text>
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


