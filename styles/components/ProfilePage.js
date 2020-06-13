const Profile = {

    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
    },
  
    header_container: {
      height: 40,
      alignSelf: 'stretch',
      justifyContent: 'center',
      borderBottomColor: '#8B8787',
      borderBottomWidth: 1
    },
  
    header_text_bold: {
      paddingLeft: 10,
      fontSize: 11,
      color: '#8B8787',
    },
  
    scaffold: {
      flex: 1,
      padding: 15,
      margin: 0,
      backgroundColor: '#ECECEC',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },

    profile_container: {
      flex: 1,
      marginVertical: -10,
      marginHorizontal: 4,
      justifyContent: 'center',
      alignSelf: 'stretch'
    },

    profile_officeimg_container: {
      justifyContent: 'center',
      alignSelf: 'center',
      marginVertical: 5,
    },
  
    profile_officeimg: {
      height: 160, 
      width: 290,
    },

    profile_b_info_container: {
      flex: 1,
      marginVertical: 5,
      justifyContent: 'flex-start'
    },

    profile_b_info_header: {
      fontSize: 11,
      color: '#8B8787',
    },

    profile_b_info_details_container: {
      flexDirection: 'row',
      backgroundColor: '#ECECEC',
      borderRadius: 15,
      padding: 10,
      marginTop: 5,
    },

    profile_b_info_profileimg_container: {
      margin: 4,
    },

    profile_b_info_details: {
      marginLeft: 4,
    },
    
    profile_b_info_profileimg: {
      height: 80, 
      width: 80,
    },

    profile_rating_container: {
      flex: 1,
      marginVertical: 5,
      justifyContent: 'flex-start'
    },

    profile_rating_header: {
      fontSize: 11,
      color: '#8B8787',
    },

    profile_rating_details: {
      backgroundColor: '#ECECEC',
      borderRadius: 15,
      paddingVertical: 10,
      paddingHorizontal: 80,
      marginTop: 5,
      justifyContent: 'center'
    },

  }
  
  export default Profile;