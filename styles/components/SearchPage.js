const Search = {

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
    // borderBottomColor: '#8B8787',
    // borderBottomWidth: 1
  },
  
  header_text_container: {
    width: 50,
    justifyContent: 'center',
  },

  header_search_container: {
    flex: 1,
    justifyContent: 'center',
    // borderBottomColor: '#8B8787',
    // borderBottomWidth: 1,
  },

  header_text: {
    fontSize: 10,
    color: '#8B8787',
  },

  header_text_bold: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '700',
    color: '#8B8787',
    justifyContent: 'center',
  },

  scaffold: {
    flex: 1,
    paddingHorizontal: 15,
    margin: 0,
    backgroundColor: '#ECECEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  filter_container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    borderBottomColor: '#8B878780',
    borderBottomWidth: 1,
  },

  filter_label_container: {
    width: 80,
    justifyContent: 'center'
  },

  filter_label: {
    paddingLeft: 10,
    fontSize: 12,
    fontWeight: '500',
    color: '#8B8787',
    justifyContent: 'center',
    marginTop: 5,
    marginBottom: 8
  },

  filter_icon: {
    color: '#8B8787',
    justifyContent: 'center',
    marginRight: 10,
    marginLeft: 22,
    paddingTop: 3,
  },

  filter_options_container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  filter_options_button: {
    // borderColor: '#8B8787',
    // borderWidth: 1,
    height: 25,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 4
  },

  filter_options_button_lit: {
    backgroundColor: '#19BAB9',
    height: 25,
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    justifyContent: 'center',
    marginRight: 8,
    marginBottom: 4
  },

  scaffold_list_container: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 15,
    margin: 8,
    alignSelf: 'stretch',
  },
  
  scaffold_list_item_container: {
    borderRadius: 10,
    paddingVertical: 8,
  },

  scaffold_list_item_header: {
    fontSize: 14,
    marginBottom: 5,
    fontWeight: '100',
    color: '#8B8787',
    paddingLeft: 8
  },
  
  scaffold_list_item_data: {
    fontSize: 15,
    margin: 8,
    color: '#8B8787',
    justifyContent: 'center'
  },

  scaffold_list_item_img: {
    height: 75,
    width: 75,
    marginRight: 5,
  },

  scaffold_list_item_data_container: {
    backgroundColor: '#DCB246',

  },

  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
  },

}

export default Search;