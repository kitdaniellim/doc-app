import React, { useState } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { reviewStyles, globalStyles } from '../styles/styles';


const Review = ({ navigation }) => {
  const [review, setReview] = useState('');
  const [starCount, setStar] = useState(3);

  const Edit = () => {
    navigation.navigate('EditReview')
  }

  const review_list = [
    {
      key: 1,
      to: 'Dr. Jesus',
      starCount: 4,
      date: '06/21/20',
      text: 'Bacon ipsum dolor amet ground round beef ribs pork boudin. Venison tail pastrami, shankle frankfurter chuck porchetta hamburger. Ribeye buffalo rump chislic, t-bone leberkas doner shoulder meatloaf kevin. Jerky sirloin picanha shankle pork belly t-bone.'
    },
    {
      key: 2,
      to: 'Dr. Constantine',
      starCount: 2,
      date: '06/21/20',
      text: 'Bacon doner flank tail meatball. Pork drumstick kevin buffalo pig t-bone shank burgdoggen chuck. Swine hamburger alcatra shank pork chop corned beef. Bacon hamburger tri-tip alcatra. Pastrami porchetta shoulder, andouille strip steak buffalo pancetta sirloin bresaola. Jerky sirloin drumstick chuck tri-tip cupim bacon andouille chislic porchetta capicola. Alcatra chuck boudin ham hock buffalo. Alcatra ball tip swine, cupim capicola prosciutto tail spare ribs kevin pastrami ham meatloaf. Ribeye bresaola venison tri-tip jowl pig fatback porchetta salami chicken pancetta corned beef shankle kevin leberkas. Pastrami spare ribs turkey shoulder meatball leberkas. Turkey tri-tip pork, kielbasa spare ribs frankfurter burgdoggen pastrami sirloin landjaeger boudin andouille pork belly.'
    },
    {
      key: 3,
      to: 'Dr. Go',
      starCount: 3,
      date: '06/19/20',
      text: 'This is another review!'
    },
    {
      key: 4,
      to: 'Dr. Chow',
      starCount: 5,
      date: '06/17/20',
      text: 'Cupim flank alcatra ribeye shoulder venison landjaeger, cow corned beef spare ribs. Shank ground round andouille, beef turkey capicola short loin tri-tip ham hock beef ribs. Boudin frankfurter spare ribs t-bone. Cow pork belly spare ribs, brisket capicola beef ribs sausage picanha. Shankle hamburger picanha cupim tenderloin, shank pastrami strip steak alcatra corned beef. Porchetta beef beef ribs ribeye, leberkas pork loin meatball pancetta rump.'
    },
    {
      key: 5,
      to: 'Dr. King',
      starCount: 5,
      date: '06/14/20',
      text: 'Ground round kielbasa t-bone, fatback sausage buffalo venison bacon brisket sirloin corned beef chislic cupim flank. Leberkas salami shank meatloaf, meatball prosciutto beef ribs brisket. Burgdoggen meatball brisket sirloin prosciutto turducken turkey. Filet mignon picanha pork loin boudin biltong leberkas, bresaola burgdoggen brisket hamburger. Swine pork belly chislic shankle bresaola porchetta frankfurter capicola short ribs strip steak beef ribs ribeye picanha meatloaf. Jowl beef ribs landjaeger bacon boudin tri-tip pork belly. Capicola beef ribs short loin beef. Shank ball tip short ribs pork loin. Sausage pastrami pork loin jowl alcatra turkey, leberkas ribeye brisket ball tip. Tail landjaeger meatloaf spare ribs pig cow ribeye hamburger brisket boudin chuck sirloin jerky filet mignon.'
    },
    {
      key: 6,
      to: 'Dr. Lee',
      starCount: 1,
      date: '06/09/20',
      text: 'Pastrami shoulder pork, short loin pork chop ball tip cupim beef ribs drumstick porchetta brisket meatball leberkas sirloin. Beef meatball kielbasa, short ribs pork belly drumstick shoulder filet mignon bacon ground round alcatra fatback. Swine alcatra doner, capicola venison cow corned beef jerky rump pork loin prosciutto. Picanha drumstick cupim capicola. Spare ribs beef ribs jowl flank kielbasa. Tri-tip ham hock boudin short ribs short loin landjaeger kielbasa, fatback swine hamburger. Leberkas drumstick ham hock, pork belly turkey prosciutto biltong spare ribs fatback. Beef ribs capicola pancetta andouille fatback brisket. Kielbasa meatball strip steak ham pancetta drumstick short ribs brisket ham hock pork belly spare ribs chuck alcatra tongue pork chop. Sirloin swine biltong shankle kevin, jowl landjaeger ham hock doner. Chicken meatloaf tenderloin pastrami short ribs, boudin swine flank brisket capicola sausage ham beef ribs bresaola strip steak. Kevin meatball ribeye chicken cow. Pig tongue prosciutto hamburger pork belly ground round turkey, sausage jowl kielbasa drumstick spare ribs pork chop ham.'
    },
    {
      key: 7,
      to: 'Dr. Mozart',
      starCount: 2,
      date: '05/27/20',
      text: 'Bacon ipsum dolor amet cow leberkas pig ham sirloin, spare ribs porchetta boudin pork. Chicken ham hock andouille, short loin ball tip venison shank pig salami. Prosciutto hamburger kielbasa landjaeger boudin pork spare ribs jowl turducken. Chislic sirloin bacon, sausage pork belly porchetta meatball tri-tip bresaola pork hamburger pancetta. Venison alcatra short loin tri-tip, frankfurter pork belly buffalo pork chop.'
    },
    {
      key: 8,
      to: 'Dr. Oust',
      starCount: 5,
      date: '05/19/20',
      text: 'Pork belly pork pastrami landjaeger, rump filet mignon sirloin leberkas andouille short loin alcatra. T-bone burgdoggen picanha beef porchetta pig frankfurter turkey sausage ball tip pastrami shank cupim alcatra. Fatback meatball flank, short loin corned beef tri-tip t-bone sausage capicola. Shoulder alcatra spare ribs short loin short ribs kevin. Leberkas jowl pork kevin alcatra salami turkey short loin fatback bresaola ham pork belly pancetta ball tip porchetta. Drumstick leberkas tenderloin ribeye, chicken pork beef ribs turkey salami fatback swine flank t-bone shankle. Cow tongue leberkas pork, pork belly short ribs frankfurter burgdoggen jerky venison corned beef.'
    },
  ]

  return (
    <View style={reviewStyles.container}>
      <View style={reviewStyles.header_container}>
        <View style={reviewStyles.header_text_container}>
          <Text style={reviewStyles.header_text_bold}>YOUR REVIEWS</Text>
        </View>
      </View>
      <View style={reviewStyles.scaffold}>
        <View>
          <FlatList
            data={review_list}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.key.toString()}
            renderItem={({ item }) => (
              <View style={reviewStyles.review_container}>
                <View style={reviewStyles.review_details_container}>
                  <View>
                    <Text style={reviewStyles.review_details_header}>You to {item.to}</Text>
                    <View style={{ alignItems: 'flex-start' }}>
                      <StarRating
                        disabled={true}
                        maxStars={5}
                        rating={item.starCount}
                        fullStarColor='#FDBB3B'
                        starSize={13}
                        starStyle={{ marginRight: 10 }}
                      />
                    </View>
                    <Text style={reviewStyles.review_details_header}>{item.date}</Text>
                  </View>
                  <View style={{ justifyContent: 'center', marginBottom: 8 }}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={Edit}
                      style={reviewStyles.review_details_submit_button}
                    >
                      <Text style={reviewStyles.date_details_button_label}>Edit</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={reviewStyles.review_textinput_container}>
                  <Text style={reviewStyles.review_textinput}>
                    {item.text}
                  </Text>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </View>
  );
}

export default Review;
