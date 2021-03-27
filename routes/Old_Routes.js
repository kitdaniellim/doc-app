




import Firebase from '../config/Firebase';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentUserType, } from '../actions/users';
import AsyncStorage from "@react-native-community/async-storage";
//Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createAppContainer, createSwitchNavigator } from '@react-navigation/native';

//Auth Screens
import Landing from '../components/1_LandingPage.js';
import Login from '../components/2_1_LoginPage.js';
import ForgotPassword from '../components/2_2_FpassPage.js';
import Selection from '../components/3_SelectionPage.js';
import Signup1 from '../components/4_SignupPage1.js';
import SignupClient2 from '../components/4_SignupPage2_Client.js';
import SignupConsultant2 from '../components/4_SignupPage2_Consultant.js';
import SignupConsultant3_1 from '../components/4_SignupPage3_1_Consultant.js';
import SignupConsultant3_2 from '../components/4_SignupPage3_2_Consultant.js';
import Signup_TermsAndAgreement from '../components/4_Signup_TermsAndAgreement.js';

//App Screens
import Tutorial from '../components/1_TutorialPage.js';
import Home from '../components/6_HomePage.js';
import Calendar1 from '../components/7_CalendarPage1.js';
import Calendar2 from '../components/7_CalendarPage2.js';
import Calendar3_Notify from '../components/7_CalendarPage3_Notify.js';
import Calendar3_Review from '../components/7_CalendarPage3_Review.js';
import Search from '../components/8_SearchPage.js';
import Review from '../components/9_ReviewPage.js';
import EditReview from '../components/EditReview.js';
import Profile from '../components/9_ProfilePage.js';
import BookPage from '../components/10_BookPage.js';
import EditProfile_1 from '../components/EditProfilePage_1.js';
import EditProfile_2 from '../components/EditProfilePage_2.js';
import Paypal from '../components/PaypalPage.js';
// import Book1_Date from '../components/BookPage1_Date.js';
// import Book2_Time from '../components/BookPage2_Time.js';
// import Book3_Form from '../components/BookPage3_Form.js';
// import Book4_Confirmation from '../components/BookPage4_Confirmation.js';

import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/custom/Header.js';

import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

