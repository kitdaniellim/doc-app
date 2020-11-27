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
  Alert,
} from "react-native";
import Modal from "react-native-modal";
import Icon from "react-native-vector-icons/FontAwesome";
import { calendarStyles, globalStyles } from "../styles/styles";

class FilesModal extends React.Component {
  constructor(props) {
    super(props);
  }
  openFile = (itemRef) => {
    itemRef.getDownloadURL().then((url) => {
      Linking.openURL(url);
    }).catch((error) => {
      Alert.alert(
        'Oops!',
        `There was a problem in viewing the file. \n Details: ${error}`,
        [
          {
            text: 'OK',
            style: 'cancel'
          }
        ],
        { cancelable: true }
      );
    });
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
            {this.props.isFilesModalVisible && <FlatList
              data={this.props.files}
              renderItem={({ item }) => (
                <View style={calendarStyles.files_flatlist}>
                  <TouchableOpacity
                    onPress={() => {
                      this.openFile(item.itemRef)
                    }}
                  >
                    <Text style={calendarStyles.date_details_button_download_label}>{item.name}</Text>
                  </TouchableOpacity>
                </View>
              )}
              keyExtractor={(item) => item.name}
            />}
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
