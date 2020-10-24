import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import StarRating from 'react-native-star-rating';
import { profileStyles } from '../../styles/styles';

export default class ToggleButton extends React.Component {
    state = {
        status: false
    }

    render() {
        return (
            <View style={profileStyles.review_details}>
                <View style={profileStyles.review_details_header}>
                    <View>
                        <Text style={profileStyles.review_details_label}>By {this.props.name}</Text>
                        <View style={{ alignSelf: 'flex-start' }}>
                            <StarRating
                                disabled={true}
                                maxStars={5}
                                rating={this.props.rating}
                                selectedStar={() => { }}
                                fullStarColor='#FDBB3B'
                                starSize={12}
                                starStyle={{ marginRight: 5 }}
                            />
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() => {
                                const newStatus = !this.state.status;
                                this.setState({
                                    status: newStatus,
                                });
                            }}
                        >
                            <Text style={profileStyles.hide_button_label} >{this.state.status ? "Show" : "Hide"}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.state.status?
                null
                : 
                <Text style={profileStyles.review_details_text}>{this.props.text}</Text>}
            </View>
        )
    }
}