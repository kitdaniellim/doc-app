import Global from './components/AP_Global';
import Selection from './components/SelectionPage';
import Login from './components/LoginPage';
import SignUp from './components/SignupPage';
import ForgotPassword from './components/FpassPage';
// import LoginConsultant from './components/SelectionPage';

import Home from './components/HomePage';
import About from './components/AboutPage';

// import Calendar from './components/CalendarPage';
import Search from './components/SearchPage';
// import Review from './components/ReviewPage';

import Navbar from './components/AP_Navbar';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create(Global);
export const selectionStyles = StyleSheet.create(Selection);
export const loginStyles = StyleSheet.create(Login);
export const signupStyles = StyleSheet.create(SignUp);
export const fpassStyles = StyleSheet.create(ForgotPassword);
export const homeStyles = StyleSheet.create(Home);
export const aboutStyles = StyleSheet.create(About);

// export const calendarStyles = StyleSheet.create(Calendar);
export const searchStyles = StyleSheet.create(Search);
// export const reviewStyles = StyleSheet.create(Review);

export const navbarStyles = StyleSheet.create(Navbar);