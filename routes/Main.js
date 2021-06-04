import React from 'react';
import { Vibration, View, FlatList, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Badge } from 'react-native-elements'
import Header from '../components/custom/Header.js';
import * as RootNavigation from './RootNavigation.js';

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
import Home from '../components/6_HomePage.js';
import Calendar1 from '../components/7_CalendarPage1.js';
import Calendar2 from '../components/7_CalendarPage2.js';
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
import { updateCurrentUser, updateToken, logout } from '../actions/users';
import { getNotifs } from '../actions/notifs';
import { resetAppointments } from '../actions/appointments';
import AsyncStorage from "@react-native-community/async-storage";
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import Firebase, { db } from '../config/Firebase'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true,
    }),
});

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isMounted: false,
            user: {},
            notification: {},
            count: 0,
        }
    }

    componentDidMount = async () => {
        const user = JSON.parse(
            await AsyncStorage.getItem("user")
        );
        await this.props.getNotifs(user.uid);
        // if (this.props.userNotifs !== undefined) {
        // console.log(this.props.userNotifs)
        // console.log('helhlelhleh')
        // this.setState(() => ({
        //     count: this.props.userNotifs.notifs.length
        // }))
        // }

        this.setState(() => ({
            user: user
        }))
        // console.log(user) 
        this.registerForPushNotificationsAsync(user.uid, user.expoToken);
        // this._notificationSubscription = Notifications.addNotificationReceivedListener(this._handleNotification);

        Notifications.addNotificationReceivedListener(this._handleNotification);
        Notifications.addNotificationResponseReceivedListener(this._handleNotificationResponse);

        //If user has expoToken, notifications is allowed
        if (this.state.user.expoToken !== undefined) {
            //Listener for real-time notifications
            //Handles receiving notifications on a realtime basis
            db.collection('notifs')
                .doc(user.uid)
                .onSnapshot(documentSnapshot => {
                    let result = documentSnapshot.data()
                    if (result !== undefined) {
                        // console.log(result.notifs[0])
                        if (this.state.isMounted) {
                            this.sendPushNotification(result.notifs[0]);
                        }
                    }
                });
        }

        this.setState(() => ({
            isMounted: true
        }))
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.userNotifs == undefined || nextProps.userNotifs == undefined) {
            return true;
        }
        // console.log('THIS PROPS')
        // console.log(this.props.userNotifs.uid)
        // console.log('-------------------')
        // console.log('NEXT PROPS')
        // console.log(nextProps.userNotifs.uid)
        // console.log('-------------------')
        if (
            this.props.userNotifs !== nextProps.userNotifs &&
            this.props.userNotifs.uid == nextProps.userNotifs.uid ||
            this.props.current_user !== nextProps.current_user
        ) {

            return true;
        } else {
            return false;
        }
    }

    sendPushNotification = async (notif) => {
        const message = {
            to: this.state.user.expoToken,
            sound: 'default',
            title: notif.title,
            body: notif.text,
            // data: { data: 'goes here' },
            _displayInForeground: true,
        };
        // console.log(message)
        await fetch('https://exp.host/--/api/v2/push/send', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Accept-encoding': 'gzip, deflate',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(message),
        });
    };

    // _handleNotification = () => {
    //     Vibration.vibrate();
    // };

    _handleNotification = notification => {
        Vibration.vibrate();
        // console.log('HELLOOOOOO')
        // console.log(notification)
        this.setState({ notification: notification });
    };

    _handleNotificationResponse = response => {
        console.log(response);
    };

    registerForPushNotificationsAsync = async (uid, userToken) => {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        // console.log(finalStatus);
        if (existingStatus !== 'granted' || userToken === undefined) {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== 'granted') {
            alert('Failed to get push token for push notification!');
            return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        alert(token)
        await this.props.updateToken(uid, token).then(async () => {
            let user = this.state.user
            user['expoToken'] = token;
            AsyncStorage.setItem('user', JSON.stringify(user));
        })

        // if (existingStatus !== 'granted' || userToken === undefined) {
        //     Alert.alert(
        //         'Allow Push-in Notifications',
        //         'Hey! You might want to enable push-in notifications for this app, they are good.',
        //         [
        //             {
        //                 text: 'No',
        //                 onPress: () => console.log('Cancel Pressed'),
        //                 style: 'cancel'
        //             },
        //             {
        //                 text: 'Yes',
        //                 onPress: async () => {
        //                     await Permissions.askAsync(Permissions.NOTIFICATIONS);
        //                     const token = await Notifications.getExpoPushTokenAsync();

        //                     await this.props.updateToken(uid, token).then(async () => {
        //                         let user = this.state.user
        //                         user['expoToken'] = token;
        //                         AsyncStorage.setItem('user', JSON.stringify(user));
        //                     })
        //                 }
        //             }
        //         ]
        //     )
        // }
        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
    };





    render() {
        const optionsStyles = {
            optionsContainer: {
                //   backgroundColor: 'green',
                marginTop: 48,
                justifyContent: 'flex-end',
                width: 250,
            },
            optionsWrapper: {
                //   backgroundColor: 'purple',
                // marginRight: 50,
            },

            optionWrapper: {
                //   backgroundColor: 'yellow',
                // marginRight: 50,
                height: 80,
                justifyContent: 'center',
                padding: 10,
                paddingRight: 16,
                // marginVertical: 8,
            },
            optionTouchable: {
                //   underlayColor: 'gold',
                activeOpacity: 30,
                // padding: 15,
                // margin: 10,
            },
            optionText: {
                color: 'black',
                marginHorizontal: 6,
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
                    <MainStack.Screen
                        name="Paypal"
                        component={Paypal}
                        options={{
                            headerShown: false,
                        }}
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
                        name="Calendar3_Review"
                        component={Calendar3_Review}
                    />
                </CalendarStack.Navigator>
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
                >
                    {(props.current_user.userType === "CLIENT") ?
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
                        component={Search}
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
                    {(props.current_user.userType === "CLIENT") ?
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
                    // headerForceInset: { top: 'never', bottom: 'never' },
                    headerStyle: {
                        backgroundColor: '#19BAB9',
                        borderBottomColor: '#19BAB9',
                    },
                    headerTintColor: '#fff',
                    title: null,
                }}
            >
                {/* <MainStack.Screen
                    name="Tutorial"
                    component={Tutorial}
                    options={{
                        headerShown: false,
                    }}
                /> */}
                <MainStack.Screen
                    name="Home"
                    options={{
                        headerStyle: {
                            height: 120,
                            backgroundColor: '#19BAB9',
                        },
                        headerTitle: () => <Header />,
                        headerLeft: (props) => {
                            let name = this.props.current_user.fullName;
                            if(name !== undefined) {
                                name = name.split(" ")[0]
                            }
                            console.log(name.length);
                            return(
                                <View style={{
                                    marginHorizontal: 15,
                                    justifyContent: 'center',
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontSize: (name.length < 8)? 21 : 16,
                                        fontWeight: '600',
                                    }}>
                                        {/* Hi! {this.state.user.fullName.substr(0, this.state.user.fullName.indexOf(' '))} */}
                                        {/* Hi! {name} */}
                                        Hi! {(name.length < 8)? name : "\n" + name }
                                    </Text>
                                </View>
                            );
                        },
                        headerRight: () => {
                            return (this.props.userNotifs !== undefined && Object.keys(this.props.userNotifs).length != 0 && this.props.userNotifs.notifs.length != 0) ?
                                <View style={{ flexDirection: 'row' }}>
                                    <Menu
                                        onOpen={() => {
                                            // console.log(this.state.count)
                                            // this.setState(() => ({
                                            //     count: 0,
                                            // }))
                                        }}

                                        onSelect={(date) => {
                                            console.log(date)
                                            RootNavigation.navigate("Calendar", {
                                                screen: 'Calendar2',
                                                params: { date: date }
                                            });
                                        }}>
                                        <MenuTrigger
                                            style={{ marginRight: 10, padding: 10, }}
                                        >
                                            <Icon
                                                color='#fff'
                                                name='bell'
                                                size={21}
                                            />
                                            {(this.props.userNotifs.notifs.length != 0) ?
                                                <Badge
                                                    value={this.props.userNotifs.notifs.length}
                                                    containerStyle={{ position: 'absolute', bottom: -1, right: -4 }}
                                                    status="error"
                                                />
                                                :
                                                null
                                            }
                                        </MenuTrigger>
                                        <MenuOptions customStyles={optionsStyles}>
                                            {/* CODE FOR NOTIFICATIONS */}
                                            <View style={{
                                                minHeight: 80,
                                                maxHeight: 240,
                                            }}>
                                                <FlatList
                                                    data={this.props.userNotifs.notifs}
                                                    showsVerticalScrollIndicator={false}
                                                    keyExtractor={(item, index) => index.toString()}
                                                    ItemSeparatorComponent={() => {
                                                        return (
                                                            <View style={{ borderBottomColor: '#00000080', borderBottomWidth: 1, alignSelf: 'stretch' }} />
                                                        );
                                                    }}
                                                    renderItem={({ item }) => (
                                                        <View style={{ flexDirection: 'row' }}>
                                                            <View style={{ flex: 3 }}>
                                                                <MenuOption value={item.date} text={item.text} />
                                                            </View>
                                                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                                                <Text style={{ fontSize: 12, paddingRight: 20 }}>{item.created_at}</Text>
                                                            </View>
                                                        </View>

                                                    )}
                                                />
                                            </View>

                                        </MenuOptions>
                                    </Menu>
                                    <Menu onSelect={
                                        async value => {
                                            if (value === 1) {
                                                Firebase.auth().signOut();
                                                await this.props.logout();
                                                await this.props.resetAppointments();
                                                await AsyncStorage.removeItem('user');
                                                await AsyncStorage.removeItem('appointments');
                                                await this.props.updateCurrentUser(undefined);
                                            }
                                            else {
                                                // navigation.navigate('Home', { action: -1 })
                                            }
                                        }
                                    }>
                                        <MenuTrigger
                                            style={{ marginRight: 10, padding: 10, }}
                                        >
                                            <Icon
                                                color='#fff'
                                                name='ellipsis-v'
                                                size={21}
                                            />
                                        </MenuTrigger>
                                        <MenuOptions customStyles={optionsStyles}>
                                            <View style={{
                                                minHeight: 80,
                                                maxHeight: 240,
                                            }}>
                                                <MenuOption value={1} text='Sign Out' />
                                            </View>
                                        </MenuOptions>
                                    </Menu>
                                </View>
                                :
                                <View style={{ flexDirection: 'row' }}>
                                    <Menu onSelect={() => { }}>
                                        <MenuTrigger
                                            style={{ marginRight: 15, padding: 10, }}
                                        >
                                            <Icon
                                                color='#fff'
                                                name='bell'
                                                size={21}
                                            />
                                        </MenuTrigger>
                                        <MenuOptions customStyles={optionsStyles}>
                                            <View style={{
                                                minHeight: 80,
                                                maxHeight: 240,
                                            }}>
                                                <MenuOption text={'You have no notifications yet!'} />
                                            </View>
                                        </MenuOptions>
                                    </Menu>
                                    <Menu onSelect={
                                        async value => {
                                            if (value === 1) {
                                                Firebase.auth().signOut();
                                                await this.props.logout();
                                                await this.props.resetAppointments();
                                                await AsyncStorage.removeItem('user');
                                                await AsyncStorage.removeItem('appointments');
                                                await this.props.updateCurrentUser(undefined);
                                            }
                                            else {
                                                // navigation.navigate('Home', { action: -1 })
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
                                            <View style={{
                                                minHeight: 80,
                                                maxHeight: 240,
                                            }}>
                                                <MenuOption value={1} text='Sign Out' />
                                            </View>
                                        </MenuOptions>
                                    </Menu>
                                </View>
                                ;
                        }
                    }}
                >
                    {() => GetTabs(this.props)}
                </MainStack.Screen >
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
    return bindActionCreators({ updateCurrentUser, getNotifs, updateToken, logout, resetAppointments }, dispatch)
}
const mapStateToProps = state => {
    return {
        current_user: state.users.current_user,
        userNotifs: state.notifs.notifs,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main);