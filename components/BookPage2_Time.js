import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { profileStyles, globalStyles } from '../styles/styles';

const Book2_Time = ({ navigation }) => {
  const isUserClient = true
  const selected = {
    name: "Dr. Go",
    office_img: require("../assets/office.jpg"),
    profile_img: require("../assets/troy.png"),
  }

  const Close = () => {
    navigation.goBack()
  }

  const Paypal = () => {
    navigation.navigate('Paypal')
  }

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.header_container}>
        <View style={profileStyles.header_text_container}>
          <Text style={profileStyles.header_text_bold}>AVAILABLE TIME SLOTS</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={Close}
          style={profileStyles.header_icon_container}
        >
          <Icon style={globalStyles.icon_global} name="times" size={18} />
        </TouchableOpacity>
      </View>
      <View style={profileStyles.scaffold}>
        <View style={profileStyles.profile_container}>
          <Text>Available Time Slots</Text>
        </View>
      </View>
    </View>
  );
}

export default Book2_Time;