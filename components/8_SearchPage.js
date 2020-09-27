import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchStyles } from '../styles/styles';


const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [isFilterVisible, toggleFilter] = useState(false);
  const [button1, toggleButton1] = useState(false);
  const [button2, toggleButton2] = useState(false);
  const [button3, toggleButton3] = useState(false);
  const [button4, toggleButton4] = useState(false);
  const [button5, toggleButton5] = useState(false);
  const [button6, toggleButton6] = useState(false);
  const [button7, toggleButton7] = useState(false);

  const Profile = () => {
    navigation.navigate('Profile');
  }

  const list = [
    {
      field: "ENGINEERS",
      data: [
        {
          id: 1,
          name: 'Go'
        },
        {
          id: 2,
          name: 'Helsinki'
        },
        {
          id: 3,
          name: 'Berlin'
        },
      ],
      key: 1,
    },

    {
      field: "DOCTORS",
      data: [
        {
          id: 1,
          name: 'Tokyo'
        },
        {
          id: 2,
          name: 'Denver'
        },
        {
          id: 3,
          name: 'Rio'
        },
      ],
      key: 2,
    },

    {
      field: "ARCHITECTS",
      data: [
        {
          id: 1,
          name: 'Arnoco'
        },
        {
          id: 2,
          name: 'Bermuda'
        },
        {
          id: 3,
          name: 'Rosotto'
        },
      ],
      key: 3,
    },

    {
      field: "LAWYERS",
      data: [
        {
          id: 1,
          name: 'Madeyo'
        },
        {
          id: 2,
          name: 'Blanca'
        },
        {
          id: 3,
          name: 'Joseph'
        },
      ],
      key: 4,
    },

    {
      field: "BUSINESSMEN",
      data: [
        {
          id: 1,
          name: 'Shelby'
        },
        {
          id: 2,
          name: 'Oquias'
        },
        {
          id: 3,
          name: 'Chengretto'
        },
      ],
      key: 5,
    },

    {
      field: "THERAPISTS",
      data: [
        {
          id: 1,
          name: 'Steffan'
        },
        {
          id: 2,
          name: 'Gabriel'
        },
        {
          id: 3,
          name: 'Theadosia'
        },
      ],
      key: 6,
    },

    {
      field: "TEACHERS",
      data: [
        {
          id: 1,
          name: 'Dell'
        },
        {
          id: 2,
          name: 'Mozart'
        },
        {
          id: 3,
          name: 'Franklin'
        },
      ],
      key: 7,
    },
  ];

  return (
    <View style={searchStyles.container}>
      <View style={searchStyles.header_container}>
        <View style={searchStyles.header_text_container}>
          <Text style={searchStyles.header_text_bold}>SEARCH</Text>
        </View>
        <View style={searchStyles.header_search_container}>
          <SearchBar style={searchStyles.searchBar}
            platform="android"
            lightTheme
            round
            onChangeText={(text) => { setSearch(text) }}
            value={search}
            searchIcon={{ size: 16 }}
            clearIcon={{ size: 16 }}
            cancelIcon={{ size: 16 }}
            placeholder="Click here to start searching!"
            containerStyle={{
              height: 40,
              justifyContent: 'center',
              marginTop: 2,
              // borderBottomColor: '#8B8787',
              // borderBottomWidth: 1
            }}
            inputStyle={{
              justifyContent: 'center',
              fontSize: 15,
            }}
          />
        </View>
      </View>
      <View style={searchStyles.filter_container}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => { toggleFilter(!isFilterVisible) }}
          style={searchStyles.filter_label_container}
        >
          <Text style={searchStyles.filter_label}>FILTER</Text>
          <Icon 
            style={searchStyles.filter_icon} 
            name={(isFilterVisible)? "caret-up" : "caret-down"} 
            size={16} 
          />
        </TouchableOpacity>
        {(isFilterVisible) ?
          <View style={searchStyles.filter_options_container}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => { toggleButton1(!button1) }}
              style={(button1) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={(button1) ?
                  searchStyles.filter_options_button_label_lit
                  :
                  searchStyles.filter_options_button_label
                }
              >
                ENGINEERS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => { toggleButton2(!button2) }}
              style={(button2) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={(button2) ?
                  searchStyles.filter_options_button_label_lit
                  :
                  searchStyles.filter_options_button_label
                }
              >
                DOCTORS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => { toggleButton3(!button3) }}
              style={(button3) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={(button3) ?
                  searchStyles.filter_options_button_label_lit
                  :
                  searchStyles.filter_options_button_label
                }
              >
                ARCHITECTS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => { toggleButton4(!button4) }}
              style={(button4) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={(button4) ?
                  searchStyles.filter_options_button_label_lit
                  :
                  searchStyles.filter_options_button_label
                }
              >
                LAWYERS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => { toggleButton5(!button5) }}
              style={(button5) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={(button5) ?
                  searchStyles.filter_options_button_label_lit
                  :
                  searchStyles.filter_options_button_label
                }
              >
                BUSINESSMEN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => { toggleButton6(!button6) }}
              style={(button6) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={(button6) ?
                  searchStyles.filter_options_button_label_lit
                  :
                  searchStyles.filter_options_button_label
                }
              >
                THERAPISTS
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => { toggleButton7(!button7) }}
              style={(button7) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={(button7) ?
                  searchStyles.filter_options_button_label_lit
                  :
                  searchStyles.filter_options_button_label
                }
              >
                TEACHERS
              </Text>
            </TouchableOpacity>
          </View>
          :
          null
        }
      </View>
      <View style={searchStyles.scaffold}>
        <FlatList
          data={list}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.key.toString()}
          renderItem={({ item }) => (
            <View>
              <View style={searchStyles.scaffold_list_container}>
                <View style={searchStyles.scaffold_list_item_container}>
                  <Text style={searchStyles.scaffold_list_item_header}>{item.field}</Text>
                  {item.data.map((value) => {
                    return (
                      <TouchableOpacity
                        key={value.id}
                        activeOpacity={0.6}
                        onPress={Profile}
                        style={searchStyles.scaffold_list_container}
                      >
                        <Text style={searchStyles.scaffold_list_item_data}>Dr. {value.name}</Text>
                      </TouchableOpacity>
                    )
                  })}
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default Search;