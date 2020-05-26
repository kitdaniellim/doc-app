import React, { Component } from 'react';
import { Button, Text, View, TouchableOpacity, Modal} from 'react-native';
import { homeStyles } from '../styles/styles';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview';
//import { TouchableOpacity } from 'react-native-gesture-handler';
import Constants from "expo-constants";


const goToAbout = () => {
  Actions.about()
}

class HomePage extends React.Component{
  state = {
    showModal: false,
    status: "Pending"
  };
  handleResponse = data => {
    if(data.title === 'success'){
      this.setState({showModal: false, status: "Complete"});
    }else if(data.title === 'cancel'){
      this.setState({showModal: false, status: "Cancellled"});
    }else{
      return;
    }
  };
  render()
  {
    return (
  
      <View style={homeStyles.container}>

          
          <Modal 
                visible = { this.state.showModal } 
                onRequestClose= {() => this.setState({showModal: false})} 
          >
            <WebView 
                    source={{ uri: "http://192.168.254.108:3000/paypal" }}
                onNavigationStateChange = {data => this.handleResponse(data)}
              
            />
          </Modal>
          <TouchableOpacity
                    style={{ width: 300, height: 100 }}
                    onPress={ () => this.setState({ showModal: true }) }
                >
                    <Text>Pay with Paypal</Text>
          </TouchableOpacity>
       
          <Text> Payment Status: {this.state.status} </Text>
          <Button
            onPress={goToAbout}
            title="Go to About"
            accessibilityLabel="Learn more about this purple button"
          />

      </View>
    );
  }
};

  
export default HomePage;