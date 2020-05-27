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


import LoginConsultant from '../components/3_LoginPage_Consultant.js';
import SignupConsultant1 from '../components/4_SignupPage1_Consultant.js';
import SignupConsultant2 from '../components/4_SignupPage2_Consultant.js';
import SignupConsultant3_1 from '../components/4_SignupPage3_1_Consultant.js';
import SignupConsultant3_2 from '../components/4_SignupPage3_2_Consultant.js';
import SignupConsultant4 from '../components/4_SignupPage4_Consultant.js';

import Search from '../components/SearchPage.js';
// import HomeConsultant from '../components/6_HomePage_Consultant.js';

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

    Selection: {
        screen: Selection,
        navigationOptions: {
            title: 'Selection',
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

    LoginClient: {
        screen: LoginClient,
        navigationOptions: {
            title: 'Login',
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

// tabscreen2 = {}

const SampleTabNavigator = createBottomTabNavigator(
    tabScreens, 
{
    initialRouteName: 'HomeClient',
    tabBarOptions: {
        activeBackgroundColor: '#19BAB9',
        inactiveBackgroundColor: '#19BAB9',
        activeTintColor: '#fff',
        inactiveTintColor: 'gray'
    }
}
)

// const Tab = createMaterialBottomTabNavigator()

// const SampleTabNavigator = () => (
//     <Tab.Navigator
//         initialRouteName="HomeClient"
//         activeColor="#e91e63"
//         style={{ backgroundColor: 'tomato' }}
//     >
//         <Tab.Screen
//             name="HomeClient"
//             component={HomeClient}
//             options={{
//                 tabBarLabel: 'HomeClient',
//                 tabBarIcon: ({ color }) => (
//                     <Icon name="home" color={color} size={26} />
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name="Selection"
//             component={Selection}
//             options={{
//                 tabBarLabel: 'Selection',
//                 tabBarIcon: ({ color }) => (
//                     <Icon name="bell" color={color} size={26} />
//                 ),
//             }}
//         />
//         <Tab.Screen
//             name="Search"
//             component={Search}
//             options={{
//                 tabBarLabel: 'Search',
//                 tabBarIcon: ({ color }) => (
//                     <Icon name="account" color={color} size={26} />
//                 ),
//             }}
//         />
//     </Tab.Navigator>
// )



// const SampleTabStackNavigator = createStackNavigator({
//     SampleTabNavigator: SampleTabNavigator
// }, {
//     navigationOptions:({ navigation }) => {
//         const
//     }
// })

const regScreens = {
    Selection: {
        screen: Selection,
        navigationOptions: () => ({
            header: null
        }),
    },
    ForgotPassword: {
        screen: ForgotPassword,
    },

    //Client Side
    LoginClient: {
        screen: LoginClient,
    },
    SignupClient1: {
        screen: SignupClient1,
    },
    SignupClient2: {
        screen: SignupClient2,
    },

    //Consultant Side
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
                borderBottomColor: '#19BAB9', //temporary fix
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
                borderBottomColor: '#19BAB9', //temporary fix
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
