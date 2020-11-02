const Appointment = {

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
  },

  header_container: {
    marginTop: 10
  },

  header_text: {
    fontSize: 24,
    color: '#8B8787',
  },

  header_text_bold: {
    fontSize: 11,
    color: '#8B8787',
  },

  scaffold: {
    flex: 9,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#F5F5F5',
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginBottom: 7,
  },

  scaffold_list_container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    margin: 8,
    alignSelf: 'stretch',
  },

  scaffold_list_item_container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 8,
  },

  scaffold_list_item_header: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '100',
    color: '#8B8787',
  },

  scaffold_list_item_data: {
    fontSize: 12,
    color: '#8B8787',
  },

  scaffold_list_item_data_container: {
    backgroundColor: '#DCB246',

  },

  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
  },

  formView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  picker: {
    height: 50,
    width: 350,
    alignSelf: 'stretch',
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
  },

  textInput: {
    paddingVertical: 2,
    paddingLeft: 4,
    backgroundColor: "white",
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
  },

  calendarPicker: {
    paddingVertical: 2,
    paddingLeft: 4,
    backgroundColor: "white",
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
  },

  selectedDate: {
    borderTopColor: 'black',
    borderTopWidth: 1,
  },

  submitButton: {
    height: 100,
    marginTop: 16
  }

}

export default Appointment;