class Routes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        const user = JSON.parse(
            await AsyncStorage.getItem("user")
        );

        if (user != null) {
            this.props.updateCurrentUserType(user.userType)
        }
    }

    render() {
        console.log('SHOWING ROUTES PROPS============')
        console.log(this.props)
        // console.log(this.state)
        console.log('END OF PROPS============')
        const getTabs = () => {
            let ret;
            switch (this.props.userType) {
                case "CLIENT": ret = clientTabNavigator;
                    console.log('Client Logged In');
                    break;
                case "CONSULTANT": ret = consultantTabNavigator;
                    console.log('Consultant Logged In');
                    break;
                default:
                    ret = consultantTabNavigator;
                    console.log('No user logged in.. Processing user type.')
            }
            return ret;
        }

        const optionsStyles = {
            optionsContainer: {
                //   backgroundColor: 'green',
                marginTop: 48,
                justifyContent: 'flex-end',
                width: 200,
            },
            optionsWrapper: {
                //   backgroundColor: 'purple',
                // marginRight: 50,

            },
            optionWrapper: {
                //   backgroundColor: 'yellow',
                // marginRight: 50,
                height: 45,
                justifyContent: 'center',
                marginVertical: 11,
            },
            optionTouchable: {
                //   underlayColor: 'gold',
                activeOpacity: 70,
                padding: 15,
                margin: 10,
            },
            optionText: {
                color: 'black',
                marginHorizontal: 10,
            },
        };

        const authScreens = {
            Landing: {
                screen: Landing,
                navigationOptions: () => ({
                    headerShown: false
                }),
            },
            Login: {
                screen: Login,
                navigationOptions: () => ({
                    headerShown: false
                }),
            },
            ForgotPassword: {
                screen: ForgotPassword,
            },
            Selection: {
                screen: Selection,
            },
            Signup1: {
                screen: Signup1,
            },
            SignupClient2: {
                screen: SignupClient2,
            },
            Signup_TermsAndAgreement: {
                screen: Signup_TermsAndAgreement,
            },

            Signup1: {
                screen: Signup1,
            },
            SignupConsultant2: {
                screen: SignupConsultant2,
            },
            SignupConsultant3_1: {
                screen: SignupConsultant3_1,
                params: { key: 0, office_schedules: [] }
            },
            SignupConsultant3_2: {
                screen: SignupConsultant3_2
            },
            Signup_TermsAndAgreement: {
                screen: Signup_TermsAndAgreement
            }
        }

        //Screen Stack for Client side is different from Consultant side 
        //Client side has profile located under 'Home' section rather than 'Profile' section - Daniel
        const homeScreensC = {
            Home: {
                screen: Home,
            },
            Profile: {
                screen: Profile,
            },
            BookPage: {
                screen: BookPage,
            },
            // Book1_Date: {
            //     screen: Book1_Date,
            // },
            // Book2_Time: {
            //     screen: Book2_Time,
            // },
            // Book3_Form: {
            //     screen: Book3_Form,
            // },
        }

        const homeScreens = {
            Home: {
                screen: Home,
            },
        }

        const calendarScreens = {
            Calendar1: {
                screen: Calendar1,
            },
            Calendar2: {
                screen: Calendar2,
            },
            Calendar3_Notify: {
                screen: Calendar3_Notify,
            },
            Calendar3_Review: {
                screen: Calendar3_Review,
            },
        }

        const reviewScreens = {
            Review: {
                screen: Review,
            },
            EditReview: {
                screen: EditReview,
            }
        }

        const profileScreens = {
            Profile: {
                screen: Profile,
            },
            EditProfile_1: {
                screen: EditProfile_1,
                params: { office_details: [] },
            },
            EditProfile_2: {
                screen: EditProfile_2,
            },
        }

        const HomeStack = createStackNavigator(
            (this.props.userType === "CLIENT") ? homeScreensC : homeScreens,
            {
                defaultNavigationOptions: {
                    headerShown: false
                }
            }
        );

        const CalendarStack = createStackNavigator(
            calendarScreens,
            {
                defaultNavigationOptions: {
                    headerShown: false
                }
            }
        );

        const ReviewStack = createStackNavigator(
            reviewScreens,
            {
                defaultNavigationOptions: {
                    headerShown: false
                }
            }
        );

        const ProfileStack = createStackNavigator(
            profileScreens,
            {
                defaultNavigationOptions: {
                    headerShown: false
                }
            }
        );

        const clientTabScreens = {
            Home: {
                screen: HomeStack,
                navigationOptions: {
                    title: 'Home',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="home"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },

            Calendar: {
                screen: CalendarStack,
                navigationOptions: {
                    headerShown: false,
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="calendar"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },

            Search: {
                screen: Search,
                params: { userSpecialty: "None" },
                navigationOptions: {
                    title: 'Search',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="search"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },

            Review: {
                screen: ReviewStack,
                navigationOptions: {
                    title: 'Review',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="pencil"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },
        }

        const consultantTabScreens = {
            Home: {
                screen: HomeStack,
                navigationOptions: {
                    title: 'Home',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="home"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },

            Calendar: {
                screen: CalendarStack,
                navigationOptions: {
                    title: 'Calendar',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="calendar"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },

            Search: {
                screen: Search,
                params: { userSpecialty: "None" },
                navigationOptions: {
                    title: 'Search',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="search"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },

            Profile: {
                screen: ProfileStack,
                navigationOptions: {
                    title: 'Profile',
                    tabBarIcon: ({ tintColor }) => (
                        <Icon
                            color={`${tintColor}`}
                            name="user"
                            size={22}
                        />
                    ),
                    tabBarColor: '#fff',
                },
            },
        }

        //Client Tab Navigator
        const clientTabNavigator = createMaterialBottomTabNavigator(
            clientTabScreens,
            {
                initialRouteName: 'Home',
                activeColor: '#19BAB9',
                inactiveColor: '#CFCFCF',
            }
        )

        //Consultant Tab Navigator
        const consultantTabNavigator = createMaterialBottomTabNavigator(
            consultantTabScreens,
            {
                initialRouteName: 'Home',
                activeColor: '#19BAB9',
                inactiveColor: '#CFCFCF',
            }
        )

        //Array for Notifications
        const notifs = [
            {
                key: 1,
                text: 'Caesar De Los Santos would like to schedule an appointment with you.'
            },
            {
                key: 2,
                text: 'Jessica Wong would like to schedule an appointment with you.'
            },
            {
                key: 3,
                text: 'Charles Lee has posted a review about you!'
            },
            {
                key: 4,
                text: 'Patrick Escobar would like to schedule an appointment with you.'
            },
            {
                key: 5,
                text: 'Jefferson Yao would like to schedule an appointment with you.'
            },
            {
                key: 6,
                text: 'Thomas Wu would like to schedule an appointment with you.'
            },
            {
                key: 7,
                text: 'Sherlock Holmes would like to schedule an appointment with you.'
            },
            {
                key: 8,
                text: 'Connor McGregor would like to schedule an appointment with you.'
            },
            {
                key: 9,
                text: 'Elon Musk would like to schedule an appointment with you.'
            },
        ]

        const appScreens = {
            Tutorial: {
                screen: Tutorial,
                navigationOptions: () => ({
                    headerShown: false
                }),
            },
            Home: {
                screen: getTabs(),
                navigationOptions: ({ navigation }) => ({
                    headerTitle: () => <Header />,
                    headerLeft: () => null,
                    headerRight: () => {
                        console.log('IM INSIDE BITCHES')
                        console.log(this.props)
                        console.log('end of header props---')
                        return (
                            <View style={{ flexDirection: 'row' }}>
                                {/* <Menu onSelect={() => { navigation.navigate('Calendar1') }}> */}
                                <Menu onSelect={() => {
                                    console.log('onselect porps!?!???')
                                    console.log(this.props)
                                    console.log('end of onselect props---')

                                }}>
                                    <MenuTrigger
                                        style={{ marginRight: 25, padding: 10, }}
                                    >
                                        <Icon
                                            color='#fff'
                                            name='bell'
                                            size={21}
                                        />
                                    </MenuTrigger>
                                    <MenuOptions customStyles={optionsStyles}>
                                        <View style={{ height: 70 }}>
                                            <MenuOption text={'Notifications Coming Soon'} />
                                        </View>
                                        {/* CODE FOR NOTIFICATIONS */}
                                        {/* <View style={{ height: 270 }}>
                                            <FlatList
                                                data={notifs}
                                                showsVerticalScrollIndicator={false}
                                                keyExtractor={(item) => item.key.toString()}
                                                ItemSeparatorComponent={() => {
                                                    return (
                                                        <View style={{ borderBottomColor: '#00000080', borderBottomWidth: 1, alignSelf: 'stretch' }} />
                                                    );
                                                }}
                                                renderItem={({ item }) => (
                                                    <MenuOption key={item.key} value={item.key} text={item.text} />
                                                )}
                                            />
                                        </View> */}
                                    </MenuOptions>
                                </Menu>
                                <Menu onSelect={
                                    value => {
                                        if (value === 1) {
                                            Firebase.auth().signOut()
                                            navigation.popToTop() && navigation.navigate('Login');
                                            // navigation.reset('Login')
                                        } else {
                                            navigation.navigate('Home', { action: -1 })
                                        }
                                    }
                                }>
                                    <MenuTrigger
                                        style={{ marginRight: 25, padding: 10, }}
                                    >
                                        <Icon
                                            color='#fff'
                                            name='ellipsis-v'
                                            size={21}
                                        />
                                    </MenuTrigger>
                                    <MenuOptions customStyles={optionsStyles}>
                                        <MenuOption value={1} text='Sign Out' />
                                        {/* <MenuOption value={2} text='About Us' /> */}
                                    </MenuOptions>
                                </Menu>
                            </View>
                        )
                    }
                }),
            },
            Paypal: {
                screen: Paypal,
                navigationOptions: () => ({
                    headerShown: false
                }),
            },

        }

        const AuthStack = createStackNavigator(
            authScreens,
            {
                defaultNavigationOptions: {
                    headerForceInset: { top: 'never', bottom: 'never' },
                    headerStyle: {
                        backgroundColor: '#19BAB9',
                        borderBottomColor: '#19BAB9',
                        shadowOpacity: 0,
                        shadowOffset: {
                            height: 0,
                        },
                        shadowRadius: 0,
                        elevation: 0
                    },
                    headerTintColor: '#fff',
                    title: null,
                }
            }
        );

        const AppStack = createStackNavigator(
            appScreens,
            {
                defaultNavigationOptions: {
                    headerForceInset: { top: 'never', bottom: 'never'},
                    headerStyle: {
                        backgroundColor: '#19BAB9',
                        borderBottomColor: '#19BAB9',
                    },
                    headerTintColor: '#fff',
                    title: null,
                }
            }
        );

        const SwitchStack = createSwitchNavigator({
            Auth: AuthStack,
            App: AppStack
        }, {
            initialRouteName: 'Auth'
        }
        )

        const AppContainer = createAppContainer(SwitchStack);

        return <AppContainer />;
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateCurrentUserType }, dispatch)
}
const mapStateToProps = state => {
    return {
        userType: state.users.current_userType,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Routes);