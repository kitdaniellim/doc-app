import React, { useCallback } from "react";
import {
  Text,
  Button,
  SafeAreaView,
  FlatList,
  Linking,
  TextInput,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { calendarStyles, globalStyles } from "../styles/styles";

class FilesModal extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        isVisible={this.props.isFilesModalVisible}
        animationIn="bounceInDown"
        animationOut="slideOutUp"
        animationInTiming={1100}
        animationOutTiming={900}
      >
        <View style={calendarStyles.modal_container}>
          <SafeAreaView style={calendarStyles.modal_list}>
            <FlatList
              data={this.props.files}
              renderItem={({ item }) => (
                <View>

                  <TouchableOpacity
                    onPress={() => {
                      Linking.openURL(item.file_url);
                    }}
                  >
                    {/* <Text
                      style={calendarStyles.date_details_button_download_label_right}
                    >
                      Open
                    </Text> */}
                    <Text style={calendarStyles.date_details_button_download_label}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.file_url}
            />
          </SafeAreaView>
          <View style={calendarStyles.modal_container_bottom}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={this.props.onCloseFilesModal}
              style={calendarStyles.modal_button_container_cancel}
            >
              <Text style={calendarStyles.modal_button_label}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  }
}

export default FilesModal;
