import React, { Component, PropTypes } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  updateDayLocation} from '../actions/users';

class RadioButtons_MultipleSelect extends React.Component {
    constructor(props){
        super();
        // this.day = this.day.bind(this);
    }
    state = {
        values: [],
    };
    // day(e)
    updateTime(item){
        const { values } = this.state;
        const temp = values;
        item.Checked = item.Checked === false ? true : false;
        if (item.Checked) {
            temp.push(item.key);
        } else {
            const index = temp.indexOf(item.key);
            if (index > -1) {
                temp.splice(index, 1);
            }
        }
        this.setState({
            values: temp,
        });
        console.log("shet")
        this.props.updateDayLocation(this.state.values);
        console.log(this.props)
    }

    render() {
        const { options } = this.props;
      
        //const { days } = this.props.values;
        //  this.props.day(values);
       
        // console.log(this.props );
        //console.log(days);
        return (
         
            <View style={styles.container}>
                {options.map((item) => {
                    return (
                        <View key={item.key} style={styles.buttonContainer}>
                            <Text style={styles.text}>{item.text}</Text>
                            <TouchableOpacity
                                style={styles.circle}
                                onPress={() => this.updateTime(item) }>
                                {item.Checked === true && <View style={styles.checkedCircle} />}
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
        height: 16,
        width: 16,
        margin: 2,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    checkedCircle: {
        width: 10,
        height: 10,
        borderRadius: 7,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },

    text: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

});
const mapDispatchToProps = dispatch => {
    return bindActionCreators({ updateDayLocation}, dispatch)
  }
  const mapStateToProps = state => {
      return {
      user : state.users,
      consultant: state.users,
      singleConsultant: state.users,
      locArray: state.locArray
        }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(RadioButtons_MultipleSelect );