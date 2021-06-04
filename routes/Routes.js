import React from 'react';

//Components
import Auth from './Auth.js';
import Main from './Main.js';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './RootNavigation';

//Actions
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateCurrentUser, } from '../actions/users';
import AsyncStorage from "@react-native-community/async-storage";

class Routes extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     user: {},
        // }
    }

    async componentDidMount() {
        const user = JSON.parse(
            await AsyncStorage.getItem("user")
        );
        console.log('HELLOOO')
        console.log(user);
        if (user != null) {
            this.props.updateCurrentUser({
                userType: user.userType,
                uid: user.uid,
                fullName: user.fullName
            });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.current_user !== prevProps.current_user) {
            // this.setState(() => ({
            //     user: user
            // }))
        }
    }

    render() {
        // console.log('showing routes props')
        // console.log(this.props);
        // console.log('--------------------');
        // console.log(this.state);
        // console.log('--------------------');
        return <NavigationContainer ref={navigationRef}>

            {this.props.current_user !== undefined ? (
                <Main />
            ) : (
                <Auth />
            )}

        </NavigationContainer>;
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateCurrentUser }, dispatch)
}
const mapStateToProps = state => {
    return {
        loading: state.users.loading,
        current_user: state.users.current_user,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Routes);