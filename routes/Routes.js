import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
// import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Selection from '../components/2_SelectionPage.js';
import ForgotPassword from '../components/5_FpassPage.js';

import LoginClient from '../components/3_LoginPage_Client.js';
import SignupClient1 from '../components/4_SignupPage1_Client.js';
import SignupClient2 from '../components/4_SignupPage2_Client.js';
import HomeClient from '../components/6_HomePage_Client.js';

import Calendar from '../components/7_CalendarPage_Client.js';
import Search from '../components/8_SearchPage_Client.js';
import Profile from '../components/9_ProfilePage_Client.js';


import LoginConsultant from '../components/3_LoginPage_Consultant.js';
import SignupConsultant1 from '../components/4_SignupPage1_Consultant.js';
import SignupConsultant2 from '../components/4_SignupPage2_Consultant.js';
import SignupConsultant3_1 from '../components/4_SignupPage3_1_Consultant.js';
import SignupConsultant3_2 from '../components/4_SignupPage3_2_Consultant.js';
import SignupConsultant4 from '../components/4_SignupPage4_Consultant.js';

import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navbarStyles } from '../styles/styles';

const tabScreens = {
    HomeClient: {
        screen: HomeClient,
        navigationOptions: {
            title: 'Home',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    style={navbarStyles.icon}
                    name="home"
                    size={21}
                />
            )
        },
    },

    Calendar: {
        screen: Calendar,
        navigationOptions: {
            title: 'Calendar',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    style={navbarStyles.icon}
                    name="calendar"
                    size={21}
                />
            )
        },
    },

    Search: {
        screen: Search,
        navigationOptions: {
            title: 'Search',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    style={navbarStyles.icon}
                    name="search"
                    size={21}
                />
            )
        },
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    style={navbarStyles.icon}
                    name="star"
                    size={21}
                />
            )
        },
    },
}


const SampleTabNavigator = createBottomTabNavigator(
    tabScreens,
    {
        initialRouteName: 'HomeClient',
        tabBarOptions: {
            activeBackgroundColor: '#19BAB9',
            inactiveBackgroundColor: '#19BAB9',
            activeTintColor: '#fff',
            inactiveTintColor: '#201d1d'
        }
    }
)



const regScreens = {
    Selection: {
        screen: Selection,
        navigationOptions: () => ({
            headerShown: false
        }),
    },
    ForgotPassword: {
        screen: ForgotPassword,
    },

    LoginClient: {
        screen: LoginClient,
    },
    SignupClient1: {
        screen: SignupClient1,
    },
    SignupClient2: {
        screen: SignupClient2,
    },

    LoginConsultant: {
        screen: LoginConsultant,
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

}

const appScreens = {
    HomeClient: {
        screen: SampleTabNavigator,
        navigationOptions: () => ({
            title: `insert logo`,
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
