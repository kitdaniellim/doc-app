import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class RadioButtons_MultipleSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            values: [],
            days: [
                { key: 'Sunday', text: 'Su', Checked: false },
                { key: 'Monday', text: 'M', Checked: false },
                { key: 'Tuesday', text: 'Tu', Checked: false },
                { key: 'Wednesday', text: 'W', Checked: false },
                { key: 'Thursday', text: 'Th', Checked: false },
                { key: 'Friday', text: 'F', Checked: false },
                { key: 'Saturday', text: 'Sa', Checked: false },
            ]
        }
    }


    componentDidMount = () => {
        if(this.props.days.length !== 0) {
            let days = this.state.days;
            this.props.days.map((item) => {
                days.map((day) => {
                    if(day.key === item) {
                        day.Checked = true;
                    }
                })
            })
            this.setState({ days: days })
        }
    }

    render() {
        // console.log('showing days')
        // console.log(this.state.days)
        return (
            <View style={styles.container}>
                {this.state.days.map((item) => {
                    return (
                        <View key={item.key} style={styles.buttonContainer}>
                            <Text style={(this.props.isDisabled) ? styles.text_disabled : (this.props.invert_colors) ? styles_inverted.text : styles.text}>{item.text}</Text>
                            <TouchableOpacity
                                disabled={this.props.isDisabled}
                                style={(this.props.isDisabled) ? styles.circle_disabled : (this.props.invert_colors) ? styles_inverted.circle : styles.circle}
                                onPress={() => {
                                    const temp = this.state.values;
                                    item.Checked = item.Checked === false ? true : false;
                                    if (item.Checked) {
                                        temp.push(item.key);
                                    } else {
                                        const index = temp.indexOf(item.key);
                                        if (index > -1) {
                                            temp.splice(index, 1);
                                        }
                                    }
                                    this.props.setDays(temp, this.props.count)
                                    this.setState({
                                        values: temp,
                                    });
                                }}>
                                {item.Checked === true && <View style={(this.props.invert_colors) ? styles_inverted.checkedCircle : styles.checkedCircle} />}
                            </TouchableOpacity>
                        </View>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginVertical: 5,
    },

    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
    },

    circle: {
        height: 20,
        width: 20,
        margin: 2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    circle_disabled: {
        height: 20,
        width: 20,
        margin: 2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CACACA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    text_disabled: {
        color: '#CACACA',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});

const styles_inverted = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        marginVertical: 5,
    },

    buttonContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 5,
    },

    circle: {
        height: 20,
        width: 20,
        margin: 2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#19BAB9',
        alignItems: 'center',
        justifyContent: 'center',
    },

    circle_disabled: {
        height: 20,
        width: 20,
        margin: 2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#CACACA',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: '#19BAB9',
        justifyContent: 'center',
    },

    text: {
        color: '#8B8787',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    text_disabled: {
        color: '#CACACA',
        fontSize: 13,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
});