const Home = {

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

  header_text: {
    paddingLeft: 10,
    fontSize: 10,
    color: '#8B8787',
  },

  scaffold: {
    flex: 10,
    padding: 10,
    margin: 0,
    backgroundColor: '#ECECEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  scaffold_list_container: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 15,
    margin: 10,
    alignSelf: 'stretch',
  },

  scaffold_vlist_item_container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#FDBB3B',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  scaffold_vlist_item_header: {
    fontSize: 14,
    marginBottom: 5,
    paddingLeft: 5,
    letterSpacing: 0.5,
    fontWeight: '300',
    color: '#fff',
  },

  scaffold_hlist_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },


  scaffold_hlist_item_container: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  scaffold_hlist_item_box_container: {
    flexDirection: 'row'
  },

  scaffold_hlist_item_box_id: {
    color: '#fff',
    justifyContent: 'center',
    alignSelf: 'center',
    marginHorizontal: 5,
  },

  scaffold_hlist_item_box_content: {
    flexDirection: 'column',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  scaffold_hlist_item_box_image_container: {
    borderColor: '#fff',
    borderWidth: 1,
  },

  scaffold_hlist_item_box_image: {
    height: 60, 
    width: 80
  },
  
  scaffold_hlist_item_box_name: {
    color: '#fff',
    textAlign: 'center'
  },


  scaffold_list_item_data_container: {
    backgroundColor: '#DCB246',
    justifyContent: 'center',
  },

  divider: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    alignSelf: 'stretch',
  },

}

export default Home;