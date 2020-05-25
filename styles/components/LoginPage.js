const Login = {
    container: {
        flex: 1,
        backgroundColor: '#D9E3FE',
    },
    
    forms_container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginHorizontal: 50,
        marginTop: 20,
        marginBottom: 60,
    },

    forms_label: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '500',
        letterSpacing: 1,
        fontSize: 12,
    },

    forms_textinput_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginVertical: 10,
        marginHorizontal: 5,
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
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#fff',  
    },

    forms_button_container: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },

    forms_button: {
        width: 130,
        height: 30,
        margin: 5,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,

        justifyContent: 'center',
    },

    forms_button_label: {
        color: '#8B8787',
        fontSize: 9,
        fontWeight: '600', 
        letterSpacing: 1,  
        textAlign: 'center',
    },

    forms_text: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '500',
        margin: 5,
    },

    forms_text_underline: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '500',
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
        textDecorationColor: "#fff",
    },

    forms_text_bold: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
    }

  }
  
  export default Login;