import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeStyles, globalStyles, navbarStyles } from '../styles/styles';


const HomeClient = ({ navigation }) => {
  const Submit = () => {
    navigation.navigate('LoginClient');
  }

  const Search = () => {
    navigation.navigate('Search');
  }

  const b = () => {
    navigation.navigate('LoginClient');
  }

  const list = [
    {
      field: "ENGINEERS",
      data: ["Go", "Helsinki", "Berlin"],
      key: 1,
    },

    {
      field: "DOCTORS",
      data: ["Tokyo", "Denver", "Rio"],
      key: 2,
    },

    {
      field: "ARCHITECTS",
      data: ["Arnoco", "Burmuda", "Risotto"],
      key: 3,
    },

    {
      field: "LAWYERS",
      data: ["Madeyo", "Blanca", "Risotto"],
      key: 4,
    },

    {
      field: "BUSINESSMEN",
      data: ["Shelby", "Oquias", "Chengretto"],
      key: 5,
    },

    {
      field: "DOCTORS",
      data: ["Tokyo", "Denver", "Rio"],
      key: 6,
    },

    {
      field: "ARCHITECTS",
      data: ["Arnoco", "Burmuda", "Risotto"],
      key: 7,
    }

  ];

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header_container}>
        <Text style={homeStyles.header_text_bold}>HOME</Text>
        <Text style={homeStyles.header_text}>Highest Rated by Profession</Text>
      </View>
      <View style={homeStyles.scaffold}>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableHighlight
                onPress={() => { }}
                underlayColor='#f2f2f2'
                style={homeStyles.scaffold_list_container}
              >
                <View style={homeStyles.scaffold_list_item_container}>
                  <Text style={homeStyles.scaffold_list_item_header}>{item.field}</Text>
                  {/* <FlatList
                    data={item.data}
                    horizontal={true}
                    renderItem={({ data }) => (
                      <View>
                        <Text>{value}{" "}</Text>
                      </View>
                    )}
                  /> */}

                </View>
                {/* <View>
                  <Text style={homeStyles.scaffold_list_item_header}>{item.field}</Text>
                  <Text style={homeStyles.scaffold_list_item_data}>{item.data}</Text>
                </View> */}
              </TouchableHighlight>
              {/* <View style={homeStyles.divider} /> */}
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default HomeClient;