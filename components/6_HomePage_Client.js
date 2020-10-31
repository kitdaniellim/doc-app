import React,{Component} from 'react';
import { Text, Image, View, FlatList, RefreshControl, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeStyles, globalStyles, navbarStyles } from '../styles/styles';

import { connect } from 'react-redux';

function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

class HomeClient extends React.Component{
  
  render(){
    
  // const [refreshing, setRefreshing] = React.useState(false);

  // const onRefresh = React.useCallback(() => {
  //   setRefreshing(true);
  //   wait(1500).then(() => setRefreshing(false));
  // }, [refreshing]);

  // const Submit = () => {
  //   navigation.navigate('LoginClient');
  // }

  // const Search = () => {
  //   navigation.navigate('Search');
  // }

  // const Profile = () => {
  //   // navigation.navigate('LoginClient');
  // }

  // const list = [
  //   {
  //     field: "ENGINEERS",
  //     data: [
  //       {id: 1, name: "Dr. Go", img: require("../assets/troy.png")},
  //       {id: 2, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 3, name: "Dr. Berlin", img: require("../assets/troy.png")},
  //       {id: 4, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 5, name: "Dr. Berlin", img: require("../assets/troy.png")}, 
  //     ],
  //     key: 1,
  //   },

  //   {
  //     field: "DOCTORS",
  //     data: [
  //       {id: 1, name: "Dr. Tokyo", img: require("../assets/troy.png")},
  //       {id: 2, name: "Dr. Denver", img: require("../assets/troy.png")},
  //       {id: 3, name: "Dr. Rio", img: require("../assets/troy.png")},
  //       {id: 4, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 5, name: "Dr. Berlin", img: require("../assets/troy.png")}, 
  //     ],
  //     key: 2,
  //   },

  //   {
  //     field: "SCULPTORS",
  //     data: [
  //       {id: 1, name: "Dr. Arnoco", img: require("../assets/troy.png")},
  //       {id: 2, name: "Dr. Burmuda", img: require("../assets/troy.png")},
  //       {id: 3, name: "Dr. Risotto", img: require("../assets/troy.png")},
  //       {id: 4, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 5, name: "Dr. Berlin", img: require("../assets/troy.png")}, 
  //     ],
  //     key: 3,
  //   },

  //   {
  //     field: "LAWYERS",
  //     data: [
  //       {id: 1, name: "Dr. Madeyo", img: require("../assets/troy.png")},
  //       {id: 2, name: "Dr. Blanca", img: require("../assets/troy.png")},
  //       {id: 3, name: "Dr. Risotto", img: require("../assets/troy.png")},
  //       {id: 4, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 5, name: "Dr. Berlin", img: require("../assets/troy.png")}, 
  //     ],
  //     key: 4,
  //   },

  //   {
  //     field: "BUSINESSMEN",
  //     data: [
  //       {id: 1, name: "Dr. Shelby", img: require("../assets/troy.png")},
  //       {id: 2, name: "Dr. Oquias", img: require("../assets/troy.png")},
  //       {id: 3, name: "Dr. Chengretto", img: require("../assets/troy.png")},
  //       {id: 4, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 5, name: "Dr. Berlin", img: require("../assets/troy.png")}, 
  //     ],
  //     key: 5,
  //   },

  //   {
  //     field: "ARTISTS",
  //     data: [
  //       {id: 1, name: "Dr. Tokyo", img: require("../assets/troy.png")},
  //       {id: 2, name: "Dr. Denver", img: require("../assets/troy.png")},
  //       {id: 3, name: "Dr. Rio", img: require("../assets/troy.png")},
  //       {id: 4, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 5, name: "Dr. Berlin", img: require("../assets/troy.png")}, 
  //     ],
  //     key: 6,
  //   },

  //   {
  //     field: "ARCHITECTS",
  //     data: [
  //       {id: 1, name: "Dr. Arnoco", img: require("../assets/troy.png")},
  //       {id: 2, name: "Dr. Burmuda", img: require("../assets/troy.png")},
  //       {id: 3, name: "Dr. Risotto", img: require("../assets/troy.png")},
  //       {id: 4, name: "Dr. Helsinki", img: require("../assets/troy.png")},
  //       {id: 5, name: "Dr. Berlin", img: require("../assets/troy.png")}, 
  //     ],
  //     key: 7,
  //   }

  // ];

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.header_container}>
  <Text style={homeStyles.header_text_bold}>HOME -- Hello </Text>
  <Text style={homeStyles.header_text_bold}>{this.props.user.email} </Text>
        <Text style={homeStyles.header_text}>Highest Rated by Profession</Text>
      </View>
      <View style={homeStyles.scaffold}>
        {/* <Text>{ navigation.getParam(`user`) }</Text> */}
        {/* <FlatList
          data={list}
          style={{marginVertical: -10}}
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
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={()=>{}}
                    style={{paddingVertical: 2, marginVertical: 2}}
                  >
                    <Text style={homeStyles.scaffold_vlist_item_header}>{item.field}</Text>
                  </TouchableOpacity>
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
                              <Text style={homeStyles.scaffold_hlist_item_box_id}>{data.id}</Text>
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
        /> */}
      </View>
    </View>
  );
                    }
}
const mapStateToProps = state => {
	return {
		user: state.users
	}
}
export default connect(mapStateToProps)(HomeClient);
//export default HomeClient;