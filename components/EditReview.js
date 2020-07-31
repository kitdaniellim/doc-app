import React, { useState } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { reviewStyles, globalStyles } from '../styles/styles';


const EditReview = ({ navigation }) => {
    const [review, setReview] = useState('');
    const [starCount, setStar] = useState(3);

    const Back = () => {
        navigation.navigate('Review')
    }

    const Submit = () => {
        navigation.navigate('Review')
    }

    const review_list = [
        {
            key: 1,
            to: 'Dr. Jesus',
            date: '06/21/20',
            text: 'Bacon ipsum dolor amet ground round beef ribs pork boudin. Venison tail pastrami, shankle frankfurter chuck porchetta hamburger. Ribeye buffalo rump chislic, t-bone leberkas doner shoulder meatloaf kevin. Jerky sirloin picanha shankle pork belly t-bone.'
        },
    ]

    return (
        <View style={reviewStyles.container}>
            <View style={reviewStyles.header_container}>
                <View style={reviewStyles.header_text_container}>
                    <Text style={reviewStyles.header_text_bold}>EDIT REVIEW</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={Back}
                    style={reviewStyles.header_icon_container}
                >
                    <Icon style={globalStyles.icon_global} name="times" size={18} />
                </TouchableOpacity>
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
                                                disabled={false}
                                                maxStars={5}
                                                rating={starCount}
                                                selectedStar={(rating) => setStar(rating)}
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
                                            onPress={Submit}
                                            style={reviewStyles.review_details_submit_button}
                                        >
                                            <Text style={reviewStyles.date_details_button_label}>Submit</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={reviewStyles.review_textinput_container}>
                                    <TextInput
                                        style={reviewStyles.review_textinput}
                                        multiline
                                    >
                                        {item.text}
                                    </TextInput>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}

export default EditReview;