const SignUp = {
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

    forms_label_small: {
        marginTop: 12,
        marginHorizontal: 12,
        color: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        fontWeight: 400,
        fontSize: 12,
        letterSpacing: 1,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },

    forms_textinput_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        margin: 8,
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

    forms_bday_container: {
        flexDirection: 'row',
        margin: 8,
        alignSelf: 'stretch',
        
    },

    forms_bday_label_container: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 7,
        alignSelf: 'stretch',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_bday_label: {
        fontSize: 9,
        width: '100%',
        paddingHorizontal: 10,
        borderRadius: 15,
        color: '#8B8787',
        alignSelf: 'center',
        justifyContent: 'flex-start',
    },

    forms_bday_item_container: {
        flex: 2,
        borderRadius: 15,
        paddingHorizontal: 6,
        paddingVertical: 3,
        marginHorizontal: 3,
        textAlign: 'center',
        fontSize: 9,
        width: '100%',
        backgroundColor: '#fff',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_bday_item_divider: {
        color: '#fff',
        fontWeight: 500, 
    },

    forms_bday_textinput: {
        fontSize: 10,
        width: '100%',
        paddingHorizontal: 3,
        marginHorizontal: 5,
        borderRadius: 15,
        backgroundColor: '#fff', 
    },

    forms_button_container: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },

    forms_button: {
        width: 200,
        height: 30,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
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
        textAlign: 'center',
        marginTop: 20,
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
        fontSize: 13,
        fontWeight: 600,
        textAlign: 'center',
    }

  }
  
  export default SignUp;