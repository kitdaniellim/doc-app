import React from 'react';
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';
import StarRating from 'react-native-star-rating';
import { searchStyles } from '../styles/styles';
import { getAllConsultant, getConsultant } from '../actions/users';
import { getReviews } from '../actions/reviews';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Search extends React.Component {
  _isMounted = false
  constructor(props) {
    super(props);
    this.state = {
      searchVal: '',
      filterVal: 'None',
    }
  }

  async componentDidMount() {
    await this.props.getAllConsultant();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState(() => ({ filterVal: this.props.route.params?.userSpecialty ?? 'None' }));
    }
  }

  Profile = async (uid) => {
    await this.props.getConsultant(uid);
    await this.props.getReviews(uid);

    if (this.props.singleConsultant.office_details != null) {
      await this.props.navigation.navigate('Profile', { singleConsultant: this.props.singleConsultant, reviews: this.props.reviews })
    }
  }

  render() {
    // console.log('=================================');
    // console.log(this.props.route.params);
    // console.log('-----------------------------');
    // console.log(this.state);
    // console.log('=================================');

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
      <View style={searchStyles.container}>
        <View style={searchStyles.header_container}>
          <View style={searchStyles.header_text_container}>
            <Text style={searchStyles.header_text_bold}>SEARCH</Text>
          </View>
          <View style={searchStyles.header_search_container}>
            <SearchBar style={searchStyles.searchBar}
              platform="android"
              lightTheme
              round
              onChangeText={(value) => {
                this.setState(() => ({ searchVal: value }))
              }}
              value={this.state.searchVal}
              searchIcon={{ size: 16 }}
              clearIcon={{ size: 16 }}
              cancelIcon={{ size: 16 }}
              placeholder="Enter Professional's Name Here"
              containerStyle={{
                height: 40,
                justifyContent: 'center',
                marginTop: 2,
              }}
              inputStyle={{
                justifyContent: 'center',
                fontSize: 15,
              }}
            />
          </View>
        </View>
        <View style={searchStyles.filter_container}>
          <View style={searchStyles.filter_label_container}>
            <Text style={searchStyles.filter_label}>FILTER</Text>
          </View>
          <View style={{ width: 150, height: 50, justifyContent: 'center' }}>
            <RNPickerSelect
              placeholder={{
                label: 'None',
                value: 'None',
                color: '#8B8787'
              }}
              style={{
                viewContainer: {
                  alignSelf: 'stretch',
                  backgroundColor: '#fff',
                },
                inputIOS: {
                  color: '#8B8787',
                },
                inputAndroid: {
                  color: '#8B8787',
                },
              }}

              onValueChange={value => this.setState(() => ({ filterVal: value }))}
              value={this.state.filterVal}
              items={[
                { label: 'ENGINEERS', value: 'Engineer' },
                { label: 'DOCTORS', value: 'Doctor' },
                { label: 'ARCHITECTS', value: 'Architect' },
                { label: 'LAWYERS', value: 'Lawyer' },
              ]}
            />
          </View>
        </View>
        <View style={searchStyles.scaffold}>
          <FlatList
            data={userSpecialty_list}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
              <View>
                {(this.state.filterVal === 'None') ?
                  <View style={searchStyles.scaffold_list_container}>
                    <View style={searchStyles.scaffold_list_item_container}>
                      <Text style={searchStyles.scaffold_list_item_header}>{item.userSpecialty}</Text>
                      {this.props.consultant && this.props.consultant.map((value) => {
                        if (value.userSpecialty === item.userSpecialty) {
                          if (this.state.searchVal === '') {
                            return (
                              <TouchableOpacity
                                key={value.uid}
                                activeOpacity={0.6}
                                onPress={() => this.Profile(value.uid)}
                                style={searchStyles.scaffold_list_container}
                              >
                                <View style={{ flexDirection: 'row' }}>
                                  <View>
                                    <Image
                                      source={{ uri: value.profilePicture }}
                                      style={searchStyles.scaffold_list_item_img}
                                    />
                                  </View>
                                  <View style={{ justifyContent: 'center' }}>
                                    <Text style={searchStyles.scaffold_list_item_data}>{value.fullName}</Text>
                                    <View style={searchStyles.scaffold_list_item_data_stars}>
                                      <StarRating
                                        disabled={true}
                                        maxStars={5}
                                        rating={value.rating}
                                        selectedStar={() => { }}
                                        fullStarColor='#FDBB3B'
                                        starSize={12}
                                        starStyle={{ marginRight: 5, alignSelf: 'center' }}
                                      />
                                    </View>
                                  </View>
                                </View>
                              </TouchableOpacity>
                            )
                          } else {
                            if (value.fullName.startsWith(this.state.searchVal.charAt(0).toUpperCase() + this.state.searchVal.slice(1))) {
                              return (
                                <TouchableOpacity
                                  key={value.uid}
                                  activeOpacity={0.6}
                                  onPress={() => this.Profile(value.uid)}
                                  style={searchStyles.scaffold_list_container}
                                >
                                  <View style={{ flexDirection: 'row' }}>
                                    <View>
                                      <Image
                                        source={{ uri: value.profilePicture }}
                                        style={searchStyles.scaffold_list_item_img}
                                      />
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                      <Text style={searchStyles.scaffold_list_item_data}>{value.fullName}</Text>
                                      <View style={searchStyles.scaffold_list_item_data_stars}>
                                        <StarRating
                                          disabled={true}
                                          maxStars={5}
                                          rating={value.rating}
                                          selectedStar={() => { }}
                                          fullStarColor='#FDBB3B'
                                          starSize={12}
                                          starStyle={{ marginRight: 5, alignSelf: 'center' }}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                              )
                            }
                          }

                        }
                      })}
                    </View>
                  </View>
                  :
                  (this.state.filterVal === item.userSpecialty) ?
                    <View style={searchStyles.scaffold_list_container}>
                      <View style={searchStyles.scaffold_list_item_container}>
                        <Text style={searchStyles.scaffold_list_item_header}>{item.userSpecialty}</Text>
                        {this.props.consultant && this.props.consultant.map((value) => {
                          if (value.userSpecialty === item.userSpecialty) {
                            if (this.state.searchVal === '') {
                              return (
                                <TouchableOpacity
                                  key={value.uid}
                                  activeOpacity={0.6}
                                  onPress={() => this.Profile(value.uid)}
                                  style={searchStyles.scaffold_list_container}
                                >
                                  <View style={{ flexDirection: 'row' }}>
                                    <View>
                                      <Image
                                        source={{ uri: value.profilePicture }}
                                        style={searchStyles.scaffold_list_item_img}
                                      />
                                    </View>
                                    <View style={{ justifyContent: 'center' }}>
                                      <Text style={searchStyles.scaffold_list_item_data}>{value.fullName}</Text>
                                      <View style={searchStyles.scaffold_list_item_data_stars}>
                                        <StarRating
                                          disabled={true}
                                          maxStars={5}
                                          rating={value.rating}
                                          selectedStar={() => { }}
                                          fullStarColor='#FDBB3B'
                                          starSize={12}
                                          starStyle={{ marginRight: 5, alignSelf: 'center' }}
                                        />
                                      </View>
                                    </View>
                                  </View>
                                </TouchableOpacity>
                              )
                            } else {
                              if (value.fullName.startsWith(this.state.searchVal.charAt(0).toUpperCase() + this.state.searchVal.slice(1))) {
                                return (
                                  <TouchableOpacity
                                    key={value.uid}
                                    activeOpacity={0.6}
                                    onPress={() => this.Profile(value.uid)}
                                    style={searchStyles.scaffold_list_container}
                                  >
                                    <View style={{ flexDirection: 'row' }}>
                                      <View>
                                        <Image
                                          source={{ uri: value.profilePicture }}
                                          style={searchStyles.scaffold_list_item_img}
                                        />
                                      </View>
                                      <View style={{ justifyContent: 'center' }}>
                                        <Text style={searchStyles.scaffold_list_item_data}>{value.fullName}</Text>
                                        <View style={searchStyles.scaffold_list_item_data_stars}>
                                          <StarRating
                                            disabled={true}
                                            maxStars={5}
                                            rating={value.rating}
                                            selectedStar={() => { }}
                                            fullStarColor='#FDBB3B'
                                            starSize={12}
                                            starStyle={{ marginRight: 5, alignSelf: 'center' }}
                                          />
                                        </View>
                                      </View>
                                    </View>
                                  </TouchableOpacity>
                                )
                              }
                            }

                          }
                        })}
                      </View>
                    </View>
                    :
                    null}
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllConsultant, getConsultant, getReviews }, dispatch)
}

const mapStateToProps = state => {
  return {
    consultant: state.users.consultant,
    singleConsultant: state.users.singleConsultant,
    reviews: state.reviews.items
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);


