import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Login from '../components/2_1_LoginPage.js';
import ForgotPassword from '../components/2_2_FpassPage.js';
import Selection from '../components/3_SelectionPage.js';

import SignupClient1 from '../components/4_SignupPage1_Client.js';
import SignupClient2 from '../components/4_SignupPage2_Client.js';

import HomeClient from '../components/6_HomePage_Client.js';

import Calendar1 from '../components/7_CalendarPage1_Client.js';
import Calendar2 from '../components/7_CalendarPage2_Client.js';
import Search from '../components/8_SearchPage_Client.js';
import Review from '../components/9_ReviewPage_Client.js';
import Profile from '../components/9_ProfilePage_Client.js';

import SignupConsultant1 from '../components/4_SignupPage1_Consultant.js';
import SignupConsultant2 from '../components/4_SignupPage2_Consultant.js';
import SignupConsultant3_1 from '../components/4_SignupPage3_1_Consultant.js';
import SignupConsultant3_2 from '../components/4_SignupPage3_2_Consultant.js';
import SignupConsultant4 from '../components/4_SignupPage4_Consultant.js';

import AppointmentPage from '../components/AppointmentPage.js';

import React from 'react';
import { Button, Text, View, TouchableOpacity, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navbarStyles } from '../styles/styles';

const regScreens = {
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

    SignupClient1: {
        screen: SignupClient1,
    },
    SignupClient2: {
        screen: SignupClient2,
    },

    SignupConsultant1: {
        screen: SignupConsultant1,
    },
    SignupConsultant2: {
        screen: SignupConsultant2,
    },
    SignupConsultant3_1: {
        screen: SignupConsultant3_1
    },
    SignupConsultant3_2: {
        screen: SignupConsultant3_2
    },
    SignupConsultant4: {
        screen: SignupConsultant4
    },
    AppointmentPage: {
        screen: AppointmentPage
    }
}

const calendarScreens = {
    Calendar1: {
        screen: Calendar1,
    },

    Calendar2: {
        screen: Calendar2,
    },
}

const CalendarStack = createStackNavigator(
    calendarScreens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#19BAB9',
                borderBottomColor: '#19BAB9',
            },
            headerTintColor: '#fff',
            title: null,
            headerShown: false
        }
    }
);

const clientTabScreens = {
    HomeClient: {
        screen: HomeClient,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    name="home"
                    size={21}
                />
            ),
            tabBarColor: '#19BAB9',
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
                    size={21}
                />
            ),
            tabBarColor: '#19BAB9',
        },
    },

    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    name="search"
                    size={21}
                />
            ),
            tabBarColor: '#19BAB9',
        },
    },

    Review: {
        screen: Review,
        navigationOptions: {
            title: 'Review',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    name="pencil"
                    size={21}
                />
            ),
            tabBarColor: '#FDBB3B',
        },
    },
}

const consultantTabScreens = {
    HomeClient: {
        screen: HomeClient,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    name="home"
                    size={21}
                />
            ),
            tabBarColor: '#19BAB9',
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
                    size={21}
                />
            ),
            tabBarColor: '#56D74F',
        },
    },

    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    name="search"
                    size={21}
                />
            ),
            tabBarColor: '#0CB4A6',
        },
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    name="user-o"
                    size={21}
                />
            ),
            tabBarColor: '#FDBB3B',
        },
    },
}

//Client Tab Navigator
const clientTabNavigator = createMaterialBottomTabNavigator(
    clientTabScreens,
    {
        initialRouteName: 'HomeClient',
        activeColor: '#fff',
        inactiveColor: '#e3e3e3',
    }
)

//Consultant Tab Navigator
const consultantTabNavigator = createMaterialBottomTabNavigator(
    consultantTabScreens,
    {
        initialRouteName: 'HomeClient',
        tabBarOptions: {
            activeBackgroundColor: '#19BAB9',
            inactiveBackgroundColor: '#0FA8A7',
            activeTintColor: '#fff',
            inactiveTintColor: '#CFCFCF',
            showLabel: false,
        }
    }
)

const getTabs = () => {
    // insert identifer whether logged in user is client or a consultant using firestore
    let client = true; //temporary identifier, <--insert here
    return (client) ? clientTabNavigator : consultantTabNavigator
}

const appScreens = {
    HomeClient: {
        screen: getTabs(),
        navigationOptions: ({navigation}) => ({
            title: `insert logo`,
            headerRight: (
                <TouchableOpacity
                    style={navbarStyles.appointment_button}
                    onPress={() => {
                        navigation.navigate('AppointmentPage');
                    }}
                >
                    <Text style={navbarStyles.button_text}>+ New Appointment</Text>
                </TouchableOpacity>
            )
        }),
    },
}

const AuthStack = createStackNavigator(
    regScreens,
    {
        defaultNavigationOptions: {
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

export default createAppContainer(SwitchStack);
