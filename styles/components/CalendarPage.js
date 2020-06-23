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

  header_confirmall_container: {
    flex: 1.6,
    alignItems: 'center',
    justifyContent: 'center',
  },

  header_confirmall_text: {
    fontSize: 12,
    color: '#8B8787',
    justifyContent: 'center',
    textAlign: 'center'
  },

  scaffold: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ECECEC',
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
  },

  calendar_container: {
    height: 320,
    paddingVertical: 2,
    paddingHorizontal: 2,
    marginTop: 15,
    marginBottom: 18,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#fff',
  },

  calendar_legend_container: {
    marginVertical: 8,
    marginHorizontal: 12,
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
    marginVertical: 5,
    marginHorizontal: 15,
  },

  date_header_container: {
    height: 40,
    borderRadius: 15,
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
  },

  date_details_header: {
    color: '#8B8787',
    fontSize: 12,
    letterSpacing: 1,
    margin: 2,
    justifyContent: 'center',
  },

  date_details_scaffold: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#ECECEC',
    marginHorizontal: 5,
    marginBottom: 15,
    marginTop: -5,
    padding: 5,
  },

  date_details_text_container: {
    flex: 0.6,
    padding: 5,
  },

  date_details_text: {
    flexWrap: 'wrap',
    fontSize: 13,
    lineHeight: 28,
    color: 'black'
  },

  date_details_button_download_container: {
    marginRight: 5,
    marginVertical: 4,
  },

  date_details_button_download_icon: {
    
  },

  date_details_button_download_label: {
    color: '#12345690',
    textDecorationLine: 'underline'
  },

  date_details_button_container: {
    flex: 0.4,
    justifyContent: 'center',
    alignSelf: 'center',
  },


  date_details_button_pending: {
    height: 30,
    backgroundColor: '#FDBB3B80',
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

  date_details_button_label: {
    color: '#fff',
    fontSize: 12,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  date_details_button_icon: {
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  date_details_button_confirm: {
    height: 30,
    width: 40,
    backgroundColor: '#56EC65',
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 9,
  },

  date_details_button_decline: {
    height: 30,
    width: 40,
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 9,
  },

  date_details_button_confirmed: {
    height: 30,
    backgroundColor: '#56EC6580',
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 9,
  },

  date_details_button_notify: {
    height: 30,
    backgroundColor: '#56EC65',
    borderRadius: 15,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 9,
    marginTop: 5
  },

  review_container: {
    flex: 2,
    marginTop: 20,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 8,
  },

  review_details_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    marginTop: 3,
    marginBottom: 5,
    marginHorizontal: 10,
  },

  review_details_header: {
    color: '#8B8787',
    fontSize: 12,
    letterSpacing: 1,
    marginVertical: 3,
    justifyContent: 'center',
  },

  review_details_submit_button: {
    height: 24,
    width: 80,
    backgroundColor: '#56EC65',
    borderRadius: 5,
    padding: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },

  review_textinput_container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    marginHorizontal: 4,
  },

  review_textinput: {
    fontSize: 13,
    padding: 4,
    borderRadius: 20,
    height: '100%',
    textAlignVertical: 'top'
    
  },

  modal_container: {
    flexDirection: 'column',
    height: 160,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden',
  },

  modal_container_top: {
    flex: 3,
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },

  modal_textinput_container: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginVertical: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  modal_textinput: {
    alignSelf: 'stretch',
    fontSize: 11,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    borderColor: 'black',
    borderWidth: 1,
  },

  modal_container_bottom: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  modal_button_container_cancel: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderColor: 'black',
    borderWidth: 0.5,
  },

  modal_button_container_notify: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignSelf: 'stretch',
    borderTopColor: 'black',
    borderWidth: 0.5,
  },

  modal_notif_bold: {
    color: 'black',
    fontSize: 17,
    fontWeight: '900',
    textAlign: 'center',
  },

  modal_notif: {
    color: 'black',
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
  },

  modal_button_label: {
    color: '#19BAB990',
    fontSize: 17,
    fontWeight: '500',
    letterSpacing: 1,
    textAlign: 'center',
  },

  modal_button_label_bold: {
    color: '#19BAB9',
    fontSize: 17,
    fontWeight: '900',
    letterSpacing: 1,
    textAlign: 'center',
  },


}

export default Calendar;