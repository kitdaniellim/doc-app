import React, {Component} from 'react';
import { Text, Image, View, FlatList, RefreshControl, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BackgroundCarousel} from './BackgroundCarousel'
import { homeStyles } from '../styles/styles';
import {  getAllConsultant, getConsultant, getReviews} from '../actions/consultant';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Firebase, { db } from '../config/Firebase';

class Home extends Component{
  _isMounted = false;
  constructor(props)
  {
    super(props);
    //this.Profile = this.Profile.bind(this);
    // this.ref = firebase.firestore().collection
    //  this.state = {
    //    imgUrl =  ''
    //  }
  }

  componentDidMount() {
    console.log(this.props)
    this._isMounted = true;
    if(this._isMounted){
      this.props.getAllConsultant();
    }
 
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  wait(timeout) {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  }
  
  SeeAll(){
    this.props.navigation.navigate('Search');
  }

  Field () {
    this.props.navigation.navigate('Search');
  }

  Profile = (uid) => {

    this.props.getConsultant(uid);
    if(this.props.singleConsultant.office_details != null && this.props.singleConsultant.userReviews!= null){
      this.props.navigation.navigate('ProfileTab')
    }
  }


  
  render(){
    // alert(this.props.navigation.)
    // if(this.props.navigation.state.params){
    //   alert("test")
    //   alert(this.props.navigation.state.params);
    // }
 
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

    
  const userSpecialty_list = [
    {
      key: 1,
      userSpecialty: "Engineer",
    },
    {
      key: 2,
      userSpecialty: "ARCHITECTS",
    },
    {
      key: 3,
      userSpecialty: "Doctor",
    },
    {
      key: 4,
      userSpecialty: "LAWYERS",
    },
  ]



       
       
    const users = Array.from(this.props.consultant);
         if( this.props.navigation.state){
    if(this.props.navigation.state.params ){
      Firebase.auth().signOut()
      this.props.navigation.navigate('Login')
    }
  }
  

    return(
      <View style={homeStyles.container}>
         <View style={{height: 200}}>
        {/* <BackgroundCarousel images={images} /> */}
      </View> 

      {/* <Text >Email is : {this.props.user.email}</Text> */}
      <View style={homeStyles.scaffold}>  
        <FlatList
          data={userSpecialty_list}
          showsVerticalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl 
          //     refreshing={refreshing} 
          //     onRefresh={onRefresh} 
          //   />
          // }
          keyExtractor = { (item) => item.key.toString() }
          renderItem={({ item }) => (
            <View key={item.key.toString()}>
              <View style={homeStyles.scaffold_list_container}>
                <View style={homeStyles.scaffold_vlist_item_container}>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={this.Field}
                      style={homeStyles.scaffold_vlist_item_header_container}
                    >
                      <Text style={homeStyles.scaffold_vlist_item_header}>{item.userSpecialty}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      activeOpacity={0.6}
                      onPress={this.SeeAll}
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
                      {users.map((data) => {
                  
                        if(item.userSpecialty === data.userSpecialty){
                          return (
                            <View style={homeStyles.scaffold_hlist_item_container} key={data.uid}>
                              <View style={homeStyles.scaffold_hlist_item_box_container}>
                                <View style={homeStyles.scaffold_hlist_item_box_content}>
                                  <TouchableOpacity
                                    activeOpacity={0.6}
                                    onPress={() => this.Profile(data.uid)}
                                    style={homeStyles.scaffold_hlist_item_box_image_container}
                                  >
                                    <Image
                                      source={{uri:data.profilePicture}}
                                      style={homeStyles.scaffold_hlist_item_box_image}
                                    />
                                  </TouchableOpacity>
                                  <Text style={homeStyles.scaffold_hlist_item_box_name}>{data.userSpecialty} {data.fullName}</Text>
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
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getAllConsultant, getConsultant, getReviews}, dispatch)
}

const mapStateToProps = state => {
  return {
    user: state.user,
    consultant : state.consultant,
    
    singleConsultant: state.singleConsultant
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);

  
