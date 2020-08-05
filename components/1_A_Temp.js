import React from 'react';
import { Text, Image, View, FlatList, TouchableOpacity, ScrollView } from 'react-native';


const Temp = ({ navigation }) => {
    const moment = require('moment');
    // moment("1:23", "h:mm").format("HH:mm") === "01:23"

    const time_start = "11:00"
    const time_end = "14:00"
    const booked_list = [
        {
            key: 1,
            time_start: "12:15",
            time_end: "12:30"
        },
        {
            key: 2,
            time_start: "13:00",
            time_end: "13:15"
        },
        {
            key: 3,
            time_start: "13:45",
            time_end: "14:00"
        },
    ]


    let t_start = moment(time_start, 'hh:mm a')
    let t_end = moment(time_end, 'hh:mm a')
    let flag = true;
    let temp;
    
    while(t_start.isBefore(t_end)){
        // flag = true
        booked_list.map((item) => {
            // if(t_start === moment(item.time_start, 'hh:mm a') ){
            //     flag = false
            //     console.log('Worked')
            // }
            console.log(t_start)
            console.log(moment(item.time_start, 'hh:mm a'))

        })
        if(flag){
            console.log('Time Slot: ' + t_start.format("hh:mm a") + ' - ' + t_start.add('15', 'minutes').format("hh:mm a"))
        }
    }


    // if(t_start.isBefore(t_end)){
    //     console.log('worked')
    // } else {
    //     console.log('not work')
    // }

    

    // console.log(moment.duration(Number()).asMinutes())

    // let bing = '5'
    // let boop = Number(bing)

    
    

    // while(time_start < time_end){

    // }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello World King</Text>
        </View>
        
    );
}

export default Temp;