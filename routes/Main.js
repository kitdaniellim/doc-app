import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../components/custom/Header.js';
import Firebase from '../config/Firebase';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

//App Screens
import Landing from '../components/1_LandingPage.js';
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

//Actions
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentUserType, } from '../actions/users';


class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        console.log('MAIN PROPS')
        console.log(this.props)


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

        const MainStack = createStackNavigator();
        const HomeStackClient = createStackNavigator();
        const HomeStackConsultant = createStackNavigator();
        const CalendarStack = createStackNavigator();
        const SearchStack = createStackNavigator();
        const ProfileStack = createStackNavigator();
        const ReviewStack = createStackNavigator();

        const Tab = createMaterialBottomTabNavigator();

        function GetHomeStackClient() {
            return (
                <HomeStackClient.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <HomeStackClient.Screen
                        name="Home"
                        component={Home}
                    />
                    <HomeStackClient.Screen
                        name="Profile"
                        component={Profile}
                    />
                    <HomeStackClient.Screen
                        name="BookPage"
                        component={BookPage}
                    />
                </HomeStackClient.Navigator>
            );
        }

        function GetHomeStackConsultant() {
            return (
                <HomeStackConsultant.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <HomeStackConsultant.Screen
                        name="Home"
                        component={Home}
                    />
                </HomeStackConsultant.Navigator>
            );
        }

        function GetCalendarStack() {
            return (
                <CalendarStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <CalendarStack.Screen
                        name="Calendar1"
                        component={Calendar1}
                    />
                    <CalendarStack.Screen
                        name="Calendar2"
                        component={Calendar2}
                    />
                    <CalendarStack.Screen
                        name="Calendar3_Notify"
                        component={Calendar3_Notify}
                    />
                    <CalendarStack.Screen
                        name="Calendar3_Review"
                        component={Calendar3_Review}
                    />
                </CalendarStack.Navigator>
            );
        }

        function GetSearchStack() {
            return (
                <SearchStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <SearchStack.Screen
                        name="Search"
                        component={Search}
                        initialParams={{ userSpecialty: "None" }}
                    />
                </SearchStack.Navigator>
            );
        }

        function GetReviewStack() {
            return (
                <ReviewStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <ReviewStack.Screen
                        name="Review"
                        component={Review}
                    />
                    <ReviewStack.Screen
                        name="EditReview"
                        component={EditReview}
                    />
                </ReviewStack.Navigator>
            );
        }

        function GetProfileStack() {
            return (
                <ProfileStack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <ProfileStack.Screen
                        name="Profile"
                        component={Profile}
                    />
                    <ProfileStack.Screen
                        name="EditProfile_1"
                        component={EditProfile_1}
                        initialParams={{ office_details: [] }}
                    />
                    <ProfileStack.Screen
                        name="EditProfile_2"
                        component={EditProfile_2}
                    />
                </ProfileStack.Navigator>
            );
        }

        function GetTabs(props) {
            return (
                <Tab.Navigator
                    initialRouteName="Home"
                    activeColor="#19BAB9"
                    inactiveColor="#CFCFCF"
                    // barStyle={{ backgroundColor: '#19BAB9' }}
                >
                    {(props.userType === "CLIENT") ?
                        <>
                            <Tab.Screen
                                name="Home"
                                component={GetHomeStackClient}
                                options={{
                                    title: 'Home',
                                    tabBarIcon: ({ color }) => (
                                        <Icon
                                            color={color}
                                            name="home"
                                            size={22}
                                        />
                                    ),
                                    tabBarColor: '#fff',
                                }}
                            />
                        </> : <>
                            <Tab.Screen
                                name="Home"
                                component={GetHomeStackConsultant}
                                options={{
                                    title: 'Home',
                                    tabBarIcon: ({ color }) => (
                                        <Icon
                                            color={color}
                                            name="home"
                                            size={22}
                                        />
                                    ),
                                    tabBarColor: '#fff',
                                }}
                            />
                        </>
                    }
                    <Tab.Screen
                        name="Calendar"
                        component={GetCalendarStack}
                        options={{
                            tabBarIcon: ({ color }) => (
                                <Icon
                                    color={color}
                                    name="calendar"
                                    size={22}
                                />
                            ),
                            tabBarColor: '#fff',
                        }}
                    />
                    <Tab.Screen
                        name="Search"
                        component={GetSearchStack}
                        options={{
                            title: 'Search',
                            tabBarIcon: ({ color }) => (
                                <Icon
                                    color={color}
                                    name="search"
                                    size={22}
                                />
                            ),
                            tabBarColor: '#fff',
                        }}
                    />
                    {(props.userType === "CLIENT") ?
                        <>
                            <Tab.Screen
                                name="Review"
                                component={GetReviewStack}
                                options={{
                                    title: 'Review',
                                    tabBarIcon: ({ color }) => (
                                        <Icon
                                            color={color}
                                            name="pencil"
                                            size={22}
                                        />
                                    ),
                                    tabBarColor: '#fff',
                                }}
                            />
                        </> : <>
                            <Tab.Screen
                                name="Profile"
                                component={GetProfileStack}
                                options={{
                                    title: 'Profile',
                                    tabBarIcon: ({ color }) => (
                                        <Icon
                                            color={color}
                                            name="user"
                                            size={22}
                                        />
                                    ),
                                    tabBarColor: '#fff',
                                }}
                            />
                        </>
                    }
                </Tab.Navigator>
            );
        }

        return (
            <MainStack.Navigator
                screenOptions={{
                    headerForceInset: { top: 'never', bottom: 'never' },
                    headerStyle: {
                        backgroundColor: '#19BAB9',
                        borderBottomColor: '#19BAB9',
                    },
                    headerTintColor: '#fff',
                    title: null,
                }}
            >
                {/* <MainStack.Screen
                    name="Landing"
                    component={Landing}
                    options={{
                        headerShown: false,
                    }}
                    initialParams={{ path: 'main', }}
                /> */}
                <MainStack.Screen
                    name="Tutorial"
                    component={Tutorial}
                    options={{
                        headerShown: false,
                    }}
                />
                <MainStack.Screen
                    name="Home"
                    component={() => { return GetTabs(this.props) }}
                    options={{
                        headerTitle: () => <Header />,
                        headerLeft: () => null,
                        headerRight: () => {
                            return (
                                <View style={{ flexDirection: 'row' }}>
                                    <Menu onSelect={() => { }}>
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
                                        </MenuOptions>
                                    </Menu>
                                    <Menu onSelect={
                                        value => {
                                            if (value === 1) {
                                                Firebase.auth().signOut();
                                                this.props.updateCurrentUserType(undefined);
                                            }
                                            else {
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
                                        </MenuOptions>
                                    </Menu>
                                </View>
                            )
                        }
                    }}
                />
                <MainStack.Screen
                    name="Paypal"
                    component={Paypal}
                    options={{
                        headerShown: false,
                    }}
                />
            </MainStack.Navigator>
        );
    }
}

// const optionsStyles = StyleSheet.create({
//     optionsContainer: {
//         //   backgroundColor: 'green',
//         marginTop: 48,
//         justifyContent: 'flex-end',
//         width: 200,
//     },
//     optionsWrapper: {
//         //   backgroundColor: 'purple',
//         // marginRight: 50,

//     },
//     optionWrapper: {
//         //   backgroundColor: 'yellow',
//         // marginRight: 50,
//         height: 45,
//         justifyContent: 'center',
//         marginVertical: 11,
//     },
//     optionTouchable: {
//         //   underlayColor: 'gold',
//         activeOpacity: 70,
//         padding: 15,
//         margin: 10,
//     },
//     optionText: {
//         color: 'black',
//         marginHorizontal: 10,
//     },
// });

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateCurrentUserType }, dispatch)
}
const mapStateToProps = state => {
    return {
        userType: state.users.current_userType,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);