import React from 'react';
import { Button, Text, TextInput, View, Picker } from 'react-native';
import { appointmentStyles } from '../styles/styles';
import CalendarPicker from 'react-native-calendar-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.onFieldChange = this.onFieldChange.bind(this);
        this.onConsultantChange = this.onConsultantChange.bind(this);
        this.onDateChange = this.onDateChange.bind(this);
        this.onTimeChange = this.onTimeChange.bind(this);
        this.showTimePicker = this.showTimePicker.bind(this);
        this.state = {
            field_id: "",
            consultants: [],
            consultant_id: "",
            appointment_date: "",
            appointment_time: Date.parse(moment().format("h:mm")),
            show: false,
            mode: ""
        }
    }
    onFieldChange(value) {
        if (value !== "") {
            const field_id = value;
            this.setState(() => ({ field_id }));
            this.setState(() => ({ consultants: this.props.professions.filter(profession => profession.id == field_id)[0].data }));
        }
    }
    onConsultantChange(value) {
        if (value !== "") {
            const consultant_id = value;
            this.setState(() => ({ consultant_id }));
        }
    }
    onDateChange(date) {
        const appointment_date = (new Date(date).getFullYear()).toString() + "-" + (new Date(date).getMonth() + 1).toString() + "-" + (new Date(date).getDate()).toString();
        this.setState(() => ({ appointment_date }));
    }
    onTimeChange(event, selectedTime) {
        const appointment_time = Date.parse(moment(selectedTime).format("h:mm"));
        this.setState(() => ({ appointment_time }));
        this.setState(() => ({ show: false }));
    }
    showTimePicker() {
        this.setState(() => ({ mode: "time" }));
        this.setState(() => ({ show: true }));
    }
    onSubmit() {

    }
    render() {
        return (
            <View style={appointmentStyles.formView}>
                <Text>Select Field</Text>
                <View style={appointmentStyles.picker}>
                    <Picker
                        selectedValue={this.state.field_id}
                        onValueChange={(itemValue) => { this.onFieldChange(itemValue) }}
                    >
                        <Picker.Item label="--Field--" value="" editable={false} enabled={false} />
                        {
                            this.props.professions.map(profession =>
                                <Picker.Item key={profession.id} label={profession.field.toUpperCase()} value={profession.id} />
                            )
                        }
                    </Picker>
                </View>

                {this.state.field_id !== ""
                    && <View>
                        <Text>Select Consultant</Text>
                        <View style={appointmentStyles.picker}>
                            <Picker
                                selectedValue={this.state.consultant_id}
                                onValueChange={(itemValue) => { this.onConsultantChange(itemValue) }}
                            >

                                {
                                    this.state.consultants.length > 0 && this.state.consultants.map(consultant =>
                                        <Picker.Item key={consultant.id} label={consultant.name} value={consultant.id} />
                                    )
                                }
                            </Picker>
                        </View>
                    </View>}

                <Text>Select Appointment Date</Text>
                <View style={appointmentStyles.calendarPicker}>
                    <CalendarPicker
                        onDateChange={this.onDateChange}
                        minDate={new Date()}
                        restrictMonthNavigation={true}
                        width={325}
                    />
                    {this.state.appointment_date !== "" && <Text style={appointmentStyles.selectedDate}>Appointment Date: {this.state.appointment_date}</Text>}
                </View>

                <Text>Select Time</Text>
                <View style={appointmentStyles.picker}>
                    <Button onPress={this.showTimePicker} title="Show time picker!" />
                    {this.state.show && <DateTimePicker
                        testID="dateTimePicker"
                        value={this.state.appointment_time}
                        mode={this.state.mode}
                        is24Hour={true}
                        display="default"
                        onChange={this.onTimeChange}
                    />}
                    {/* {this.state.appointment_time && <Text>Appointment Time: {this.state.appointment_time.toString()}</Text>} */}
                </View>

                <View style={appointmentStyles.submitButton}>
                    <Button
                        onPress={this.onSubmit}
                        title="SUBMIT"
                        color="#19BAB9"
                    />
                </View>
            </View>
        )
    }
}

export default AppointmentForm;
