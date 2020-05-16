import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Selection from '../components/2_SelectionPage.js';

import LoginClient from '../components/3_LoginPage_Client.js';
import SignupClient1 from '../components/4_SignupPage1_Client.js';
import SignupClient2 from '../components/4_SignupPage2_Client.js';
import HomeClient from '../components/6_HomePage_Client.js';


import LoginConsultant from '../components/3_LoginPage_Consultant.js';
import SignupConsultant1 from '../components/4_SignupPage1_Consultant.js';
import SignupConsultant2 from '../components/4_SignupPage2_Consultant.js';



// import HomeConsultant from '../components/6_HomePage_Consultant.js';



const screens = {
    Selection : {
        screen: Selection
    },

    //Client Side
    LoginClient : {
        screen: LoginClient
    },
    SignupClient1 : {
        screen: SignupClient1
    },
    SignupClient2 : {
        screen: SignupClient2
    },
    // LoginConsultant : {
    //     screen: LoginConsultant
    // },
    HomeClient : {
        screen: HomeClient
    },


    //Consultant Side
    LoginConsultant : {
        screen: LoginConsultant
    },
    SignupConsultant1 : {
        screen: SignupConsultant1
    },
    SignupConsultant2 : {
        screen: SignupConsultant2
    },






}

const SelectionStack = createStackNavigator(screens);

export default createAppContainer(SelectionStack);
