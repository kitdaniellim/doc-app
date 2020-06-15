import React from 'react';
import { Text, View, FlatList, FormLabel, FormInput, FormValidationMessage, Picker } from 'react-native';
import { appointmentStyles } from '../styles/styles';

class AppointmentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            field: "",
            consultants: [],
            consultant: "",
            request_msg: ""
        }
    }
    onFieldChange(value, index) {
        const id = value;
        const field = this.props.professions.filter(profession => profession.id == id)[0].field;
        this.setState(() => ({ field }));
        this.setState(() => ({ consultants: this.props.professions.filter(profession => profession.id == id)[0].data }));
    }
    render() {
        return (
            <View style={{ flexDirection: 'column' }}>
                <Picker
                    selectedValue={this.state.field}
                    style={appointmentStyles.picker}
                    onValueChange={(itemValue, itemIndex) => { this.onFieldChange(itemValue, itemIndex) }}
                >
                    <Picker.Item label="--Select Field--" value="" />
                    {
                        this.props.professions.map((profession, key) =>
                            <Picker.Item key={key} label={profession.field.toUpperCase()} value={profession.id} />
                        )
                    }
                </Picker>
                {/* {this.state.field !== ""
                    && <Picker
                        selectedValue=""
                        style={appointmentStyles.picker}
                        onValueChange={(itemValue, itemIndex) => { this.onFieldChange(itemValue, itemIndex) }}
                    >

                        {
                            this.state.consultants.length > 0 && this.state.consultants.map(consultant =>
                                <Picker.Item label={consultant.name} value={consultant.id} />
                            )
                        }
                    </Picker>} */}


            </View >
        )
    }
}

export default AppointmentForm;
