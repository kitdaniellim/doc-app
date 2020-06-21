import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';
import { GiftedChat } from 'react-native-gifted-chat'

//Ignore this --not part
const CalendarPage3_Notify = ({ navigation }) => {
    const [messages, setMessages] = useState([
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: { _id: 2, name: 'Name' },
        },
      ]);

    const Close = () => {
        navigation.goBack()
    }

    const onSend = (newMessage = []) => {
        setMessages(GiftedChat.append(messages, newMessage));
    };

    return (
        <View style={calendarStyles.container}>
            <View style={calendarStyles.header_container}>
                <View style={calendarStyles.header_text_container}>
                    <Text style={calendarStyles.header_text_bold}>NOTIFY CLIENT</Text>
                </View>
                <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={Close}
                    style={calendarStyles.header_icon_container}
                >
                    <Icon style={globalStyles.icon_global} name="times" size={18} />
                </TouchableOpacity>
            </View>
            <View style={calendarStyles.scaffold}>
                <GiftedChat
                    messages={messages}
                    onSend={newMessage => onSend(newMessage)}
                    user={{
                        _id: 1,
                    }}
                />
            </View>
        </View>
    );
}

export default CalendarPage3_Notify;