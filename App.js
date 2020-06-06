import React, { Component } from 'react';
import Routes from './routes/Routes.js';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Routes/>
      </Provider>
    );
  }
}

