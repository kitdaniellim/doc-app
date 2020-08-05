import React, { useState } from 'react';
import { Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RNPickerSelect from 'react-native-picker-select';
import { searchStyles, signupStyles } from '../styles/styles';


const Search = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [filter_var, setFilter] = useState('None');
  // let button_temp = (navigation.getParam('userSpecialty') === 'ENGINEERS') ?
  //   1
  //   :
  //   (navigation.getParam('userSpecialty') === 'DOCTORS') ?
  //     2
  //     :
  //     (navigation.getParam('userSpecialty') === 'ARCHITECTS') ?
  //       3
  //       :
  //       (navigation.getParam('userSpecialty') === 'LAWYERS') ?
  //         4
  //         :
  //         (navigation.getParam('userSpecialty') === 'BUSINESSMEN') ?
  //           5
  //           :
  //           (navigation.getParam('userSpecialty') === 'THERAPISTS') ?
  //             6
  //             :
  //             (navigation.getParam('userSpecialty') === 'TEACHERS') ?
  //               7
  //               :
  //               0

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
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 2,
          name: 'Helsinki',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 3,
          name: 'Berlin',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 4,
          name: 'Troy',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 5,
          name: 'Troy',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 6,
          name: 'Troy',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
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
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 2,
          name: 'Denver',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 3,
          name: 'Rio',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
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
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 2,
          name: 'Bermuda',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 3,
          name: 'Rosotto',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
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
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 2,
          name: 'Blanca',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621'
        },
        {
          id: 3,
          name: 'Joseph',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
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
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 2,
          name: 'Oquias',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 3,
          name: 'Chengretto',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
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
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 2,
          name: 'Gabriel',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 3,
          name: 'Theadosia',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
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
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 2,
          name: 'Mozart',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
        },
        {
          id: 3,
          name: 'Franklin',
          img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
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
        <View style={searchStyles.filter_label_container}>
          <Text style={searchStyles.filter_label}>FILTER</Text>
        </View>
        <View style={{ width: 150, height: 50, justifyContent: 'center'}}>
          <RNPickerSelect
            placeholder={{
              label: 'None',
              value: 'None',
              color: '#8B8787'
            }}
            style={{
              viewContainer: {
                alignSelf: 'stretch',
                backgroundColor: '#fff',
              },
              inputIOS: {
                color: '#8B8787',
              },
              inputAndroid: {
                color: '#8B8787',
              },
            }}

            onValueChange={value => setFilter(value)}
            value={filter_var}
            items={[
              { label: 'ENGINEERS', value: 'ENGINEERS' },
              { label: 'DOCTORS', value: 'DOCTORS' },
              { label: 'ARCHITECTS', value: 'ARCHITECTS' },
              { label: 'LAWYERS', value: 'LAWYERS' },
            ]}
          />
        </View>
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
                              source={{uri: value.img}}
                              style={searchStyles.scaffold_list_item_img}
                            />
                          </View>
                          <View style={{ justifyContent: 'center'}}>
                            <Text style={searchStyles.scaffold_list_item_data}>Dr. {value.name}</Text>
                            <Text style={searchStyles.scaffold_list_item_data}>Opthalmology</Text>
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