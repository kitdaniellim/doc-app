import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { homeStyles, globalStyles, navbarStyles } from '../styles/styles';



const HomeClient = ( {navigation} ) => {
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
      data: ["Go", "Helsinki", "Berlin"]
    },

    {
      field: "DOCTORS",
      data: ["Tokyo", "Denver", "Rio"]
    },

    {
      field: "ARCHITECTS",
      data: ["Arnoco", "Burmuda", "Risotto"]
    },
    
    {
      field: "LAWYERS",
      data: ["Madeyo", "Blanca", "Risotto"]
    },

    {
      field: "BUSINESSMEN",
      data: ["Shelby", "Oquias", "Chengretto"]
    },

    {
      field: "DOCTORS",
      data: ["Tokyo", "Denver", "Rio"]
    },

    {
      field: "ARCHITECTS",
      data: ["Arnoco", "Burmuda", "Risotto"]
    },
    
    {
      field: "LAWYERS",
      data: ["Madeyo", "Blanca", "Risotto"]
    },

    {
      field: "BUSINESSMEN",
      data: ["Shelby", "Oquias", "Chengretto"]
    },

    {
      field: "DOCTORS",
      data: ["Tokyo", "Denver", "Rio"]
    },

    {
      field: "ARCHITECTS",
      data: ["Arnoco", "Burmuda", "Risotto"]
    },
    
    {
      field: "LAWYERS",
      data: ["Madeyo", "Blanca", "Risotto"]
    },

    {
      field: "BUSINESSMEN",
      data: ["Shelby", "Oquias", "Chengretto"]
    },

    {
      field: "DOCTORS",
      data: ["Tokyo", "Denver", "Rio"]
    },

    {
      field: "ARCHITECTS",
      data: ["Arnoco", "Burmuda", "Risotto"]
    },
    
    {
      field: "LAWYERS",
      data: ["Madeyo", "Blanca", "Risotto"]
    },

    {
      field: "BUSINESSMEN",
      data: ["Shelby", "Oquias", "Chengretto"]
    }

  ];

  return (
    <View style={homeStyles.container}>
        <View style={homeStyles.header_container}>
          <Text style={homeStyles.header_text_bold}>HOME</Text>
          <Text style={homeStyles.header_text}>Highest Rated by Profession</Text>
        </View>
        <View style={homeStyles.scaffold}>
          <View style={homeStyles.scaffold_list_container}>
            <FlatList 
              data={list}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <View>
                  <TouchableHighlight 
                    onPress={()=>{}}
                    underlayColor='#f2f2f2'
                    style={homeStyles.listContent}
                  >
                    <View>
                      <Text >{item.field}</Text>
                      <Text >{item.data}</Text>
                    </View>
                  </TouchableHighlight>
                  <View /> 
                </View>          
              )}
            />  
          </View>
        </View>
      <View style={navbarStyles.navBar}>
        <TouchableOpacity 
          style={navbarStyles.navBarItem} 
          onPress={()=>{}}
        >
          <View>
            <Icon style={navbarStyles.icon} name="calendar" size={18} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={navbarStyles.navBarItem} 
          onPress={Search}
        >
          <View>
            <Icon style={navbarStyles.icon} name="search" size={18} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={navbarStyles.navBarItem} 
          onPress={()=>{}}
        >
          <View>
            <Icon style={navbarStyles.icon} name="star" size={18} />
          </View>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

export default HomeClient;