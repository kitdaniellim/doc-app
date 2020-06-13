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
    borderBottomColor: '#8B8787',
    borderBottomWidth: 1
  },
  
  header_text_container: {
    flex: 5,
    justifyContent: 'center',
  },

  header_text: {
    fontSize: 10,
    color: '#8B8787',
  },

  header_text_bold: {
    paddingLeft: 10,
    fontSize: 11,
    color: '#8B8787',
    justifyContent: 'center',
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

}

export default Search;