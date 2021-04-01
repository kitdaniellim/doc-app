import React from 'react';

//Navigation
import { createStackNavigator } from '@react-navigation/stack';

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
import Tutorial from '../components/1_TutorialPage.js';

class Auth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const AuthStack = createStackNavigator();
        return (
            <AuthStack.Navigator
                screenOptions={{
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
                }}
            >
                <AuthStack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false,
                    }}
                />
                <AuthStack.Screen
                    name="ForgotPassword"
                    component={ForgotPassword}
                />
                <AuthStack.Screen
                    name="Selection"
                    component={Selection}
                />
                <AuthStack.Screen
                    name="Signup1"
                    component={Signup1}
                />
                <AuthStack.Screen
                    name="SignupClient2"
                    component={SignupClient2}
                />
                <AuthStack.Screen
                    name="SignupConsultant2"
                    component={SignupConsultant2}
                />
                <AuthStack.Screen
                    name="SignupConsultant3_1"
                    component={SignupConsultant3_1}
                    initialParams={{ key: 0, office_schedules: [] }}
                />
                <AuthStack.Screen
                    name="SignupConsultant3_2"
                    component={SignupConsultant3_2}
                />
                <AuthStack.Screen
                    name="Signup_TermsAndAgreement"
                    component={Signup_TermsAndAgreement}
                />
                <AuthStack.Screen
                    name="Tutorial"
                    component={Tutorial}
                    options={{
                        headerShown: false,
                    }}
                />
            </AuthStack.Navigator>
        );
    }
}

export default Auth;