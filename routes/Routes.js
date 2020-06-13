import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import Login from '../components/2_1_LoginPage.js';
import ForgotPassword from '../components/2_2_FpassPage.js';
import Selection from '../components/3_SelectionPage.js';
import SignupClient1 from '../components/4_SignupPage1_Client.js';
import SignupClient2 from '../components/4_SignupPage2_Client.js';
import SignupClient3 from '../components/4_SignupPage3_Client.js';
import SignupConsultant1 from '../components/4_SignupPage1_Consultant.js';
import SignupConsultant2 from '../components/4_SignupPage2_Consultant.js';
import SignupConsultant3_1 from '../components/4_SignupPage3_1_Consultant.js';
import SignupConsultant3_2 from '../components/4_SignupPage3_2_Consultant.js';
import SignupConsultant4 from '../components/4_SignupPage4_Consultant.js';

import Home from '../components/6_HomePage.js';

import Calendar1 from '../components/7_CalendarPage1.js';
import Calendar2 from '../components/7_CalendarPage2.js';
import Calendar3_Notify from '../components/7_CalendarPage3_Notify.js';
import Calendar3_Review from '../components/7_CalendarPage3_Review.js';

import Search from '../components/8_SearchPage.js';
import Review from '../components/9_ReviewPage.js';
import Profile from '../components/9_ProfilePage.js';
import Paypal from '../components/PaypalPage.js';

import React from 'react';
import { Text, TouchableOpacity } from 'react-native';                     
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
    SignupClient3: {
        screen: SignupClient3,
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
    Home: {
        screen: Home,
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
    Home: {
        screen: Home,
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

    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => (
                <Icon
                    color={`${tintColor}`}
                    name="user"
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
        initialRouteName: 'Home',
        activeColor: '#fff',
        inactiveColor: '#e3e3e3',
    }
)

//Consultant Tab Navigator
const consultantTabNavigator = createMaterialBottomTabNavigator(
    consultantTabScreens,
    {
        initialRouteName: 'Home',
        tabBarOptions: {
            activeBackgroundColor: '#19BAB9',
            inactiveBackgroundColor: '#0FA8A7',
            activeTintColor: '#fff',
            inactiveTintColor: '#CFCFCF',
            showLabel: false,
        }
    }
)

function getTabs() {
    // insert identifer whether logged in user is client or a consultant using firestore
    let client = false; //temporary identifier, <--insert here
    return (client) ? clientTabNavigator : consultantTabNavigator
}


const appScreens = {
    Home: {
        screen: getTabs(),
        navigationOptions: ( {navigation} ) => ({
            title: `insert logo`,
            headerRight: () => {
                return(
                    <TouchableOpacity
                        onPress={()=>{navigation.navigate('Login')}}
                        style={{paddingRight: 25}}
                    >
                        <Icon
                            color='#fff'
                            name='sign-out'
                            size={21}
                        />
                    </TouchableOpacity>
                )
            }
        }),
    },

    Profile: {
        screen: Profile,
    },

    Paypal: {
        screen: Paypal,
        navigationOptions: () => ({
            headerShown: false
        }),
    }
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
