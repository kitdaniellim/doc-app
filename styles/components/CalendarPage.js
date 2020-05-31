const Calendar = {

    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
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
  
    header_text: {
      paddingLeft: 10,
      fontSize: 10,
      color: '#8B8787',
    },
  
    scaffold: {
      flex: 9,
      padding: 10,
      backgroundColor: '#F5F5F5',
      alignSelf: 'stretch',
      justifyContent: 'center',
      marginBottom: 7,
    },
    
    // scaffold: {
    //   flex: 1,
    //   marginHorizontal: 4,
    //   padding: 10,
    //   borderRadius: 5,
    //   backgroundColor: '#F5F5F5',
    //   backgroundColor: 'yellow',
    //   alignSelf: 'stretch',
    //   marginBottom: 7,
    // },
  
    calendar_container: {
      paddingVertical: 5,
      paddingHorizontal: 20,
      backgroundColor: 'blue',
    },

    calendar_legend_container: {
      
      backgroundColor: 'red',
    }
  
  }
  
  export default Calendar;