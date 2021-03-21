// import React, { useState } from 'react';
// import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import StarRating from 'react-native-star-rating';
// import { reviewStyles, globalStyles } from '../styles/styles';


// const EditReview = ({ navigation }) => {
//     const [review, setReview] = useState('');
//     const [starCount, setStar] = useState(3);

//     const Back = () => {
//         navigation.navigate('Review')
//     }

//     const Submit = () => {
//         navigation.navigate('Review')
//     }

//     const review_list = [
//         {
//             key: 1,
//             to: 'Dr. Jesus',
//             date: '06/21/20',
//             text: 'Bacon ipsum dolor amet ground round beef ribs pork boudin. Venison tail pastrami, shankle frankfurter chuck porchetta hamburger. Ribeye buffalo rump chislic, t-bone leberkas doner shoulder meatloaf kevin. Jerky sirloin picanha shankle pork belly t-bone.'
//         },
//     ]

//     return (
//         <View style={reviewStyles.container}>
//             <View style={reviewStyles.header_container}>
//                 <View style={reviewStyles.header_text_container}>
//                     <Text style={reviewStyles.header_text_bold}>EDIT REVIEW</Text>
//                 </View>
//                 <TouchableOpacity
//                     activeOpacity={0.6}
//                     onPress={Back}
//                     style={reviewStyles.header_icon_container}
//                 >
//                     <Icon style={globalStyles.icon_global} name="times" size={18} />
//                 </TouchableOpacity>
//             </View>
//             <View style={reviewStyles.scaffold}>
//                 <View>
//                     <FlatList
//                         data={review_list}
//                         scrollEnabled={true}
//                         showsVerticalScrollIndicator={false}
//                         keyExtractor={(item) => item.key.toString()}
//                         renderItem={({ item }) => (
//                             <View style={reviewStyles.review_container}>
//                                 <View style={reviewStyles.review_details_container}>
//                                     <View>
//                                         <Text style={reviewStyles.review_details_header}>You to {item.to}</Text>
//                                         <View style={{ alignItems: 'flex-start' }}>
//                                             <StarRating
//                                                 disabled={false}
//                                                 maxStars={5}
//                                                 rating={starCount}
//                                                 selectedStar={(rating) => setStar(rating)}
//                                                 fullStarColor='#FDBB3B'
//                                                 starSize={13}
//                                                 starStyle={{ marginRight: 10 }}
//                                             />
//                                         </View>
//                                         <Text style={reviewStyles.review_details_header}>{item.date}</Text>
//                                     </View>
//                                     <View style={{ justifyContent: 'center', marginBottom: 8 }}>
//                                         <TouchableOpacity
//                                             activeOpacity={0.6}
//                                             onPress={Submit}
//                                             style={reviewStyles.review_details_submit_button}
//                                         >
//                                             <Text style={reviewStyles.date_details_button_label}>Submit</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                                 <View style={reviewStyles.review_textinput_container}>
//                                     <TextInput
//                                         style={reviewStyles.review_textinput}
//                                         multiline
//                                     >
//                                         {item.text}
//                                     </TextInput>
//                                 </View>
//                             </View>
//                         )}
//                     />
//                 </View>
//             </View>
//         </View>
//     );
// }

// export default EditReview;



import React from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import Icon from 'react-native-vector-icons/FontAwesome';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getReviewByUID, updateReview } from '../actions/reviews';
import AsyncStorage from '@react-native-community/async-storage';
import { reviewStyles, globalStyles } from '../styles/styles';

class EditReview extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            starCount: 0,
            comment: ''
        }
    }

    async componentDidMount() {
        try {
            const user = JSON.parse(
                await AsyncStorage.getItem("user")
            );
            this.props.getReviewByUID(this.props.navigation.state.params.review_uid);
            this.setState(() => ({ user: user }))
        } catch (e) {
            console.log(`Review Page Error! Details: ${e}`);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props !== prevProps) {
            if (this.props.single_review !== undefined) {
                this.setState(() => ({
                    starCount: this.props.single_review[0].rating,
                    comment: this.props.single_review[0].comment
                }))
            }

        }
    }

    // const [review, setReview] = useState('');
    // const [starCount, setStar] = useState(3);

    Back = () => {
        this.props.navigation.goBack()
    }

    Submit = () => {
        console.log(this.state);
        this.props.updateReview(this.props.navigation.state.params.review_uid, this.state.starCount, this.state.comment);
        this.props.navigation.replace('Review')
    }

    render() {
        return (
            <View style={reviewStyles.container}>
                <View style={reviewStyles.header_container}>
                    <View style={reviewStyles.header_text_container}>
                        <Text style={reviewStyles.header_text_bold}>EDIT REVIEW</Text>
                    </View>
                    <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={this.Back}
                        style={reviewStyles.header_icon_container}
                    >
                        <Icon style={globalStyles.icon_global} name="times" size={18} />
                    </TouchableOpacity>
                </View>
                <View style={reviewStyles.scaffold}>
                    <View>
                        <FlatList
                            data={this.props.single_review}
                            scrollEnabled={true}
                            showsVerticalScrollIndicator={false}
                            keyExtractor={(item) => item.uid}
                            renderItem={({ item }) => (
                                <View style={reviewStyles.review_container}>
                                    <View style={reviewStyles.review_details_container}>
                                        <View>
                                            <Text style={reviewStyles.review_details_header}>You to {item.reviewee_name}</Text>
                                            <View style={{ alignItems: 'flex-start' }}>
                                                <StarRating
                                                    disabled={false}
                                                    maxStars={5}
                                                    rating={this.state.starCount}
                                                    selectedStar={(rating) => this.setState(() => ({ starCount: rating }))}
                                                    fullStarColor='#FDBB3B'
                                                    starSize={13}
                                                    starStyle={{ marginRight: 10 }}
                                                />
                                            </View>
                                            <Text style={reviewStyles.review_details_header}>{item.created_at}</Text>
                                        </View>
                                        <View style={{ justifyContent: 'center', marginBottom: 8 }}>
                                            <TouchableOpacity
                                                activeOpacity={0.6}
                                                onPress={this.Submit}
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
                                            onChangeText={text => this.setState(() => ({ comment: text }))}
                                            defaultValue={item.comment}
                                        >
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
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getReviewByUID, updateReview }, dispatch)
}

const mapStateToProps = state => {
    return {
        single_review: state.reviews.item
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditReview);



