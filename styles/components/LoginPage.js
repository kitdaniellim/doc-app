const Login = {
    container: {
        flex: 1,
        backgroundColor: '#D9E3FE',
    },
    
    forms_container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginHorizontal: 100,
        marginVertical: 40,
    },

    forms_label: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: 500,
        letterSpacing: 1,
    },

    forms_textinput_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        margin: 10,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_textinput: {
        fontSize: 11,
        width: '100%',
        paddingHorizontal: 5,
        marginHorizontal: 10,
        borderRadius: 20,
        backgroundColor: '#fff',  
    },

    forms_button_container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
    },

    forms_button: {
        width: 200,
        height: 30,
        margin: 5,
        
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        textAlign: 'center',
        justifyContent: 'center',
    },

    forms_button_label: {
        color: '#8B8787',
        fontSize: 9,
        fontWeight: 600, 
        letterSpacing: 1,  
    },

    forms_text: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 500,
        margin: 5,
    },

    forms_text_underline: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 500,
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#fff",
    },

    forms_text_bold: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 600,
        textAlign: 'center',
        marginTop: 10,
    }

  }
  
  export default Login;