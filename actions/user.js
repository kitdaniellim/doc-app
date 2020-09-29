/* Implementing user events in Redux.
/* Programmer: Eldrin Jake Augusto 
/* Date: May 2020 */
// import Firebase, { db } from '../App.js'
import Firebase, { db } from '../config/Firebase'
import React, { useState } from 'react';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_FULL_NAME = 'UPDATE_FULL_NAME';
export const UPDATE_MOBILE_NUMBER = 'UPDATE_MOBILE_NUMBER';
export const UPDATE_BIRTH_DAY = 'UPDATE_BIRTH_DAY';
export const UPDATE_USER_TYPE = 'UPDATE_USER_TYPE';
export const UPDATE_USER_LIC = 'UPDATE_USER_LIC';
export const UPDATE_USER_SPECIALTY = 'UPDATE_USER_SPECIALTY';
export const UPDATE_USER_SUB_SPECIALTY = 'UPDATE_USER_SUB_SPECIALTY';
export const UPDATE_OFFICE_LOCATION = 'UPDATE_OFFICE_LOCATION';
export const UPDATE_OFFICE_HOURS = 'UPDATE_OFFICE_HOURS';
export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';




/* DEV: EJA - Event for updating email */
export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: email
    }
}

/* DEV: EJA - Event for updating password */
export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: password
    }
}

/* DEV: EJA - Event for updating full name */
export const updateFullName = fullName => {
    return {
        type: UPDATE_FULL_NAME,
        payload: fullName
    }
}

/* DEV: EJA - Event for updating mobileNumber */
export const updateMobileNumber = mobileNumber => {
    return {
        type: UPDATE_MOBILE_NUMBER,
        payload: mobileNumber
    }
}

/* DEV: EJA - Event for updating birthday */
export const updateBirthDay = birthday => {
    return {
        type: UPDATE_BIRTH_DAY,
        payload: birthday
    }
}

/* DEV: EJA - Event for updating user type*/
export const updateUserType = userType => {
    return {
        type: UPDATE_USER_TYPE,
        payload: userType
    }
}

/* DEV: EJA - Event for updating consultant specialty*/
export const updateUserSpecialty = userSpecialty => {
    return {
        type: UPDATE_USER_SPECIALTY,
        payload: userSpecialty
    }
}

/* DEV: EJA - Event for updating consultant sub specialty*/
export const updateUserSubSpecialty = userSubSpecialty => {
    return {
        type: UPDATE_USER_SUB_SPECIALTY,
        payload: userSubSpecialty
    }
}


/* DEV: EJA - Event for updating consultant LIC*/
export const updateUserLIC = userLIC => {
    return {
        type: UPDATE_USER_LIC,
        payload: userLIC
    }
}

/* DEV: EJA - Event for updating consultant office location*/
export const updateUserOfficeLocation = userOfficeLocation => {
    return {
        type: UPDATE_USER_OFFICE_LOCATION,
        payload: userOfficeLocation
    }
}

/* DEV: EJA - Event for updating consultant office hours*/
export const updateOfficeHours = officeHours => {
    return {
        type: UPDATE_OFFICE_HOURS,
        payload: officeHours
    }
}

/* DEV: EJA - Event for login*/
export const login = () => {
    return async (dispatch, getState) => {
        try {
            
            const { email, password } = getState().user
            console.log(email);
            console.log(password);
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            //console.log("response")
            //console.log(response.user.uid);
            dispatch(getUser(response.user.uid))
          
        } catch (e) {
            alert(e);
        }
    }
}
export const getUser = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('users')
				.doc(uid)
				.get()

                //console.log("sa get user ni")
                //console.log(user.data());
                //console.log(uid);
			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}


export const getUrl = async () => 
{
    
     const url = await Firebase.storage().ref('users/default/default.jpg').getDownloadURL().catch((error) => {alert("error sa geturl")})
     //console.log("MAO NI SA GETURL");
     //console.log(url);
    return url;
}
/* DEV: EJA - Event for sign up*/
export const signup = () => {

    return async (dispatch, getState) => {
        try {
            const { email, password, fullName, mobileNumber, birthDay, userType } = getState().user
                   
            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)

            if (response.user.uid){
                const getUser = getState().user.userType;
                // if (getUser === "CLIENT")
                // {
                    const user = {
                        uid: response.user.uid,
                        email: email,
                        emailVerified: false,
                        userType: userType,
                        fullName: fullName,
                        mobileNumber: mobileNumber,
                        birthDay: birthDay,
                        userType: userType,
                        profilePicture: await Firebase.storage().ref('users/default/default.jpg').getDownloadURL().catch((error) => {alert("error sa geturl")}),
                        officeImage: await Firebase.storage().ref('users/default/office.jpg').getDownloadURL().catch((error) => {alert("error sa geturl")})
                    }
                    db.collection('users').doc(response.user.uid).set(user);
                    dispatch({ type: SIGNUP, payload: response.user })
                // }

          
            }
            
        } catch (e) {
            alert(e)
        }
    }
}

/*Default profile pics */
export const display_default_pic = () =>
{

}

export const getReviews = uid => {
	return async (dispatch, getState) => {
		try {
			const user = await db
				.collection('reviews')
				.doc(uid)
				.get()

                //console.log("sa get user ni")
                //console.log(user.data());
                //console.log(uid);
			dispatch({ type: LOGIN, payload: user.data() })
		} catch (e) {
			alert(e)
		}
	}
}