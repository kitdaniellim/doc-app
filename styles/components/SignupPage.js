const SignUp = {
    container: {
        flex: 1,
        backgroundColor: '#D9E3FE',
    },

    forms_container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        marginHorizontal: 30,
        marginTop: 20,
        marginBottom: 60,
    },

    forms_scaffold: {
        flex: 1,
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginHorizontal: 10,
        marginVertical: 5,
        paddingTop: 14,
        paddingHorizontal: 18,
        backgroundColor: '#fff',
        borderRadius: 15,
    },

    forms_scaffold_text: {
        fontSize: 8,
        color: '#8B8787',
    },

    forms_scaffold_text_bold: {
        marginBottom: 10,
        fontSize: 48,
        fontWeight: '600',
        color: '#8B8787',
    },

    forms_scaffold_checkbox_container: {
        flexDirection: "row",
        marginBottom: 20,
        justifyContent: 'center',
        alignSelf: 'center'
    },

    forms_scaffold_checkbox: {
        alignSelf: "center",

    },

    forms_scaffold_checkbox_label: {
        margin: 4,
        fontSize: 11,
        color: '#8B8787',
        textAlign: 'center',
        alignSelf: "center",
        justifyContent: 'center'
    },

    forms_label_container: {
        marginVertical: 10,
    },

    forms_label: {
        color: '#fff',
        alignSelf: 'center',
        fontWeight: '500',
        letterSpacing: 1,
        marginBottom: 10,
    },

    forms_label_small_container: {
        marginTop: 8,
        marginBottom: 3,
        marginHorizontal: 12,
        padding: 4,
        alignSelf: 'stretch',
        justifyContent: 'center',
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },

    forms_label_small: {
        color: '#fff',
        justifyContent: 'flex-end',
        fontWeight: '400',
        fontSize: 12,
        letterSpacing: 1,
        marginTop: 15,
        marginBottom: 5,
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
        shadowOffset: { width: 0, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_textinput: {
        width: '90%',
        fontSize: 11,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
    },

    forms_bday_container: {
        height: 150,
        flexDirection: 'column',
        margin: 6,
        alignSelf: 'stretch',
        justifyContent: 'space-around'
    },

    forms_bday_label_container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 3,
        marginHorizontal: 5,
        marginTop: 10,
        marginBottom: 2,
        justifyContent: 'flex-start',
        alignSelf: 'stretch',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_bday_label: {
        width: '90%',
        fontSize: 11,
        paddingHorizontal: 5,
        marginHorizontal: 5,
        borderRadius: 20,
        backgroundColor: '#fff',
    },

    forms_bday_item_container: {
        borderRadius: 15,
        paddingHorizontal: 6,
        marginHorizontal: 15,
        marginVertical: 5,
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
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
        shadowOffset: { width: 0, height: 2, },
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
        shadowOffset: { width: 0, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_add_textinput_text_container: {
        margin: 4,
        flexDirection: 'row',
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
        marginVertical: 2,
    },

    forms_time_scaffold: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 10,
    },

    forms_timeinput_container: {
        flex: 3,
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignSelf: 'center',
        shadowOffset: { width: 0, height: 2, },
        shadowColor: 'black',
        shadowOpacity: 0.1,
    },

    forms_timeinput_textinput: {
        width: 30,
        textAlign: 'center',
        fontSize: 11,
        paddingVertical: 1,
        paddingHorizontal: 1,
        marginVertical: 5,
        marginHorizontal: 1,
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
        color: 'black',
        fontWeight: '600',
        fontSize: 9,
        paddingRight: 2,
        textAlign: 'center',
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
        marginTop: 8,
        height: 220
    }
}

export default SignUp;
