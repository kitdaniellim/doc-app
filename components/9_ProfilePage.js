import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import RadioButtons_MultipleSelect from './RadioButtons_MultipleSelect.js';
import { profileStyles, globalStyles } from '../styles/styles';



const Profile = ({ navigation }) => {

  const selected = {
    name: "Dr. Go",
    office_img: require("../assets/office.jpg"),
    profile_img: require("../assets/troy.png"),
    office_hours: {
      days: [
        { key: 'Su', text: 'Su', Checked: false },
        { key: 'M', text: 'M', Checked: false },
        { key: 'Tu', text: 'Tu', Checked: false },
        { key: 'W', text: 'W', Checked: false },
        { key: 'Th', text: 'Th', Checked: false },
        { key: 'F', text: 'F', Checked: false },
        { key: 'Sa', text: 'Sa', Checked: false },
      ]
    }
  }

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.header_container}>
        <Text style={profileStyles.header_text_bold}>PROFILE: Go</Text>
      </View>
      <View style={profileStyles.scaffold}>
        <View style={profileStyles.profile_container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              padding: 14,
              borderRadius: 15,
              backgroundColor: '#fff',
            }}
          >
            <View style={profileStyles.profile_officeimg_container}>
              <Image
                source={selected.office_img}
                style={profileStyles.profile_officeimg}
              />
            </View>
            <View style={profileStyles.profile_b_info_container}>
              <Text style={profileStyles.profile_b_info_header}>Basic Information</Text>
              <View style={profileStyles.profile_b_info_details_container}>
                <View style={profileStyles.profile_b_info_profileimg_container}>
                  <Image
                    source={selected.profile_img}
                    style={profileStyles.profile_b_info_profileimg}
                  />
                </View>
                <View style={profileStyles.profile_b_info_details}>
                  <Text>
                    Dr. Go{"\n"}
                    Opthalmology{"\n"}
                    troygo@gmail.com{"\n"}
                    09324758192
                  </Text>
                </View>
              </View>
            </View>
            <View style={profileStyles.profile_rating_container}>
              <Text style={profileStyles.profile_rating_header}>Overall Rating</Text>
              <View style={profileStyles.profile_rating_details}>
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={4}
                  selectedStar={() => {}}
                  fullStarColor='#FDBB3B'
                  starSize={12}
                  starStyle={{}}
                />
              </View>
            </View>
            <View style={profileStyles.profile_rating_container}>
              <Text style={profileStyles.profile_rating_header}>Office Hours</Text>
              <View style={profileStyles.profile_rating_details}>
                <Text>Manila, Philippines 111 St. xxx Bldg.</Text>
                <View>
                  {/* <RadioButtons_MultipleSelect options={selected.days} /> */}
                </View>
                <Text>7:30 AM - 1:00 PM</Text>
              </View>
            </View>

          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Profile;