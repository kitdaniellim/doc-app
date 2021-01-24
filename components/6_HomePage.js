import React from 'react';
import { Text, Image, View, FlatList, RefreshControl, TouchableOpacity, ScrollView } from 'react-native';
import { homeStyles } from '../styles/styles';
import { getAllConsultant, getConsultant, getReviewsConsultant } from '../actions/users';
import { getReviews } from '../actions/reviews';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Firebase from '../config/Firebase';
import AsyncStorage from '@react-native-community/async-storage';

class Home extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props);
    //this.Profile = this.Profile.bind(this);
    // this.ref = firebase.firestore().collection
    //  this.state = {
    //    imgUrl =  ''
    //  }
  }

  async componentDidMount() {
    try {
      const user = JSON.parse(
        await AsyncStorage.getItem("user")
      );
      if (!user) {
        this.props.navigation.navigate('Login');
      } else {
        console.log(this.props)
        this._isMounted = true;
        if (this._isMounted) {
          this.props.getAllConsultant();
        }
      }
    } catch (e) {
      console.log(`Error! Details: ${e}`);
      this.props.navigation.navigate('Login');
    }



  }

  SeeAll() {
    this.props.navigation.navigate('Search');
  }

  Field() {
    this.props.navigation.navigate('Search');
  }

  Profile = async (uid) => {

    await this.props.getConsultant(uid);
    await this.props.getReviews(uid);
    if (this.props.singleConsultant.office_details != null) {
      this.props.navigation.navigate('ProfileTab')
    }
  }



  render() {
    const images = [
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
        userSpecialty: "ARCHITECTS",
      },
      {
        key: 3,
        userSpecialty: "Doctor",
      },
      {
        key: 4,
        userSpecialty: "LAWYERS",
      },
    ]





    //const users = Array.from(this.props.consultant);
    if (this.props.navigation.state) {
      if (this.props.navigation.state.params) {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
      }
    }


    return (
      <View style={homeStyles.container}>
        <View style={{ height: 200 }}>
        </View>
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
                        activeOpacity={0.6}
                        onPress={this.Field}
                        style={homeStyles.scaffold_vlist_item_header_container}
                      >
                        <Text style={homeStyles.scaffold_vlist_item_header}>{item.userSpecialty}</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={this.SeeAll}
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
                                    <Text style={homeStyles.scaffold_hlist_item_box_name}>{data.userSpecialty} {data.fullName}</Text>
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
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllConsultant, getConsultant, getReviewsConsultant, getReviews }, dispatch)
}

const mapStateToProps = state => {
  return {
    consultant: state.users.consultant,
    singleConsultant: state.users.singleConsultant,
    reviews: state.reviews.items
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);


