import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import { createStackNavigator } from 'react-navigation-stack';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

//Auth Screens
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

//App Screens
import Home from '../components/6_HomePage.js';
import Calendar1 from '../components/7_CalendarPage1.js';
import Calendar2 from '../components/7_CalendarPage2.js';
import Calendar3_Notify from '../components/7_CalendarPage3_Notify.js';
import Calendar3_Review from '../components/7_CalendarPage3_Review.js';
import Search from '../components/8_SearchPage.js';
import Review from '../components/9_ReviewPage.js';
import Profile from '../components/9_ProfilePage.js';
import Book1_Date from '../components/BookPage1_Date.js';
import Book2_Time from '../components/BookPage2_Time.js';
import Book3_Form from '../components/BookPage3_Form.js';
import ProfileTab from '../components/9_ProfileTabPage.js';
import EditProfile_1 from '../components/EditProfilePage_1.js';
import EditProfile_2 from '../components/EditProfilePage_2.js';
import Paypal from '../components/PaypalPage.js';

import React from 'react';
import { View, ScrollView, FlatList, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';
import { navStyles } from '../styles/styles';

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
        height: 50,
        justifyContent: 'center',
        marginVertical: 10,
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
    AppointmentPage: {
        screen: AppointmentPage
    }
}

const homeScreens = {
    Home: {
        screen: Home,
    },
    Profile: {
        screen: Profile,
    },
    Book1_Date: {
        screen: Book1_Date,
    },
    Book2_Time: {
        screen: Book2_Time,
    },
    Book3_Form: {
        screen: Book3_Form,
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

const profileScreens = {
    ProfileTab: {
        screen: ProfileTab,
    },
    EditProfile_1: {
        screen: EditProfile_1,
    },
    EditProfile_2: {
        screen: EditProfile_2,
    },
}

const HomeStack = createStackNavigator(
    homeScreens,
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

const ProfileStack = createStackNavigator(
    profileScreens,
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
        screen: HomeStack,
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
        screen: HomeStack,
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

    ProfileTab: {
        screen: ProfileStack,
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
    //temporary identifier, switch between true or false to change tab display <--insert here
    let client = false;
    return (client) ? clientTabNavigator : consultantTabNavigator
}

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
    Home: {
        screen: getTabs(),
        navigationOptions: ({ navigation }) => ({
            title: `insert logo`,
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
                                <View style={{ height: 270 }}>
                                    <FlatList
                                        data={notifs}
                                        showsVerticalScrollIndicator={false}
                                        keyExtractor={(item) => item.key.toString()}
                                        ItemSeparatorComponent={()=>{
                                            return(
                                                <View style={{borderBottomColor: '#00000080', borderBottomWidth: 1,  alignSelf: 'stretch'}}/>
                                            );
                                        }}
                                        renderItem={({ item }) => (
                                            <MenuOption key={item.key} value={item.key} text={item.text} />
                                        )}
                                    />
                                </View>
                            </MenuOptions>
                        </Menu>
                        <Menu onSelect={
                            value => {
                                if (value === 1) {
                                    navigation.navigate('Login')
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
                                <MenuOption value={2} text='About Us' />
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

