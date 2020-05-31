import React from 'react';
import { Text, Image, View, FlatList, TouchableHighlight, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
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

  const Profile = () => {
    // navigation.navigate('LoginClient');
  }

  const list = [
    {
      field: "ENGINEERS",
      data: [
        {id: 1, name: "Go", img: require("../assets/troy.png")},
        {id: 2, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 3, name: "Berlin", img: require("../assets/troy.png")},
        {id: 4, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 5, name: "Berlin", img: require("../assets/troy.png")}, 
      ],
      key: 1,
    },

    {
      field: "DOCTORS",
      data: [
        {id: 1, name: "Tokyo", img: require("../assets/troy.png")},
        {id: 2, name: "Denver", img: require("../assets/troy.png")},
        {id: 3, name: "Rio", img: require("../assets/troy.png")},
        {id: 4, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 5, name: "Berlin", img: require("../assets/troy.png")}, 
      ],
      key: 2,
    },

    {
      field: "SCULPTORS",
      data: [
        {id: 1, name: "Arnoco", img: require("../assets/troy.png")},
        {id: 2, name: "Burmuda", img: require("../assets/troy.png")},
        {id: 3, name: "Risotto", img: require("../assets/troy.png")},
        {id: 4, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 5, name: "Berlin", img: require("../assets/troy.png")}, 
      ],
      key: 3,
    },

    {
      field: "LAWYERS",
      data: [
        {id: 1, name: "Madeyo", img: require("../assets/troy.png")},
        {id: 2, name: "Blanca", img: require("../assets/troy.png")},
        {id: 3, name: "Risotto", img: require("../assets/troy.png")},
        {id: 4, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 5, name: "Berlin", img: require("../assets/troy.png")}, 
      ],
      key: 4,
    },

    {
      field: "BUSINESSMEN",
      data: [
        {id: 1, name: "Shelby", img: require("../assets/troy.png")},
        {id: 2, name: "Oquias", img: require("../assets/troy.png")},
        {id: 3, name: "Chengretto", img: require("../assets/troy.png")},
        {id: 4, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 5, name: "Berlin", img: require("../assets/troy.png")}, 
      ],
      key: 5,
    },

    {
      field: "ARTISTS",
      data: [
        {id: 1, name: "Tokyo", img: require("../assets/troy.png")},
        {id: 2, name: "Denver", img: require("../assets/troy.png")},
        {id: 3, name: "Rio", img: require("../assets/troy.png")},
        {id: 4, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 5, name: "Berlin", img: require("../assets/troy.png")}, 
      ],
      key: 6,
    },

    {
      field: "ARCHITECTS",
      data: [
        {id: 1, name: "Arnoco", img: require("../assets/troy.png")},
        {id: 2, name: "Burmuda", img: require("../assets/troy.png")},
        {id: 3, name: "Risotto", img: require("../assets/troy.png")},
        {id: 4, name: "Helsinki", img: require("../assets/troy.png")},
        {id: 5, name: "Berlin", img: require("../assets/troy.png")}, 
      ],
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
          keyExtractor = { (item) => item.key.toString() }
          renderItem={({ item }) => (
            <View key={item.key.toString()}>
              <View style={homeStyles.scaffold_list_container}>
                <View style={homeStyles.scaffold_vlist_item_container}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={()=>{}}
                    style={{paddingVertical: 2, marginVertical: 2}}
                  >
                    <Text style={homeStyles.scaffold_vlist_item_header}>{item.field}</Text>
                  </TouchableOpacity>
                  <View style={homeStyles.scaffold_vlist_item_container}>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={{}}
                    >
                      {item.data.map((data, index) => {
                        return (
                          <View style={homeStyles.scaffold_hlist_item_container} key={data.id.toString()}>
                            <View style={{flexDirection: 'row'}}>
                              <Text>{index + 1}</Text>
                              <View style={{flexDirection: 'column'}}>
                                <TouchableOpacity
                                  activeOpacity={0.6}
                                  onPress={Profile}
                                  style={{paddingVertical: 2, marginVertical: 2}}
                                >
                                  <Image
                                    source={data.img}
                                    style={{height: 60, width: 80}}
                                  />
                                </TouchableOpacity>
                                <Text>{data.name}</Text>
                              </View>
                            </View>                         
                         </View>
                        )
                      })}
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

export default HomeClient;