import React from 'react';
import { Text, Image, View, FlatList, RefreshControl, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackgroundCarousel} from './BackgroundCarousel'
import { homeStyles } from '../styles/styles';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(1000).then(() => setRefreshing(false));
  }, [refreshing]);

  const Field = () => {
    navigation.navigate('Search');
  }

  const SeeAll = () => {
    navigation.navigate('Search');
  }

  const Profile = () => {
    navigation.navigate('Profile');
  }

  const list = [
    {
      field: "ENGINEERS",
      data: [
        {id: 1, name: "Dr. Go", img: require("../assets/pp_sample1.png")},
        {id: 2, name: "Dr. Helsinki", img: require("../assets/pp_sample5.png")},
        {id: 3, name: "Dr. Berlin", img: require("../assets/pp_sample2.png")},
        {id: 4, name: "Dr. Helsinki", img: require("../assets/pp_sample3.png")},
        {id: 5, name: "Dr. Berlin", img: require("../assets/pp_sample4.png")}, 
      ],
      key: 1,
    },

    {
      field: "DOCTORS",
      data: [
        {id: 1, name: "Dr. Tokyo", img: require("../assets/pp_sample8.png")},
        {id: 2, name: "Dr. Denver", img: require("../assets/pp_sample3.png")},
        {id: 3, name: "Dr. Rio", img: require("../assets/pp_sample1.png")},
        {id: 4, name: "Dr. Helsinki", img: require("../assets/pp_sample2.png")},
        {id: 5, name: "Dr. Berlin", img: require("../assets/pp_sample5.png")}, 
      ],
      key: 2,
    },

    {
      field: "SCULPTORS",
      data: [
        {id: 1, name: "Dr. Arnoco", img: require("../assets/pp_sample2.png")},
        {id: 2, name: "Dr. Burmuda", img: require("../assets/pp_sample7.png")},
        {id: 3, name: "Dr. Risotto", img: require("../assets/pp_sample6.png")},
        {id: 4, name: "Dr. Helsinki", img: require("../assets/pp_sample3.png")},
        {id: 5, name: "Dr. Berlin", img: require("../assets/pp_sample4.png")}, 
      ],
      key: 3,
    },

    {
      field: "LAWYERS",
      data: [
        {id: 1, name: "Dr. Madeyo", img: require("../assets/pp_default.png")},
        {id: 2, name: "Dr. Blanca", img: require("../assets/pp_default.png")},
        {id: 3, name: "Dr. Risotto", img: require("../assets/pp_default.png")},
        {id: 4, name: "Dr. Helsinki", img: require("../assets/pp_default.png")},
        {id: 5, name: "Dr. Berlin", img: require("../assets/pp_default.png")}, 
      ],
      key: 4,
    },

    {
      field: "BUSINESSMEN",
      data: [
        {id: 1, name: "Dr. Shelby", img: require("../assets/pp_default.png")},
        {id: 2, name: "Dr. Oquias", img: require("../assets/pp_default.png")},
        {id: 3, name: "Dr. Chengretto", img: require("../assets/pp_default.png")},
        {id: 4, name: "Dr. Helsinki", img: require("../assets/pp_default.png")},
        {id: 5, name: "Dr. Berlin", img: require("../assets/pp_default.png")}, 
      ],
      key: 5,
    },

    {
      field: "ARTISTS",
      data: [
        {id: 1, name: "Dr. Tokyo", img: require("../assets/pp_default.png")},
        {id: 2, name: "Dr. Denver", img: require("../assets/pp_default.png")},
        {id: 3, name: "Dr. Rio", img: require("../assets/pp_default.png")},
        {id: 4, name: "Dr. Helsinki", img: require("../assets/pp_default.png")},
        {id: 5, name: "Dr. Berlin", img: require("../assets/pp_default.png")}, 
      ],
      key: 6,
    },

    {
      field: "ARCHITECTS",
      data: [
        {id: 1, name: "Dr. Arnoco", img: require("../assets/pp_default.png")},
        {id: 2, name: "Dr. Burmuda", img: require("../assets/pp_default.png")},
        {id: 3, name: "Dr. Risotto", img: require("../assets/pp_default.png")},
        {id: 4, name: "Dr. Helsinki", img: require("../assets/pp_default.png")},
        {id: 5, name: "Dr. Berlin", img: require("../assets/pp_default.png")}, 
      ],
      key: 7,
    }

  ];

  const images = [
    {
      key: 1,
      img: require("../assets/carousel_sample1.png"),
    },
    {
      key: 2,
      img: require("../assets/carousel_sample2.png"),
    },
    {
      key: 3,
      img: require("../assets/carousel_sample3.png"),
    },
  ];

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header_container}>
        <Text style={homeStyles.header_text_bold}>HOME</Text>
        <Text style={homeStyles.header_text}>Highest Rated by Profession</Text>
      </View>
      <View style={{height: 200}}>
        <BackgroundCarousel images={images} />
      </View> 
      <View style={homeStyles.scaffold}>  
        <FlatList
          data={list}
          // style={{ marginVertical: -10}}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl 
              refreshing={refreshing} 
              onRefresh={onRefresh} 
            />
          }
          keyExtractor = { (item) => item.key.toString() }
          renderItem={({ item }) => (
            <View key={item.key.toString()}>
              <View style={homeStyles.scaffold_list_container}>
                <View style={homeStyles.scaffold_vlist_item_container}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={Field}
                      style={homeStyles.scaffold_vlist_item_header_container}
                    >
                      <Text style={homeStyles.scaffold_vlist_item_header}>{item.field}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={SeeAll}
                      style={homeStyles.scaffold_vlist_item_header_container_2}
                    >
                      <Text style={homeStyles.scaffold_vlist_item_header_2}>See All</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={homeStyles.scaffold_hlist_container}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={{}}
                    >
                      {item.data.map((data) => {
                        return (
                          <View style={homeStyles.scaffold_hlist_item_container} key={data.id.toString()}>
                            <View style={homeStyles.scaffold_hlist_item_box_container}>
                              {/* <Text style={homeStyles.scaffold_hlist_item_box_id}>{data.id}</Text> */}
                              <View style={homeStyles.scaffold_hlist_item_box_content}>
                                <TouchableOpacity
                                  activeOpacity={0.6}
                                  onPress={Profile}
                                  style={homeStyles.scaffold_hlist_item_box_image_container}
                                >
                                  <Image
                                    source={data.img}
                                    style={homeStyles.scaffold_hlist_item_box_image}
                                  />
                                </TouchableOpacity>
                                <Text style={homeStyles.scaffold_hlist_item_box_name}>{data.name}</Text>
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

export default Home;