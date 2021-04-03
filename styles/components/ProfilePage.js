const Profile = {

  container: {
    flex: 1,
    backgroundColor: 'white',
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

  header_text_bold: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '700',
    color: '#8B8787',
    justifyContent: 'center',
  },

  header_text_container: {
    flex: 5,
    justifyContent: 'center',
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
    marginVertical: -15,
    marginHorizontal: 5,
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

  profile_b_info_header_justify: {
    fontSize: 11,
    color: '#8B8787',
    justifyContent: 'center',
    alignSelf: 'center'
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
    flexDirection: 'column',
    paddingHorizontal: 5,
  },

  profile_b_info_profileimg: {
    height: 70,
    width: 70,
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

  profile_hours_container: {
    flex: 1,
    marginVertical: 5,
    justifyContent: 'flex-start'
  },

  profile_hours_header: {
    fontSize: 11,
    color: '#8B8787',
  },

  profile_hours_details: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 8,
    marginVertical: 6,
    justifyContent: 'space-between'
  },

  profile_hours_details_innercontainer: {
    flex: 1,
    marginHorizontal: 8,
  },

  edit_button: {
    height: 60,
    backgroundColor: '#56EC65',
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 15,
    marginVertical: 10,
  },

  divider: {
    marginVertical: 5,
    borderTopColor: 'black',
    borderTopWidth: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  edit_button_label: {
    color: '#fff',
    fontSize: 23,
    letterSpacing: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },

  review_container: {
    flex: 1,
    marginVertical: 5,
    justifyContent: 'flex-start'
  },

  review_header: {
    fontSize: 11,
    color: '#8B8787',
  },

  review_details: {
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    justifyContent: 'center'
  },

  review_details_header: {
    flexDirection: 'row',
    height: 35,
    marginVertical: 5,
    justifyContent: 'space-between',
    alignSelf: 'stretch'
  },

  review_details_label: {
    fontWeight: '900',
    color: 'black',
  },

  review_details_text: {
    fontSize: 9,
    color: '#8B8787',
  },

  header_icon_container: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  forms_container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderRadius: 15,
    marginHorizontal: 6,
    backgroundColor: '#fff'
  },

  forms_label_small_container: {
    marginHorizontal: 8,
    padding: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },

  forms_label_small_container_edit: {
    marginHorizontal: 8,
    padding: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },

  forms_label_small: {
    color: '#fff',
    justifyContent: 'flex-end',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 15,
    marginBottom: 5,
  },

  forms_label_small_edit: {
    color: '#000',
    justifyContent: 'flex-end',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 15,
    marginBottom: 5,
  },

  forms_label_small_2: {
    color: '#000',
    justifyContent: 'flex-end',
    fontWeight: '400',
    fontSize: 12,
    letterSpacing: 1,
    marginTop: 15,
    marginBottom: 5,
  },

  forms_label_small_container_2: {
    marginTop: 8,
    marginBottom: 3,
    marginHorizontal: 12,
    padding: 4,
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderBottomColor: '#000',
    borderBottomWidth: 1,
  },

  forms_text_bold: {
    color: '#000',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },

  forms_timeinput_container: {
    flex: 3,
    flexDirection: 'row',
    borderRadius: 15,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
    alignSelf: 'center',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_dynamicinput_margin: {
    flex: 1
  },

  forms_editbio_container: {
    borderRadius: 15,
    backgroundColor: '#fff',
    padding: 5,
    justifyContent: 'center',
  },

  forms_add_textinput_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 13,
    marginHorizontal: 15,
  },

  forms_chooseimg_button_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 8,
    marginVertical: 8,
    height: 25,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_chooseimg_button_container_edit: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 8,
    marginVertical: 8,
    height: 25,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_chooseimg_button_text: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    color: '#8B8787',
    justifyContent: 'center',
    alignSelf: 'center',
    letterSpacing: 1,
  },

  forms_chooseimg_button_text_i: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    letterSpacing: 1,
  },

  forms_chooseimg_button_text_i_disabled: {
    fontSize: 11,
    fontWeight: '600',
    textAlign: 'center',
    color: '#FFFFFF80',
    justifyContent: 'center',
    alignSelf: 'center',
    letterSpacing: 1,
  },

  forms_add_textinput_button_container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 8,
    marginVertical: 4,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_add_textinput_button_container_i: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#19BAB9',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 10,
    marginVertical: 4,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_confirm_edit_profile: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#19BAB9',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginHorizontal: 50,
    marginTop: 4,
    marginBottom: 15,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    
  },

  forms_confirm_edit_profile_disabled: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    backgroundColor: '#19BAB980',
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 3,
    marginHorizontal: 50,
    marginTop: 4,
    marginBottom: 15,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_add_textinput_button_container_edit: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 8,
    marginVertical: 4,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: '#000',
    shadowOpacity: 0.1,
  },

  forms_add_textinput_text: {
    fontSize: 7,
    fontWeight: '600',
    textAlign: 'center',
    color: '#8B8787',
    justifyContent: 'center',
    alignSelf: 'center',
    letterSpacing: 1,
  },

  forms_add_textinput_text_edit: {
    fontSize: 7,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
    letterSpacing: 1,
  },

  forms_textinput_container: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
  },

  forms_textinput: {
    fontSize: 13,
    padding: 8,
    borderRadius: 20,
  },

  forms_textinput_container_2: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_textinput_container_4: {
    flex: 1,
    backgroundColor: '#ECECEC',
    padding: 5,
  },

  forms_textinput_2: {
    width: '90%',
    fontSize: 11,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#fff',
  },

  forms_textinput_container_3: {
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 5,
    marginVertical: 10,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_textinput_3: {
    width: '90%',
    fontSize: 11,
    paddingHorizontal: 5,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#ECECEC',
  },

  forms_add_textinput_container_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 13,
    marginHorizontal: 15,
  },

  forms_add_textinput_button_container_2: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginHorizontal: 8,
    marginVertical: 4,
    height: 30,
    justifyContent: 'center',
    alignSelf: 'stretch',
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
  },

  forms_add_textinput_text_2: {
    fontSize: 7,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
    justifyContent: 'center',
    alignSelf: 'center',
    letterSpacing: 1,
  },

  forms_button: {
    width: 130,
    height: 30,
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2, },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  forms_button_edit: {
    width: 130,
    height: 30,
    marginTop: 20,
    backgroundColor: '#ECECEC',
    borderRadius: 15,
    shadowOffset: { width: 0, height: 2, },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  forms_button_label: {
    color: '#8B8787',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },

  forms_button_label_edit: {
    color: '#000',
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 1,
    textAlign: 'center',
  },

  hide_button: {
    justifyContent: 'center',
    alignSelf: 'center'
  },

  hide_button_label: {
    justifyContent: 'center',
    textDecorationLine: 'underline',
    marginRight: 8,
  },

}

export default Profile;
