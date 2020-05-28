import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createSwitchNavigator } from 'react-navigation-switch';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Selection from '../components/2_SelectionPage.js';
import ForgotPassword from '../components/5_FpassPage.js';

import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

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



// const SampleTabStack



const SampleTabNavigator = createBottomTabNavigator({
        HomeClient,
        Selection,
        Search,
        LoginClient
    }, {
        defaultNavigationOptions: {
            tabBarOptions: {
                activeColor: 'red',
                inactiveColor: 'blue',
            }
            
        },

    }
)

// const SampleTabStackNavigator = createStackNavigator({
//     SampleTabNavigator: SampleTabNavigator
// }, {
//     navigationOptions:({ navigation }) => {
//         const
//     }
// })

const regScreens = {
    Selection : {
        screen: Selection,
        navigationOptions: () => ({
            headerShown: false
        }),
    },
    ForgotPassword : {
        screen: ForgotPassword,
    },

    //Client Side
    LoginClient : {
        screen: LoginClient,
    },
    SignupClient1 : {
        screen: SignupClient1,
    },
    SignupClient2 : {
        screen: SignupClient2,
    },

    //Consultant Side
    LoginConsultant : {
        screen: LoginConsultant,
    },
    SignupConsultant1 : {
        screen: SignupConsultant1,
    },
    SignupConsultant2 : {
        screen: SignupConsultant2,
    },
    SignupConsultant3_1 : {
        screen: SignupConsultant3_1
    },
    SignupConsultant3_2 : {
        screen: SignupConsultant3_2
    },
    SignupConsultant4 : {
        screen: SignupConsultant4
    },

}

const appScreens = {
    HomeClient : {
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
    },{
        initialRouteName: 'Auth'
    }
)

export default createAppContainer(SwitchStack);
