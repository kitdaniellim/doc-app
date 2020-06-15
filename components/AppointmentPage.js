import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { appointmentStyles } from '../styles/styles';
import { ListItem, SearchBar } from 'react-native-elements';
import AppointmentForm from './AppointmentForm.js';

class AppointmentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            professions: []
        }
    }
    componentDidMount() {
        const list = [
            {
                id: 1,
                field: "ENGINEERS",
                data: [
                    {id: 1, name: "Go"}, 
                    {id: 2, name: "Helsinki"}, 
                    {id: 3, name: "Berlin"}
                ]
            },

            {
                id: 2,
                field: "DOCTORS",
                data: [
                    {id: 4, name: "Tokyo"}, 
                    {id: 5, name: "Denver"}, 
                    {id: 6, name: "Rio"}
                ]
            }

        ];
        this.setState(() => ({ professions: list }));
    }
    render() {
        return (
            <View style={appointmentStyles.container}>
                <AppointmentForm professions={this.state.professions} />
            </View>
        )
    }
}

export default AppointmentPage;