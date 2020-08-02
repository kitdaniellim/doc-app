import React, { useState } from 'react';
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchStyles } from '../styles/styles';


const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const filter_temp = (navigation.getParam('userSpecialty') !== null) ? false : true;
  const [isFilterVisible, toggleFilter] = useState(filter_temp);
  let button_temp = (navigation.getParam('userSpecialty') === 'ENGINEERS') ?
    1
    :
    (navigation.getParam('userSpecialty') === 'DOCTORS') ?
      2
      :
      (navigation.getParam('userSpecialty') === 'ARCHITECTS') ?
        3
        :
        (navigation.getParam('userSpecialty') === 'LAWYERS') ?
          4
          :
          (navigation.getParam('userSpecialty') === 'BUSINESSMEN') ?
            5
            :
            (navigation.getParam('userSpecialty') === 'THERAPISTS') ?
              6
              :
              (navigation.getParam('userSpecialty') === 'TEACHERS') ?
                7
                :
                0
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
          name: 'Go',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 2,
          name: 'Helsinki',
          img: require("../assets/pp_sample2.png"),
        },
        {
          id: 3,
          name: 'Berlin',
          img: require("../assets/pp_sample3.png"),
        },
        {
          id: 4,
          name: 'Troy',
          img: require("../assets/pp_sample4.png"),
        },
        {
          id: 5,
          name: 'Troy',
          img: require("../assets/pp_sample5.png"),
        },
        {
          id: 6,
          name: 'Troy',
          img: require("../assets/pp_sample6.png"),
        },
      ],
      key: 1,
    },

    {
      field: "DOCTORS",
      data: [
        {
          id: 1,
          name: 'Tokyo',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 2,
          name: 'Denver',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 3,
          name: 'Rio',
          img: require("../assets/pp_sample1.png"),
        },
      ],
      key: 2,
    },

    {
      field: "ARCHITECTS",
      data: [
        {
          id: 1,
          name: 'Arnoco',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 2,
          name: 'Bermuda',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 3,
          name: 'Rosotto',
          img: require("../assets/pp_sample1.png"),
        },
      ],
      key: 3,
    },

    {
      field: "LAWYERS",
      data: [
        {
          id: 1,
          name: 'Madeyo',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 2,
          name: 'Blanca',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 3,
          name: 'Joseph',
          img: require("../assets/pp_sample1.png"),
        },
      ],
      key: 4,
    },

    {
      field: "BUSINESSMEN",
      data: [
        {
          id: 1,
          name: 'Shelby',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 2,
          name: 'Oquias',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 3,
          name: 'Chengretto',
          img: require("../assets/pp_sample1.png"),
        },
      ],
      key: 5,
    },

    {
      field: "THERAPISTS",
      data: [
        {
          id: 1,
          name: 'Steffan',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 2,
          name: 'Gabriel',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 3,
          name: 'Theadosia',
          img: require("../assets/pp_sample1.png"),
        },
      ],
      key: 6,
    },

    {
      field: "TEACHERS",
      data: [
        {
          id: 1,
          name: 'Dell',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 2,
          name: 'Mozart',
          img: require("../assets/pp_sample1.png"),
        },
        {
          id: 3,
          name: 'Franklin',
          img: require("../assets/pp_sample1.png"),
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
            placeholder="Enter Professional's Name Here"
            containerStyle={{
              height: 40,
              justifyContent: 'center',
              marginTop: 2,
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
            name={(isFilterVisible) ? "caret-up" : "caret-down"}
            size={16}
          />
        </TouchableOpacity>
        {(isFilterVisible) ?
          <View style={searchStyles.filter_options_container}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => {
                toggleButton1(!button1)
                button_temp = 0
              }}
              style={((button_temp === 1) ? () => { toggleButton1(!button1) } : button1) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={((button_temp === 1) ? () => { toggleButton1(!button1) } : button1) ?
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
              style={((button_temp === 2) ? () => { toggleButton2(!button2) } : button2) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={((button_temp === 2) ? () => { toggleButton2(!button2) } : button2) ?
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
              style={((button_temp === 3) ? () => { toggleButton3(!button3) } : button3) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={((button_temp === 3) ? () => { toggleButton3(!button3) } : button3) ?
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
              style={((button_temp === 4) ? () => { toggleButton4(!button4) } : button4) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={((button_temp === 4) ? () => { toggleButton4(!button4) } : button4) ?
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
              style={((button_temp === 5) ? () => { toggleButton5(!button5) } : button5) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={((button_temp === 5) ? () => { toggleButton5(!button5) } : button5) ?
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
              style={((button_temp === 6) ? () => { toggleButton6(!button6) } : button6) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={((button_temp === 6) ? () => { toggleButton6(!button6) } : button6) ?
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
              style={((button_temp === 7) ? () => { toggleButton7(!button7) } : button7) ?
                searchStyles.filter_options_button_lit
                :
                searchStyles.filter_options_button
              }
            >
              <Text
                style={((button_temp === 7) ? () => { toggleButton7(!button7) } : button7) ?
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
        {/* <Text>{navigation.getParam('userSpecialty')}</Text> */}
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
                        <View style={{ flexDirection: 'row' }}>
                          <View>
                            <Image
                              source={value.img}
                              style={searchStyles.scaffold_list_item_img}
                            />
                          </View>
                          <View style={{ justifyContent: 'center'}}>
                            <Text style={searchStyles.scaffold_list_item_data}>Dr. {value.name}</Text>
                          </View>
                        </View>
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