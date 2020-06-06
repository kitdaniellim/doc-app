const Calendar = {

    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
    },
  
    header_container: {
      flexDirection: 'row',
      height: 40,
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
      borderBottomColor: '#8B8787',
      borderBottomWidth: 1
    },

    header_text_container: {
      flex: 5,
      justifyContent: 'center',
    },
  
    header_text_bold: {
      paddingLeft: 10,
      fontSize: 11,
      color: '#8B8787',
      justifyContent: 'center',
    },
  
    header_text: {
      paddingLeft: 10,
      fontSize: 10,
      color: '#8B8787',
    },

    header_icon_container: {
      flex: 1, 
      alignItems: 'flex-end', 
      justifyContent: 'center', 
    },

    scaffold: {
      flex: 1,
      padding: 10,
      backgroundColor: '#ECECEC',
      alignSelf: 'stretch',
      justifyContent: 'flex-start',
    },
    
    calendar_container: {
      height: 330,
      paddingVertical: 5,
      paddingHorizontal: 20,
      marginTop: 15,
      marginBottom: 18,
      borderRadius: 15,
      backgroundColor: '#fff',
    },

    calendar_legend_container: {
      marginVertical: 8,
      borderRadius: 15,
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: '#fff',
    },

    calendar_legend_label: {
      fontSize: 11,
      fontWeight: '300',
      color: '#8B8787'
    },

    calendar_legend_text_container: {
      marginVertical: 5,
      flexDirection: 'row',
    },

    calendar_legend_text: {
      fontSize: 11,
      color: '#8B8787',
      marginLeft: 8,
    },

    calendar_legend_finished_hue: {
      height: 14,
      width: 14,
      backgroundColor: '#56EC65'
    },

    calendar_legend_upcoming_hue: {
      height: 14,
      width: 14,
      backgroundColor: '#FCD034'
    },

    date_container: {
      flex: 1,
      marginTop: 10,
      marginBottom: 30,
      marginHorizontal: 15,
    },

    date_header_container: {
      height: 40,
      backgroundColor: '#fff',
      borderRadius: 15,
      marginBottom: 15,
      padding: 5,
      paddingLeft: 8,
      justifyContent: 'center'
    },

    date_header_text: {
      color: '#8B8787',
      fontSize: 12,
      letterSpacing: 1,
      margin: 2,
      justifyContent: 'center',
    },

    date_details_container: {
      backgroundColor: '#fff',
      borderRadius: 15,
      padding: 5,
      paddingHorizontal: 8,
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginBottom: 35,
    },

    date_details_header: {
      color: '#8B8787',
      fontSize: 12,
      letterSpacing: 1,
      margin: 2,
      marginBottom: 3,
      justifyContent: 'center',
    },

    date_details_scaffold: {
      flexDirection: 'row',
      borderRadius: 5,
      backgroundColor: '#ECECEC',
      marginHorizontal: 5,
      marginVertical: 15,
      padding: 5,
    },
    
    date_details_text_container: {
      flex: 0.6,
      flexDirection: 'row',
      padding: 5,
    },

    date_details_text: {
      flexWrap: 'wrap',
      fontSize: 13,
      lineHeight: 28,
      color: 'black'
    },

    date_details_button_container: {
      flex: 0.4,
      justifyContent: 'center',
      alignSelf: 'center',
    },


    date_details_button_pending: {
      height: 30,
      backgroundColor: '#FDBB3B',
      borderRadius: 15,
      padding: 5,
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginHorizontal: 9,
    },

    date_details_button_review: {
      height: 30,
      backgroundColor: '#56EC65',
      borderRadius: 15,
      padding: 5,
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginHorizontal: 9,
    },

    date_details_button_reviewed: {
      height: 30,
      backgroundColor: '#56EC6580',
      borderRadius: 15,
      padding: 5,
      justifyContent: 'center',
      alignSelf: 'stretch',
      marginHorizontal: 9,
    },

    date_details_button_label_pending: {
      color: '#fff',
      fontSize: 12,
      justifyContent: 'center',
      alignSelf: 'center'
    },

    date_details_button_label_review: {
      color: '#fff',
      fontSize: 12,
      justifyContent: 'center',
      alignSelf: 'center'
    },

    date_details_button_label_reviewed: {
      color: '#fff',
      fontSize: 12,
      justifyContent: 'center',
      alignSelf: 'center'
    },
  
  }
  
  export default Calendar;