import React from "react";
import { Router, Scene } from 'react-native-router-flux'
import Home from '../components/HomePage.js';
import About from '../components/AboutPage.js';

const Routes = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene key="home" component={Home} title="Home" initial={true} />
                <Scene key="about" component={About} title="About" />
            </Scene>
        </Router>
    );
}

export default Routes