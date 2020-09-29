const ForgotPassword = {
    container: {
        flex: 1,
        backgroundColor: '#D9E3FE',
    },
    
    scaffold: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginHorizontal: 70,
        marginVertical: 40,
    },

    scaffold_text: {
        color: '#fff',
        fontSize: 11,
        lineHeight: 25,
        fontWeight: '500',
        textAlign: 'center',
    },

    scaffold_textinput_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        margin: 10,
        marginTop: 40,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    scaffold_textinput: {
        fontSize: 11,
        paddingHorizontal: 5,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: '#fff',  
    },

    button: {
        width: 130,
        height: 30,
        marginVertical: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    button_label: {
        color: '#8B8787',
        fontSize: 9,
        fontWeight: '600', 
        letterSpacing: 1, 
        textAlign: 'center',
    },

  }
  
  export default ForgotPassword;