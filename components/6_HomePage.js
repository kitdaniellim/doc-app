import React from 'react';
import { Text, Image, View, FlatList, RefreshControl, TouchableOpacity, ScrollView } from 'react-native';
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
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 2,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. Pepito",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 3,
      userSpecialty: "LAWYERS",
      fullName: "Dr. Berlin",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 4,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. Helsinki",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 5,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 6,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 7,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 8,
      userSpecialty: "DOCTORS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 9,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 10,
      userSpecialty: "LAWYERS",
      fullName: "Dr. John",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 11,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 12,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 13,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 14,
      userSpecialty: "ENGINEERS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 15,
      userSpecialty: "LAWYERS",
      fullName: "Dr. James",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 16,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. Jose",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 17,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. John",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 18,
      userSpecialty: "ARCHITECTS",
      fullName: "Dr. Jacob",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 19,
      userSpecialty: "LAWYERS",
      fullName: "Dr. Jose",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
    {
      key: 20,
      userSpecialty: "LAWYERS",
      fullName: "Dr. Jacob",
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/users%2Fdefault%2Fdefault.jpg?alt=media&token=738d276c-9c6e-4691-b029-95fddecad621',
    },
  ];

  const images = [
    {
      key: 1,
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample1.png?alt=media&token=b84c2e8e-c810-41ba-99aa-74655ee4cac6',
    },
    {
      key: 2,
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample2.png?alt=media&token=02db3f2f-a342-454b-8ae1-ecc32543a769',
    },
    {
      key: 3,
      img: 'https://firebasestorage.googleapis.com/v0/b/appointmentapp-d867d.appspot.com/o/homepage%2Fassets_carousel_sample3.png?alt=media&token=60635cf7-dc00-4685-b379-731d722673b9',
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
                                      source={{ uri: data.img }}
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