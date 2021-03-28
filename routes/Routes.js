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
import { updateCurrentUserType, } from '../actions/users';
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

        if (user != null) {
            this.props.updateCurrentUserType(user.userType)
            // this.setState(() => ({
            //     user: user
            // }))
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.userType !== prevProps.userType) {
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

            {this.props.userType !== undefined ? (
                <Main />
            ) : (
                <Auth />
            )}

        </NavigationContainer>;
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateCurrentUserType }, dispatch)
}
const mapStateToProps = state => {
    return {
        userType: state.users.current_userType,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Routes);