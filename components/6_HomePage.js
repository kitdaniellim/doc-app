import React from 'react';
import { Text, Image, View, FlatList, RefreshControl, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackgroundCarousel} from './custom/BackgroundCarousel'
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

  const Profile = () => {
    navigation.navigate('Profile');
  }

  const userSpecialty_list = [
    {
      key: 1,
      userSpecialty: "ENGINEERS",
    },
    {
      key: 2,
      userSpecialty: "DOCTORS",
    },
    {
      key: 3,
      userSpecialty: "ARCHITECTS",
    },
    {
      key: 4,
      userSpecialty: "LAWYERS",
    },
  ]

  const user_list = [
    {
      key: 1,
      userSpecialty: "DOCTORS",
      fullName: "Dr. Seuss",
      img: require("../assets/pp_sample1.png"),
    },
    {
      key: 2,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. Pepito",
      img: require("../assets/pp_sample3.png"),
    },
    {
      key: 3,
      userSpecialty: "LAWYERS",
      fullName: "Dr. Berlin",
      img: require("../assets/pp_sample2.png"),
    },
    {
      key: 4,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. Helsinki",
      img: require("../assets/pp_sample6.png"),
    },
    {
      key: 5,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample3.png"),
    },
    {
      key: 6,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample8.png"),
    },
    {
      key: 7,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample5.png"),
    },
    {
      key: 8,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample3.png"),
    },
    {
      key: 9,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample2.png"),
    },
    {
      key: 10,
      userSpecialty: "LAWYERS",
      fullName: "Dr. John",
      img: require("../assets/pp_sample5.png"),
    },
    {
      key: 11,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample1.png"),
    },
    {
      key: 12,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample7.png"),
    },
    {
      key: 13,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample5.png"),
    },
    {
      key: 14,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample8.png"),
    },
    {
      key: 15,
      userSpecialty: "LAWYERS",
      fullName: "Dr. James",
      img: require("../assets/pp_sample5.png"),
    },
    {
      key: 16,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. Jose",
      img: require("../assets/pp_sample8.png"),
    },
    {
      key: 17,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. John",
      img: require("../assets/pp_sample5.png"),
    },
    {
      key: 18,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. Jacob",
      img: require("../assets/pp_sample8.png"),
    },
    {
      key: 19,
      userSpecialty: "LAWYERS",
      fullName: "Dr. Jose",
      img: require("../assets/pp_sample8.png"),
    },
    {
      key: 20,
      userSpecialty: "LAWYERS",
      fullName: "Dr. Jacob",
      img: require("../assets/pp_sample8.png"),
    },
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
      <View style={{height: 200}}>
        <BackgroundCarousel images={images} />
      </View> 
      <View style={homeStyles.scaffold}>  
        <FlatList
          data={userSpecialty_list}
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
                      <Text style={homeStyles.scaffold_vlist_item_header}>{item.userSpecialty}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={()=>{
                        navigation.navigate('Search', item)
                      }}
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
                      {user_list.map((data) => {
                        if(item.userSpecialty === data.userSpecialty){
                          return (
                            <View style={homeStyles.scaffold_hlist_item_container} key={data.key.toString()}>
                              <View style={homeStyles.scaffold_hlist_item_box_container}>
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
                                  <Text style={homeStyles.scaffold_hlist_item_box_name}>{data.fullName}</Text>
                                </View>
                              </View>                         
                           </View>
                          )
                        }
                        
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