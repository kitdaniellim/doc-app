import React from 'react';
import { Alert, FlatList, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';
import * as DocumentPicker from 'expo-document-picker';

class Book3_Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      symptoms: [],
      files: [],
    }
  }
  componentDidMount() {
    this.setState(() => ({ symptoms: this.props.symptoms }));
  }
  onFilePick = async () => {
    let files = this.state.files;
    const result = await DocumentPicker.getDocumentAsync({
      multiple: true
    });
    if (!result.cancelled) {
      let check = this.state.files.filter(file => result.name == file.name).length;
      const allowed = ["doc", "docx", "xlsx", "csv", "jpg", "png", "svg", "pdf", "txt"];
      if (check != 0) {
        alert("File name already attached");
      } else if (!allowed.includes(result.name.substring(result.name.lastIndexOf(".") + 1))) {
        Alert.alert(
          'Error!',
          `Invalid file format: ${result.name.substring(result.name.lastIndexOf(".") + 1)}`,
          [
            {
              text: 'OK',
              style: 'cancel'
            }
          ],
          { cancelable: true }
        );
      }else {
        files.push(result);
        this.setState(() => ({ files }));
        this.props.onStep3FilesChange(this.state.files);
      }
    }
  }
  onFileRemove = async (uri) => {
    let files = this.state.files.filter(file => file.uri != uri);
    await this.setState(() => ({ files }));
    this.props.onStep3FilesChange(this.state.files);
  }
  onCheck = (value) => {
    let symptoms = this.state.symptoms;
    if (!symptoms.includes(value)) {
      symptoms.push(value);
    } else {
      symptoms = symptoms.filter(item => item !== value);
    }
    this.setState(() => ({ symptoms }));
    this.props.onStep3SymptomsChange(symptoms);
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
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this.props._prev}
              style={calendarStyles.header_icon_container}
            >
              <Icon style={globalStyles.icon_global} name="times" size={18} />
            </TouchableOpacity>
          </View>
          <View style={calendarStyles.scaffold}>
            <View style={calendarStyles.forms_container}>
              <View>
                <Text style={calendarStyles.forms_options_header}>Do you have any of the following?</Text>
                <View style={calendarStyles.forms_options_container}>
                  <View style={calendarStyles.forms_options_col}>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { this.onCheck("Fever") }}
                        style={(this.state.symptoms.includes("Fever")) ?
                          calendarStyles.form_options_button_lit
                          :
                          calendarStyles.form_options_button
                        }
                      />
                      <Text>Fever</Text>
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { this.onCheck("Cough") }}
                        style={(this.state.symptoms.includes("Cough")) ?
                          calendarStyles.form_options_button_lit
                          :
                          calendarStyles.form_options_button
                        }
                      />
                      <Text>Cough</Text>
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { this.onCheck("Colds") }}
                        style={(this.state.symptoms.includes("Colds")) ?
                          calendarStyles.form_options_button_lit
                          :
                          calendarStyles.form_options_button
                        }
                      />
                      <Text>Colds</Text>
                    </View>
                  </View>
                  <View style={calendarStyles.forms_options_col}>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { this.onCheck("Sore Throat") }}
                        style={(this.state.symptoms.includes("Sore Throat")) ?
                          calendarStyles.form_options_button_lit
                          :
                          calendarStyles.form_options_button
                        }
                      />
                      <Text>Sore Throat</Text>
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { this.onCheck("Hand Pain") }}
                        style={(this.state.symptoms.includes("Hand Pain")) ?
                          calendarStyles.form_options_button_lit
                          :
                          calendarStyles.form_options_button
                        }
                      />
                      <Text>Hand Pain</Text>
                    </View>
                    <View style={calendarStyles.forms_options_button_wlabel_container}>
                      <TouchableOpacity
                        activeOpacity={0.6}
                        onPress={() => { this.onCheck("Headache") }}
                        style={(this.state.symptoms.includes("Headache")) ?
                          calendarStyles.form_options_button_lit
                          :
                          calendarStyles.form_options_button
                        }
                      />
                      <Text>Headache</Text>
                    </View>
                  </View>
                </View>
              </View>
              <Text style={calendarStyles.forms_disclaimer}>
                Medical records are needed for your doctor to assess your condition correctly. All information placed here will be kept strictly confidential for client and consultant only.
              </Text>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={this.onFilePick}
                style={calendarStyles.forms_button_upload}
              >
                <Text style={calendarStyles.forms_button_upload_label}>
                  UPLOAD ATTACHMENTS {"\n"}
                  (Medical Records for Doctor)
                </Text>
              </TouchableOpacity>

              {
                this.state.files.length > 0 && <FlatList
                  style={calendarStyles.files_list}
                  data={this.state.files}
                  renderItem={({ item }) => <View style={calendarStyles.files_list_item} key={item.name}><Text>{item.name}</Text><TouchableOpacity activeOpacity={0.6} style={calendarStyles.remove_file_button} onPress={() => { this.onFileRemove(item.uri) }}><Text style={calendarStyles.remove_file_button_label}>X</Text></TouchableOpacity></View>}
                />
              }

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