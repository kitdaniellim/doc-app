import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';
import CheckBox from '@react-native-community/checkbox';
// import DocumentPicker from 'react-native-document-picker';

class Book3_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: []
    }
  }
  componentDidMount() {
    this.setState(() => ({ symptoms: this.props.symptoms }));
  }
  onAttachFile = (files) => {
    // //Opening Document Picker for selection of multiple file
    // try {
    //   const results = await DocumentPicker.pickMultiple({
    //     type: [DocumentPicker.types.images],
    //     //There can me more options as well find above
    //   });
    //   for (const res of results) {
    //     //Printing the log realted to the file
    //     console.log('res : ' + JSON.stringify(res));
    //     console.log('URI : ' + res.uri);
    //     console.log('Type : ' + res.type);
    //     console.log('File Name : ' + res.name);
    //     console.log('File Size : ' + res.size);
    //   }
    //   //Setting the state to show multiple file attributes
    //   this.setState({ multipleFile: results });
    // } catch (err) {
    //   //Handling any exception (If any)
    //   if (DocumentPicker.isCancel(err)) {
    //     //If user canceled the document selection
    //     alert('Canceled from multiple doc picker');
    //   } else {
    //     //For Unknown Error
    //     alert('Unknown Error: ' + JSON.stringify(err));
    //     throw err;
    //   }
    // }
  }
  onCheck = (value) => {
    let symptoms = this.state.symptoms;
    if (!symptoms.includes(value)) {
      symptoms.push(value);
    } else {
      symptoms = symptoms.filter(item => item !== value);
    }
    this.setState(() => ({ symptoms }));
    this.props.onStep3Change(symptoms);
  }
  render() {
    if (this.props.currentStep !== 3) {
      return null;
    } else {
      return (
        <React.Fragment>
          <View style={calendarStyles.header_container}>
            <View style={calendarStyles.header_text_container}>
              <Text style={calendarStyles.header_text_bold}>FORM SUBMISSION</Text>
            </View>
          </View>
          <View style={calendarStyles.scaffold}>


            <View style={calendarStyles.forms_container}>
              <View>
                <Text style={calendarStyles.forms_options_header}>Do you have any of the following?</Text>
                <View style={calendarStyles.forms_options_container}>
                  <View style={calendarStyles.forms_options_col}>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <Text>Fever</Text>
                      <CheckBox
                        value={this.state.symptoms.includes("Fever")? true : false}
                        onValueChange={() => {
                          this.onCheck("Fever")
                        }}
                      />
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <Text>Cough</Text>
                      <CheckBox
                        value={this.state.symptoms.includes("Cough")? true : false}
                        onValueChange={() => {
                          this.onCheck("Cough")
                        }}
                      />
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <Text>Colds</Text>
                      <CheckBox
                        value={this.state.symptoms.includes("Colds")? true : false}
                        onValueChange={() => {
                          this.onCheck("Colds")
                        }}
                      />
                    </View>
                  </View>
                  <View style={calendarStyles.forms_options_col}>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <Text>Sore Throat</Text>
                      <CheckBox
                        value={this.state.symptoms.includes("Sore Throat")? true : false}
                        onValueChange={() => {
                          this.onCheck("Sore Throat")
                        }}
                      />
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <Text>Hand Pain</Text>
                      <CheckBox
                        value={this.state.symptoms.includes("Hand Pain")? true : false}
                        onValueChange={() => {
                          this.onCheck("Hand Pain")
                        }}
                      />
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <Text>Headache</Text>
                      <CheckBox
                        value={this.state.symptoms.includes("Headache")? true : false}
                        onValueChange={() => {
                          this.onCheck("Headache")
                        }}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <Text style={calendarStyles.forms_disclaimer}>
                Medical records are needed for your doctor to assess your condition correctly. All information placed here will be kept strictly confidential for client and consultant only.
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.onAttachFile}
                style={calendarStyles.forms_button_upload}
              >
                <Text style={calendarStyles.forms_button_upload_label}>
                  UPLOAD ATTACHMENTS {"\n"}
                  (Medical Records for Doctor)
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => { this.props.onStep3Submit() }}
                style={calendarStyles.forms_button_submit}
              >
                <Text style={calendarStyles.forms_button_submit_label}>SUBMIT</Text>
              </TouchableOpacity>
            </View>
          </View>
        </React.Fragment>
      );
    }
  }
}

export default Book3_Form;