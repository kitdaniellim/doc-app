import React from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { profileStyles, globalStyles } from '../styles/styles';



const Profile = ({ navigation }) => {
  const isUserClient = true
  const selected = {
    id: 1,
    name: "Dr. Go",
    office_img: require("../assets/office.jpg"),
    profile_img: require("../assets/troy.png"),
  }

  const Close = () => {
    navigation.pop()
  }

  const Paypal = () => {
    navigation.navigate('Paypal', {
      consultant_id: selected.id
    });
  }

  return (
    <View style={profileStyles.container}>
      <View style={profileStyles.header_container}>
        <View style={profileStyles.header_text_container}>
          <Text style={profileStyles.header_text_bold}>PROFILE: Go</Text>
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
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              padding: 14,
              marginTop: 10,
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
                  selectedStar={() => { }}
                  fullStarColor='#FDBB3B'
                  starSize={12}
                  starStyle={{}}
                />
              </View>
            </View>
            <View style={profileStyles.profile_hours_container}>
              <Text style={profileStyles.profile_hours_header}>Office Hours</Text>
              <View style={profileStyles.divider} />
              <View style={profileStyles.profile_hours_details}>
                <Text>
                  Manila, Philippines 111 St. xxx Bldg.{"\n"}
                  Sunday, Saturday, Tuesday{"\n"}
                  8:30 AM - 6:00 PM
                </Text>
              </View>
              <View style={profileStyles.profile_hours_details}>
                <Text>
                  Manila, Philippines 321 St. xab Bldg.{"\n"}
                  Saturday, Monday, Friday{"\n"}
                  7:30 AM - 11:00 PM
                </Text>
              </View>
              <View style={profileStyles.profile_hours_details}>
                <Text>
                  Manila, Philippines 111 St. xxx Bldg.{"\n"}
                  Sunday, Wednesday, Friday{"\n"}
                  9:00 AM - 1:30 PM
                </Text>
              </View>
            </View>
            <View style={profileStyles.divider} />
            {(isUserClient === true) ?
              <TouchableOpacity
                activeOpacity={0.6}
                style={profileStyles.edit_button}
                onPress={Paypal}
              >
                <Text style={profileStyles.edit_button_label}>BOOK</Text>
              </TouchableOpacity>
              :
              null}
            <View style={profileStyles.review_container}>
              <Text style={profileStyles.review_header}>Reviews</Text>
              <View style={profileStyles.review_details}>
                <View style={profileStyles.review_details_header}>
                  <Text style={profileStyles.review_details_label}>By John Doe</Text>
                  <View style={{ alignSelf: 'flex-start' }}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={3}
                      fullStarColor='#FDBB3B'
                      starSize={12}
                      starStyle={{ marginRight: 5 }}
                    />
                  </View>
                </View>
                <Text style={profileStyles.review_details_text}>
                  Bacon ipsum dolor amet flank corned beef pancetta picanha, strip steak pork chop tri-tip ball tip. Capicola bresaola shoulder pork belly pastrami strip steak kevin tenderloin tri-tip ham hock. Meatloaf t-bone biltong meatball. Ball tip drumstick jowl bacon, chislic pig picanha frankfurter buffalo ground round shankle tail jerky.
                  Jerky spare ribs rump, turducken alcatra meatball picanha pastrami swine ribeye prosciutto pork belly pork loin frankfurter. Hamburger ribeye meatloaf landjaeger brisket chuck kielbasa chicken pork belly tongue pork chop. Jerky pastrami landjaeger jowl venison, boudin capicola frankfurter drumstick rump ball tip turkey hamburger shankle. Shank sirloin tenderloin, ground round chicken pork brisket beef ribs short ribs. Fatback porchetta ham ham hock. Cupim picanha tenderloin short loin brisket ribeye jerky tail bacon shoulder bresaola chislic tongue short ribs shankle.
                  Shoulder kielbasa landjaeger swine, alcatra t-bone chislic pork loin filet mignon bacon fatback salami drumstick cow. Jowl biltong ball tip turkey meatball corned beef cow spare ribs landjaeger prosciutto tri-tip. Ham pig drumstick shoulder burgdoggen. Tail strip steak turducken pig.
                </Text>
              </View>
              <View style={profileStyles.review_details}>
                <View style={profileStyles.review_details_header}>
                  <Text style={profileStyles.review_details_label}>By Nicholas Flamel</Text>
                  <View style={{ alignSelf: 'flex-start' }}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={4}
                      fullStarColor='#FDBB3B'
                      starSize={12}
                      starStyle={{ marginRight: 5 }}
                    />
                  </View>
                </View>
                <Text style={profileStyles.review_details_text}>
                  Brisket shank chicken pork chop flank ham boudin shankle hamburger ribeye burgdoggen pig leberkas sausage. Prosciutto turkey meatball brisket tri-tip tongue doner picanha biltong capicola. Drumstick fatback pig meatloaf venison meatball. Spare ribs short loin picanha rump. Bacon beef ribs pork belly boudin porchetta salami. Meatball flank swine, alcatra tri-tip beef ribs tail jowl pastrami chislic. Cupim strip steak andouille turducken pig ground round venison rump sausage alcatra kielbasa pork chop salami.
                </Text>
              </View>
              <View style={profileStyles.review_details}>
                <View style={profileStyles.review_details_header}>
                  <Text style={profileStyles.review_details_label}>By Harrison Park</Text>
                  <View style={{ alignSelf: 'flex-start' }}>
                    <StarRating
                      disabled={true}
                      maxStars={5}
                      rating={5}
                      fullStarColor='#FDBB3B'
                      starSize={12}
                      starStyle={{ marginRight: 5 }}
                    />
                  </View>
                </View>
                <Text style={profileStyles.review_details_text}>
                  Andouille pork belly ribeye kevin swine. Jerky ham hock ground round venison, porchetta capicola prosciutto ham cupim buffalo beef ribs andouille landjaeger. Venison pork belly sausage kielbasa frankfurter pork chop beef ribs short ribs jowl t-bone capicola. Swine shoulder meatball meatloaf ham hock. Porchetta leberkas frankfurter, prosciutto alcatra meatloaf sausage beef cow bresaola tenderloin buffalo. Rump pork bacon fatback chicken. Burgdoggen bresaola bacon pork chop beef jerky.
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}

export default Profile;