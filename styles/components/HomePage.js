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

  scaffold: {
    flex: 10,
    margin: 0,
    backgroundColor: '#ECECEC',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },

  scaffold_list_container: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    alignSelf: 'stretch',
  },

  scaffold_vlist_item_container: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 8,
    // backgroundColor: '#FDBB3B',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },

  scaffold_vlist_item_header_container: {
    flex: 1,
    paddingVertical: 2, 
    marginVertical: 2,
  },

  scaffold_vlist_item_header_container_2: {
    flex: 1,
    paddingVertical: 2, 
    marginVertical: 2,
  },

  scaffold_vlist_item_header: {
    fontSize: 17,
    marginBottom: 5,
    paddingLeft: 8,
    letterSpacing: 0.2,
    fontWeight: '600',
    color: '#000',
  },

  scaffold_vlist_item_header_2: {
    fontSize: 12,
    marginBottom: 5,
    paddingLeft: 5,
    letterSpacing: 0.5,
    fontWeight: '300',
    color: 'gray',
    textAlign: 'right',
    marginRight: 10,
    textDecorationLine: 'underline'
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

  // scaffold_hlist_item_box_id: {
  //   color: '#000',
  //   justifyContent: 'center',
  //   alignSelf: 'center',
  //   marginHorizontal: 5,
  // },

  scaffold_hlist_item_box_content: {
    flexDirection: 'column',
    marginHorizontal: 8,
    justifyContent: 'center',
    alignSelf: 'center',
  },

  scaffold_hlist_item_box_image_container: {
    
  },

  scaffold_hlist_item_box_image: {
    height: 100, 
    width: 100
  },
  
  scaffold_hlist_item_box_name: {
    color: '#000',
    textAlign: 'left',
    fontWeight: '200',
    flexWrap: 'wrap'
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