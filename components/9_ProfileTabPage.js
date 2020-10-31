import React, {Component} from 'react';
import { Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';
import { profileStyles, globalStyles } from '../styles/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  getConsultant } from '../actions/users';

class ProfileTab extends React.Component {
  
  constructor(props){
    super(props);

  
  }
  // async componentDidMount() {
  //   //this.addLocation();
  //   console.log("paku1 ");
  //   alert("FUCK YOU");
  //   console.log(this.props.route.params.uid.name)
  //   this.props.getConsultant(this.props.route.params.uid.name);
  // }
  
  Edit = (uid) => {
    //const navigation = this.props.navigation;
    if(uid){
      this.props.getConsultant(uid);
      this.props.navigation.navigate('EditProfile_1');
      console.log("CLICKED EDIDT");
    }
  
  } 
  
  List({items, fallback}){
    if(!items || items.length === 0){
      return fallback
    }else{
      return items.map( item => {
        return <View style={profileStyles.profile_hours_details}>
                <Text> {items.office_location} {"\n"}
                        {item.office_hour_from} - {item.office_hour_to}
                        
                </Text>
              </View>
      })
    }

  }

  componentDidMount(){

  }
  render(){
    const consultant = this.props.singleConsultant;

    // DOES NOT WORK IN MOBILE BUT WORKS IN WEB
    // var office_details = _.keyBy(this.props.singleConsultant.office_details,'id');
    // var office = _.values(office_details);
    // var reviews_details = _.keyBy(this.props.singleConsultant.userReviews,'id');
    // var reviews = _.values(reviews_details);

    //START OF CHANGES - October 3 - 2020
    var office = Array.from(consultant.office_details);
    var reviews = consultant.userReviews;
    //END OF CHANGES - October 3 - 2020
  
    return (
      
    <View style={profileStyles.container}>
         
    <View style={profileStyles.header_container}>
 <View style={profileStyles.header_text_container}>
 <Text style={profileStyles.header_text_bold}>MY PROFILE: {consultant.fullName} USER: { this.props.user.fullName} </Text>
 </View>
</View>
<View style={profileStyles.scaffold}>
 <View style={profileStyles.profile_container}>
   <ScrollView
     showsVerticalScrollIndicator={false}
     contentContainerStyle={{
       padding: 14,
       marginTop: 10,
       borderRadius: 15,
       backgroundColor: '#fff',
     }}
   >
     <View style={profileStyles.profile_officeimg_container}>
       <Image
         source={{uri:consultant.officeImage}}
         style={profileStyles.profile_officeimg}
       />
     </View>
     <View style={profileStyles.profile_b_info_container}>
       <Text style={profileStyles.profile_b_info_header}>Basic Information</Text>
       <View style={profileStyles.profile_b_info_details_container}>
         <View style={profileStyles.profile_b_info_profileimg_container}>
           <Image
             source={{uri:consultant.profilePicture}} 
             style={profileStyles.profile_b_info_profileimg}
           />
         </View>
         <View style={profileStyles.profile_b_info_details}>
           <Text >
             Specialty: {consultant.userSpecialty} {"\n"}
             Name: {consultant.fullName} {"\n"}
             Email: {consultant.email}{"\n"}
             Mobile Number: {consultant.mobileNumber}
           </Text>
         </View>
       </View>
     </View>
     <View style={profileStyles.profile_rating_container}>
       <Text style={profileStyles.profile_rating_header}>Overall Rating</Text>
       <View style={profileStyles.profile_rating_details}>
         <StarRating
           disabled={true}
           maxStars={5}
           rating={4}
           selectedStar={() => { }}
           fullStarColor='#FDBB3B'
           starSize={12}
           starStyle={{}}
         />
       </View>
     </View>
     <View style={profileStyles.profile_hours_container}>
       <Text style={profileStyles.profile_hours_header}>Office Hours</Text>
       <View style={profileStyles.divider} />
        {
          office.map((data) => {
            return (
              <View style={profileStyles.profile_hours_details}>
                <Text>
                  {data.office_location}{"\n"}
                  {data.office_hour_from} - {data.office_hour_to}
                  </Text>
                  <Text>Days: </Text>
               { data.office_day.map((data1) => {
                return(
                 <Text key={data.uid}>{data1}</Text> 
                  
                )
                 
                
              })}
              
              </View>

              
            )
          })
        }
      {/* <Text>  {this.props.singleConsultant.office_details[0].office_day[0]}</Text> */}
    
      {/* { Object.keys(this.props.singleConsultant.office_details).map(function(s){
        return  this.props.singleConsultant.office_details[s].map((data) => {
          <Text> {data.office_day} </Text>
        })
          
        
    })} */}
    {/* {
      this.props.singleConsultant.office_details.map((data) => {
        return Object.keys(data.office_day).map((data1) => {
          <Text>{data1}</Text>
        })
      })
    } */}
      
     </View>
     <View style={profileStyles.divider} />
     { this.props.user.fullName === consultant.fullName ?  <TouchableOpacity
       activeOpacity={0.6}
       style={profileStyles.edit_button}
       onPress={() => this.Edit(consultant.uid)}
     >
       <Text style={profileStyles.edit_button_label}>Edit Profile</Text>
     </TouchableOpacity> :   <TouchableOpacity
                activeOpacity={0.6}
                style={profileStyles.edit_button}
                // onPress={}
              >
                <Text style={profileStyles.edit_button_label}>BOOK</Text>
              </TouchableOpacity> }
          
     <View style={profileStyles.review_container}>
       <Text style={profileStyles.review_header}>Reviews</Text>
       {
         reviews.map((data) => {
            return(
              <View style={profileStyles.review_details}>
              <View style={profileStyles.review_details_header}>
                <Text style={profileStyles.review_details_label}>By {data.reviewer_name}</Text>
                <View style={{ alignSelf: 'flex-start' }}>
                  <StarRating
                    disabled={true}
                    maxStars={5}
                    rating={data.rating}
                    selectedStar={() => { }}
                    fullStarColor='#FDBB3B'
                    starSize={12}
                    starStyle={{ marginRight: 5 }}
                  />
                </View>
              </View>
              <Text style={profileStyles.review_details_text}>
              {data.comment}
              </Text>
            </View>
      
            )
         })
       }
    
      
     </View>
   </ScrollView>
 </View>
</View>
</View>

    );
 }
}


const mapDispatchToProps = dispatch => {
  return bindActionCreators({ getConsultant}, dispatch)
}
const mapStateToProps = state => {
	return {
    user : state.users,
    consultant: state.users,
    singleConsultant: state.users
  	}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileTab);
