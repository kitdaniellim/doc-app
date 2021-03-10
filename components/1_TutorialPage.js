import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ImageSlide } from './custom/ImageSlide'
import { homeStyles } from '../styles/styles';
import AsyncStorage from "@react-native-community/async-storage";

class Tutorial extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }


    async componentDidMount() {
        const user = JSON.parse(
            await AsyncStorage.getItem("user")
        );
        if (user != null) {
            this.setState(() => ({ user }));
        }
    }

    Skip = () => {
        const navigation = this.props.navigation;
        navigation.navigate('Home');
    }

    render() {
        const images_1 = [
            {
                key: 1,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fhome.png?alt=media&token=e9d79eef-a2b6-41b0-a06e-037fd0e907ef',
            },
            {
                key: 2,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fcalendar.png?alt=media&token=21758679-b8bd-44b3-9fa9-51d024ad6521',
            },
            {
                key: 3,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fsearch.png?alt=media&token=53ce672f-6c86-478e-830a-93f4d16d728e',
            },
            {
                key: 4,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Freview.png?alt=media&token=7e0e33d0-8890-4f8d-9d03-5cf123ccdcaa',
            },
            {
                key: 5,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fbell.png?alt=media&token=5eae4ac6-bdf9-47a0-a030-b2cf897524e1',
            },
            {
                key: 6,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fsettings.png?alt=media&token=f326b793-3c68-4f98-ae0f-f5283681c7ff',
            },
        ];

        const images_2 = [
            {
                key: 1,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fhome.png?alt=media&token=e9d79eef-a2b6-41b0-a06e-037fd0e907ef',
            },
            {
                key: 2,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fcalendar.png?alt=media&token=21758679-b8bd-44b3-9fa9-51d024ad6521',
            },
            {
                key: 3,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fsearch.png?alt=media&token=53ce672f-6c86-478e-830a-93f4d16d728e',
            },
            {
                key: 4,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fprofile.png?alt=media&token=69570fb5-a37a-494c-bf23-7d8a1f112916',
            },
            {
                key: 5,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fbell.png?alt=media&token=5eae4ac6-bdf9-47a0-a030-b2cf897524e1',
            },
            {
                key: 6,
                img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/tutorial%2Fsettings.png?alt=media&token=f326b793-3c68-4f98-ae0f-f5283681c7ff',
            },
        ];

        return (
            <View style={homeStyles.container}>
                <View style={{ flex: 1, marginTop: 90, marginBottom: 40 }}>
                    {(this.state.user.userType === "CLIENT") ?
                        <ImageSlide images={images_1} />
                        :
                        <ImageSlide images={images_2} />
                    }
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={this.Skip}
                    style={{ height: 40, width: 110, marginBottom: 38, borderRadius: 15, backgroundColor: '#19BAB9', justifyContent: 'center' }}
                >
                    <Text style={{ textAlign: 'center', color: '#fff' }}>Got it!</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Tutorial;