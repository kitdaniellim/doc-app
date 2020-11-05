import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchStyles, globalStyles, navbarStyles } from '../styles/styles';


const Search = ({ navigation }) => {
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
    <View style={searchStyles.container}>
      <View style={searchStyles.header_container}>
        <Text style={searchStyles.header_text_bold}>Search</Text>
      </View>
      <SearchBar style={searchStyles.searchBar}
        platform="android"
        lightTheme
        round
        searchIcon={{ size: 18 }}
        placeholder="Click here to start searching!"
      />
      <View style={searchStyles.scaffold}>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableHighlight
                onPress={() => { }}
                underlayColor='#f2f2f2'
                style={searchStyles.scaffold_list_container}
              >
                <View style={searchStyles.scaffold_list_item_container}>
                  <Text style={searchStyles.scaffold_list_item_header}>{item.field}</Text>
                </View>
              </TouchableHighlight>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Search;