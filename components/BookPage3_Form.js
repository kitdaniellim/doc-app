import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { calendarStyles, globalStyles } from '../styles/styles';

const Book3_Form = ({ navigation }) => {
  const isFormSent = false //<-- set true or false to change SUBMIT button style
  const [button1, toggleButton1] = useState(false);
  const [button2, toggleButton2] = useState(false);
  const [button3, toggleButton3] = useState(false);
  const [button4, toggleButton4] = useState(false);
  const [button5, toggleButton5] = useState(false);
  const [button6, toggleButton6] = useState(false);

  const Close = () => {
    navigation.goBack()
  }

  const Submit = () => {
    navigation.navigate('Book4_Confirmation');
  }

  return (
    <View style={calendarStyles.container}>
      <View style={calendarStyles.header_container}>
        <View style={calendarStyles.header_text_container}>
          <Text style={calendarStyles.header_text_bold}>FORM SUBMISSION</Text>
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
        <View style={calendarStyles.forms_container}>
          <View>
            <Text style={calendarStyles.forms_options_header}>Do you have any of the following?</Text>
            <View style={calendarStyles.forms_options_container}>
              <View style={calendarStyles.forms_options_col}>
                <View style={calendarStyles.forms_options_button_wlabel_container}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => { toggleButton1(!button1) }}
                    style={(button1) ?
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
                    onPress={() => { toggleButton2(!button2) }}
                    style={(button2) ?
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
                    onPress={() => { toggleButton3(!button3) }}
                    style={(button3) ?
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
                    onPress={() => { toggleButton4(!button4) }}
                    style={(button4) ?
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
                    onPress={() => { toggleButton5(!button5) }}
                    style={(button5) ?
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
                    onPress={() => { toggleButton6(!button6) }}
                    style={(button6) ?
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
            onPress={() => { }}
            style={calendarStyles.forms_button_upload}
          >
            <Text style={calendarStyles.forms_button_upload_label}>
              UPLOAD ATTACHMENTS {"\n"}
              (Medical Records for Doctor)
            </Text>
          </TouchableOpacity>
          {(isFormSent) ?
            true
            :
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={Submit}
              style={calendarStyles.forms_button_submit}
            >
              <Text style={calendarStyles.forms_button_submit_label}>SUBMIT</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </View>
  );
}

export default Book3_Form;