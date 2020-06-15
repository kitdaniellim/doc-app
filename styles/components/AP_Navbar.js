const Navbar = {
  navBar: {
    height: 35,
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },

  navBarItem: {
    flex: 1,
    backgroundColor: '#19BAB9',
    justifyContent: 'center'
  },

  icon: {
    color: 'white',
    textAlign: 'center',
    margin: 4,
  },

  appointment_button: {
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    marginEnd: 10,
    padding: 10,
  },

  button_text: {
    color: '#19BAB9',
    fontWeight: 'bold'
  }

}

export default Navbar;