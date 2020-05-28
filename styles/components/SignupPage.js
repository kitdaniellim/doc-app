const SignUp = {
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

    forms_scaffold: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 14,
        backgroundColor: '#fff',
        borderRadius: 15,
    },

    forms_scaffold_text: {
        justifyContent: 'flex-start',
        fontSize: 8,
        color: '#8B8787',
    },

    forms_scaffold_text_bold: {
        marginBottom: 10,
        justifyContent: 'flex-start',
        fontSize: 130,
        fontWeight: '600',
        color: '#8B8787',
    },

    forms_label_container: {
        marginBottom: 12,
    },

    forms_label: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '500',
        letterSpacing: 1,
    },

    forms_label_small: {
        marginTop: 12,
        marginHorizontal: 12,
        color: '#fff',
        alignSelf: 'stretch',
        justifyContent: 'flex-end',
        fontWeight: '400',
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
        marginHorizontal: 5,
        marginVertical: 10,
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
        width: '100%',
        backgroundColor: '#fff',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_bday_item_divider: {
        color: '#fff',
        fontWeight: '500', 
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
    },

    forms_button: {
        width: 130,
        height: 30,
        marginTop: 20,
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
        justifyContent: 'center',
        alignSelf: 'center',
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
        textAlign: 'center',
        marginTop: 20,
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
        fontSize: 12,
        fontWeight: '600',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    forms_add_textinput_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 13,
        marginHorizontal: 15,
    },

    forms_add_textinput_button_container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginHorizontal: 8,
        marginVertical: 4,
        justifyContent: 'center',
        alignSelf: 'stretch',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_add_textinput_text: {
        fontSize: 7,
        fontWeight: '600',
        textAlign: 'center',
        color: '#8B8787',  
        justifyContent: 'center',
        alignSelf: 'center',
        letterSpacing: 1, 
    },

    forms_time_container: {
        flex: 1, 
        flexDirection: 'column',
        marginVertical: 4,
    },

    forms_time_scaffold: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 30,
    },

    forms_timeinput_container: {
        flex: 4,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowOffset:{  width: 0,  height: 2,  },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_timeinput_textinput: {
        width: '100%',
        textAlign: 'center',
        fontSize: 11,
        paddingVertical: 3,
        paddingHorizontal: 3,
        marginVertical: 5,
        marginHorizontal: 5,
    },

    forms_timeinput_divider: {
        flex: 1,
        marginHorizontal: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },

    forms_time_label_container: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 0,
        padding: 2,
        borderLeftWidth: 1,
        borderLeftColor: '#8B8787',
    },

    forms_time_label: {
        width: '100%',
        color: 'black',
        fontWeight: '600',
        fontSize: 9,
        paddingRight: 2,
        textAlign:'center',
        marginVertical: 5,
        marginRight: 5,
    },

    forms_text_bold_alt: {
        color: 'black',
        fontSize: 11,
        fontWeight: '500',
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 0,
    },

    forms_dynamicinput_margin: {
        marginTop: 18
    }
  }
  
  export default SignUp;