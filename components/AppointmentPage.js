import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { appointmentStyles } from '../styles/styles';
import { ListItem, SearchBar } from 'react-native-elements';
import AppointmentForm from './AppointmentForm.js';
import { app } from 'firebase';

class AppointmentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            appointments: [],
            professions: []
        }
    }
    componentDidMount() {
        const appointments = [
            {
                id: 1,
                date: "2020-06-24",
                time_start: "9:00",
                time_end: "9:30",
                client_id: 1,
                consultant_id: 1
            },
            {
                id: 2,
                date: "2020-06-23",
                time_start: "13:00",
                time_end: "13:30",
                client_id: 1,
                consultant_id: 2
            },
            {
                id: 3,
                date: "2020-06-23",
                time_start: "13:30",
                time_end: "14:00",
                client_id: 2,
                consultant_id: 3
            }
        ];
        const professions = [
            {
                id: 1,
                field: "ENGINEERS",
                data: [
                    {id: 1, name: "Go", time_start: "8:00", time_end: "17:00"}, 
                    {id: 2, name: "Helsinki", time_start: "9:00", time_end: "18:00"}, 
                    {id: 3, name: "Berlin", time_start: "8:30", time_end: "17:30"}
                ]
            },

            {
                id: 2,
                field: "DOCTORS",
                data: [
                    {id: 4, name: "Tokyo", time_start: "8:00", time_end: "17:00"}, 
                    {id: 5, name: "Denver", time_start: "8:00", time_end: "17:00"}, 
                    {id: 6, name: "Rio", time_start: "8:00", time_end: "17:00"}
                ]
            }

        ];
        this.setState(() => ({ professions }));
    }
    render() {
        return (
            <View style={appointmentStyles.container}>
                <View style={appointmentStyles.header_container}>
                    <Text style={appointmentStyles.header_text}>New Appointment</Text>
                </View>      
                <AppointmentForm professions={this.state.professions} appointments={this.state.appointments} />
            </View>
        )
    }
}

export default AppointmentPage;