import React from 'react';
import { Text, View, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { searchStyles, navbarStyles } from '../styles/styles';



const Search = () => {

  
  const list = [
    {
      field: "DOCTORS",
      data: ["Pizza", "Burger", "Risotto"]
    },

    {
      field: "BUSINESS",
      data: ["Pizza", "Burger", "Risotto"]
    },

    {
      field: "LAWYERS",
      data: ["Pizza", "Burger", "Risotto"]
    },
    
    {
      field: "ENGINEERS",
      data: ["Pizza", "Burger", "Risotto"]
    },

    {
      field: "ARCHITECTS",
      data: ["Pizza", "Burger", "Risotto"]
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
    <View style={searchStyles.container}>  
      <SearchBar style={searchStyles.searchBar}
        platform="android"
        lightTheme
        round
        searchIcon={{ size: 18 }}
        placeholder="Click here to start searching!"
      />
      <View style={searchStyles.body}>
        <FlatList 
          data={list}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <TouchableHighlight 
                onPress={()=>{}}
                underlayColor='#f2f2f2'
                style={searchStyles.bodyContent}>
                <View>
                  <Text style={searchStyles.contentHeader}>{item.field}</Text>
                  <Text style={searchStyles.contentText}>{item.data}</Text>
                </View>
              </TouchableHighlight>
              <View style={searchStyles.divider}/> 
            </View>          
          )}
        />
      </View>

      
      {/* <View style={searchStyles.navBar}>
        <Button style={{width: 50, height: 50, backgroundColor: 'powderblue'}}
          onPress={goToAbout}
          title="Hello"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button style={{width: 50, height: 50, backgroundColor: 'skyblue'}}
          onPress={goToAbout}
          title="Go to About"
          accessibilityLabel="Learn more about this purple button"
        />
        <Button style={{width: 50, height: 50}}
          onPress={goToAbout}
          title="World"
          color="steelblue"
          accessibilityLabel="Learn more about this purple button"
        />
      </View> */}

      <View style={navbarStyles.navBar}>
        <TouchableOpacity 
          style={navbarStyles.navBarItem} 
          onPress={()=>{}}
        >
          <View>
            <Icon style={navbarStyles.icon} name="calendar" size={21} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={navbarStyles.navBarItem} 
          onPress={()=>{}}
        >
          <View>
            <Icon style={navbarStyles.icon} name="search" size={21} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={navbarStyles.navBarItem} 
          onPress={()=>{}}
        >
          <View>
            <Icon style={navbarStyles.icon} name="star" size={21} />
          </View>
        </TouchableOpacity>
      </View>
    </View> 
  );
}

export default Search;