import Firebase, { db } from '../config/Firebase';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
export const GET_ALL_CONSULTANT = 'GET_ALL_CONSULTANT';
export const GET_CONSULTANT = 'GET_CONSULTANT';
export const GET_REVIEWS = 'GET_REVIEWS';
// export const GET_PROFILE_IMAGE = 'GET_PROFILE_IMAGE';
// export const GET_OFFICE_IMAGE = 'GET_OFFICE_IMAGE';
export const UPDATE_PROFILE_IMAGE = 'UPDATE_PROFILE_IMAGE';
export const UPDATE_OFFICE_IMAGE = 'UPDATE_OFFICE_IMAGE';
export const UPDATE_OFFICE_DETAILS = 'UPDATE_OFFICE_DETAILS';
export const UPDATE_LOCATION_DETAIL = 'UPDATE_LOCATION_DETAIL';
export const UPDATE_TO_HOUR_DETAIL = 'UPDATE_TO_HOUR_DETAIL';
export const UPDATE_FROM_HOUR_DETAIL = 'UPDATE_FROM_HOUR_DETAIL';
export const UPDATE_DAY_DETAIL = 'UPDATE_DAY_DETAIL';
export const UPDATE_DETAIL_KEY = 'UPDATE_DETAIL_KEY';
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
export const LOGOUT = 'LOGOUT';
export const SIGNUP = 'SIGNUP';
export const EDIT_PROFILE = 'EDIT_PROFILE';

//USER PASSWORD RECOVERY OPERATION
export const recoverPassword = (token) => {
    return async dispatch => {
        try {
            dispatch(loadBegin());
            //insert db query and operations here
            await Firebase.auth().sendPasswordResetEmail(token)
                .then(() => {
                    const result = {
                        message: "Email has been sent for " + token + ". \n\n Please check the email for instructions in resetting the password."
                    }
                    dispatch(recoverPassSuccess(result));
                })
                .catch((error) => {
                    dispatch(recoverPassFailure(error));
                });
        } catch (error) {
            dispatch(recoverPassFailure(error));
        }
    }
}

//CALL BEFORE EVERY OPERATION
export const loadBegin = () => ({
    type: 'LOAD_BEGIN'
});

//USER PASSWORD RECOVERY STATUS
export const recoverPassSuccess = result => ({
    type: 'RECOVER_PASS_SUCCESS',
    payload: { result }
});

export const recoverPassFailure = error => ({
    type: 'RECOVER_PASS_FAILURE',
    payload: { error }
});

/* DEV: EJA - Event for updating email */
export const updateEmail = email => {
    return {
        type: UPDATE_EMAIL,
        payload: { email }
    }
}

/* DEV: EJA - Event for updating password */
export const updatePassword = password => {
    return {
        type: UPDATE_PASSWORD,
        payload: { password }
    }
}

/* DEV: EJA - Event for updating full name */
export const updateFullName = fullName => {
    return {
        type: UPDATE_FULL_NAME,
        payload: { fullName }
    }
}

/* DEV: EJA - Event for updating mobileNumber */
export const updateMobileNumber = mobileNumber => {
    return {
        type: UPDATE_MOBILE_NUMBER,
        payload: { mobileNumber }
    }
}

/* DEV: EJA - Event for updating birthday */
export const updateBirthDay = birthday => {
    return {
        type: UPDATE_BIRTH_DAY,
        payload: { birthday }
    }
}

/* DEV: EJA - Event for updating user type*/
export const updateUserType = userType => {
    return {
        type: UPDATE_USER_TYPE,
        payload: { userType }
    }
}

/* DEV: EJA - Event for updating consultant specialty*/
export const updateUserSpecialty = userSpecialty => {
    return {
        type: UPDATE_USER_SPECIALTY,
        payload: { userSpecialty }
    }
}

/* DEV: EJA - Event for updating consultant sub specialty*/
export const updateUserSubSpecialty = userSubSpecialty => {
    return {
        type: UPDATE_USER_SUB_SPECIALTY,
        payload: { userSubSpecialty }
    }
}


/* DEV: EJA - Event for updating consultant LIC*/
export const updateUserLIC = userLIC => {
    return {
        type: UPDATE_USER_LIC,
        payload: { userLIC }
    }
}

/* DEV: EJA - Event for updating consultant office location*/
export const updateUserOfficeLocation = userOfficeLocation => {
    return {
        type: UPDATE_OFFICE_LOCATION,
        payload: { userOfficeLocation }
    }
}

/* DEV: EJA - Event for updating consultant office hours*/
export const updateOfficeHours = officeHours => {
    return {
        type: UPDATE_OFFICE_HOURS,
        payload: { officeHours }
    }
}

/* DEV: EJA - Event for login*/
export const login = (email, password) => {
    return async (dispatch) => {
        try {
            console.log("Attempting to login...")
            console.log(email);
            await Firebase.auth().signInWithEmailAndPassword(email, password).then(async (result) => {
                await db
                    .collection('users')
                    .doc(result.user.uid)
                    .get()
                    .then((doc) => {
                        dispatch({ type: LOGIN, payload: { user: doc.data() } })
                    });
            });
        } catch (e) {
            Alert.alert(
                'Error!',
                `Incorrect email or password`,
                [
                    {
                        text: 'Close',
                        style: 'cancel'
                    }
                ],
                { cancelable: true }
            );
        }
    }
}
export const logout = () => {
    return {
        type: LOGOUT
    }
}


export const getUrl = async () => {

    const url = await Firebase.storage().ref('users/default/default.jpg').getDownloadURL().catch((error) => { alert("error sa geturl") })
    //console.log("MAO NI SA GETURL");
    //console.log(url);
    return url;
}
/* DEV: EJA - Event for sign up*/
export const signup = () => {
    return async (dispatch, getState) => {
        try {
            const { email, password, fullName, userType } = getState().users
            const response = await Firebase.auth().createUserWithEmailAndPassword(email.trim(), password)
            let user;
            if (response.user.uid) {
                if (userType === "CLIENT") {
                    const { mobileNumber, birthDay } = getState().users
                    user = {
                        uid: response.user.uid,
                        email: email,
                        emailVerified: false,
                        fullName: fullName,
                        mobileNumber: mobileNumber,
                        birthDay: birthDay,
                        userType: userType
                    }
                } else {
                    const { userSpecialty, userLIC, userSubSpecialty, office_details } = getState().users
                    user = {
                        uid: response.user.uid,
                        email: email,
                        emailVerified: false,
                        fullName: fullName,
                        rating: 0,
                        userSpecialty: userSpecialty,
                        userLIC: userLIC,
                        userSubSpecialty: userSubSpecialty,
                        office_details: office_details,
                        userType: userType,
                        profilePicture: await Firebase.storage().ref('users/default/default.jpg').getDownloadURL().catch((error) => { alert("error sa geturl") }),
                        officeImage: await Firebase.storage().ref('users/default/office.jpg').getDownloadURL().catch((error) => { alert("error sa geturl") })
                    }
                }

                console.log('========showing user==========')
                console.log(user);
                console.log('==================')
                db.collection('users').doc(response.user.uid).set(user);

                // const notif = {
                //   notifs: []
                //   uid: response.user.uid,
                //     
                // }

                // db.collection('notifs').doc(response.user.uid).set(notif);



                dispatch({ type: SIGNUP, payload: { user: response.user } })
                // }






            }
        } catch (e) {
            console.log('?????????????????????')
            alert(e)
        }
    }
}

/*Default profile pics */
export const display_default_pic = () => {

}

/*DEV: EJA - get all CONSULTANT  */
export const getAllConsultant = () => {

    return async (dispatch, getState) => {
        try {
            const snapshot = await db.collection('users').where("userType", "==", "CONSULTANT").get()
            const { all_reviews } = getState().reviews

            // console.log('IS THIS THING EMPTY???')
            // console.log(all_reviews)
            // console.log('===========')


            const consultant = snapshot.docs.map(doc =>
                doc.data()
            )

            consultant.map((data) => {
                let sum = 0, count = 0;
                all_reviews.map((review) => {
                    if(review.review_to === data.uid) {
                        sum += review.rating;
                        count++;
                    }
                })
                if(count == 0) {
                    data.rating = 0;
                } else {
                    data.rating = sum / count;
                }
                
                return data;
            })

            consultant.sort(function (a, b) {
                return parseInt(b.rating) - parseInt(a.rating);
            })
            // console.log('IS THIS THING EMPTY???')
            // console.log(consultant)
            // console.log('===========')
            // db.collection('users').doc(uid).update({rating: value});

            dispatch({ type: GET_ALL_CONSULTANT, payload: { consultant } })

        } catch (e) {
            console.log("puta1")
            console.log(e);
        }
    }
}

export const getDefaultImage = () => {
    return async (dispatch, getState) => {
        try {
            Firebase.storage().ref('users/default/default.jpg').getDownloadURL().then(imgUrl => {
                const defaultImage = imgUrl
                dispatch({ type: GET_DEFAULT_IMAGE, payload: { defaultImage } });
            })
        } catch (e) {
            alert("puta2")
        }
    }
}

export const getConsultant = uid => {
    return async (dispatch, getState) => {
        try {

            const singleConsultant = await db
                .collection('users')
                .doc(uid)
                .get()
            console.log("get consultant");
            console.log(uid);
            //console.log(singleConsultant.data());
            dispatch({ type: GET_CONSULTANT, payload: { singleConsultant: singleConsultant.data() } })

        } catch (e) {
            alert("puta3");
        }
    }
}

// export const getUserType = uid => {
//     return async (dispatch, getState) => {
//         try {

//             const singleConsultant = await db
//                 .collection('users')
//                 .doc(uid)
//                 .get()
//             console.log("get consultant");
//             console.log(uid);
//             //console.log(singleConsultant.data());
//             dispatch({ type: GET_CONSULTANT, payload: { singleConsultant: singleConsultant.data() } })

//         } catch (e) {
//             alert("puta3");
//         }
//     }
// }


/* DEV: EJA - Event for updating consultant profile picture*/
// export const updateProfileImage = uri => {
//     return {
//         type: UPDATE_PROFILE_IMAGE,
//         payload: { uri }
//     }
// }

/* DEV: EJA - Event for updating consultant profile picture*/
// export const updateOfficeImage = uri => {
//     return {
//         type: UPDATE_OFFICE_IMAGE,
//         payload: { uri }
//     }
// }

/* DEV: EJA - Event for updating consultant profile picture*/
export const updateOfficeDetails = office_details => {
    return {
        type: UPDATE_OFFICE_DETAILS,
        payload: { office_details }
    }
}

export const getCurrentDate = () => {
    var date = new Date().getDate(); //To get the Current Date
    var month = new Date().getMonth() + 1; //To get the Current Month
    var year = new Date().getFullYear(); //To get the Current Year
    var hours = new Date().getHours(); //To get the Current Hours
    var min = new Date().getMinutes(); //To get the Current Minutes
    var sec = new Date().getSeconds(); //To get the Current Seconds
    return date + month + year + hours + min + sec;
}

export const updateOfficeImage = uri => {
    return {
        type: UPDATE_OFFICE_IMAGE,
        payload: { uri }
    }
}

export const updateProfileImage = uri => {
    return {
        type: UPDATE_PROFILE_IMAGE,
        payload: { uri }
    }
}

// export const updateProfileImage = (uid, profilePicture) => {
//     console.log('UPDATING PROF IMAGE')
//     console.log(uid)
//     console.log(profilePicture)
//     return async (dispatch, getState) => {
//         try {

//             var uuid_profile = uuid.v1();
//             const response = await fetch(profilePicture);
//             const blob = await response.blob();
//             const ref = Firebase.storage().ref().child("users/" + uuid_profile);
//             const snapshot = await ref.put(blob);

//             blob.close();

//             const url = await snapshot.ref.getDownloadURL();
//             //return url;
//             console.log(url);
//             // db.collection("users").doc(uid).update({ profilePicture: url });
//             dispatch({ type: UPDATE_PROFILE_IMAGE, payload: { profilePicture: url } })
//         } catch (e) {
//             alert("error prof image")
//         }
//     }
// }

// export const updateOfficeImage = (uid, officeImage) => {
//     console.log('UPDATING OFFICE IMAGE')
//     console.log(uid)
//     console.log(officeImage)
//     return async (dispatch, getState) => {
//         try {

//             var uuid_office = uuid.v1();
//             const response_office = await fetch(officeImage);
//             const blob_office = await response_office.blob();

//             const ref_office = Firebase.storage().ref().child("users/" + uuid_office);
//             const snapshot_office = await ref_office.put(blob_office);

//             blob_office.close();

//             const url_office = await snapshot_office.ref.getDownloadURL();
//             console.log(url_office);
//             // db.collection("users").doc(uid).update({ officeImage: url_office });
//             dispatch({ type: UPDATE_OFFICE_IMAGE, payload: { officeImage: url_office } })
//         } catch (e) {
//             console.log('error office image')
//             alert(e)
//         }
//     }
// }

/* DEV: EJA - Event for updating consultant profile picture*/
// export const editProfile = () => {
//     return async (dispatch, getState) => {
//         console.log('===== DISPLAYING SHIT =====')
//         console.log(getState());
//         console.log('===== DISPLAYING SHIT =====')
//         try {

//             const { uid, profilePicture, officeImage, day, from_hour, to_hour } = getState().singleConsultant

//             console.log('===== DISPLAYING SHIT =====')
//             console.log(uid)
//             console.log('-----------------------------')
//             console.log(profilePicture)
//             console.log('-----------------------------')
//             console.log(officeImage)
//             console.log('-----------------------------')
//             console.log(day)
//             console.log('-----------------------------')
//             console.log(from_hour)
//             console.log('-----------------------------')
//             console.log(to_hour)
//             console.log('===== DISPLAYING SHIT =====')

//             if (profilePicture) {
//                 profileImage(uid, profilePicture);
//             }
//             if (officeImage) {
//                 officePicture(uid, officeImage);
//             }
//             // //const{ arr } = getState().locArray;
//             // console.log("sa edit prof ni nga consultant");
//             // console.log(getState());
//             // const response = await fetch(profilePicture);
//             // //const response_office = await fetch(officeImage);

//             // const blob = await response.blob();

//             // const ref = Firebase.storage().ref().child("users/" + uid + getCurrentDate());

//             // const snapshot = await ref.put(blob);

//             // blob.close();

//             // const url = await snapshot.ref.getDownloadURL();
//             //  
//         } catch (e) {
//             conso
//             console.log(e)
//             alert(e);
//         }
//     }
// }

export const editProfile = (uid) => {
    return async (dispatch, getState) => {
        try {
            const snapshot = await db.collection('users').where("uid", "==", uid).get()
            const { email, fullName, userSpecialty, userLIC, userSubSpecialty, office_details, profilePicture, officeImage } = getState().users

            let arr = snapshot.docs.map(doc =>
                doc.data()
            )
            let user = arr[0];

            // console.log('========showing user 1==========')
            // console.log(user);
            // console.log('==================')

            
            if(user.profilePicture !== profilePicture){
                let profileImage_url;
                let uuid_profile = uuid.v1();
                const response_profile = await fetch(profilePicture);
                const blob_profile = await response_profile.blob();
                const ref_profile = Firebase.storage().ref().child("users/" + uuid_profile);
                const snapshot_profile = await ref_profile.put(blob_profile);
                blob_profile.close();
                profileImage_url = await snapshot_profile.ref.getDownloadURL();
                user.profilePicture = profileImage_url;
                console.log('========showing profile pic url==========')
                console.log(profileImage_url);
                console.log('==================')
            }

            
            if(user.officeImage !== officeImage){
                let officeImage_url;
                let uuid_office = uuid.v1();
                const response_office = await fetch(officeImage);
                const blob_office = await response_office.blob();
                const ref_office = Firebase.storage().ref().child("users/" + uuid_office);
                const snapshot_office = await ref_office.put(blob_office);
                blob_office.close();
                officeImage_url = await snapshot_office.ref.getDownloadURL();
                user.officeImage = officeImage_url;
                console.log('========showing office pic url==========')
                console.log(officeImage_url);
                console.log('==================')
            }

            user.email = email;
            user.fullName = fullName;
            user.userSpecialty = userSpecialty;
            user.userLIC = userLIC;
            user.userSubSpecialty = (userSubSpecialty == undefined) ? '' : userSubSpecialty;
            user.office_details = office_details;

            console.log('========showing user==========')
            console.log(user);
            console.log('==================')

            db.collection('users').doc(uid).update(user);

            dispatch({ type: EDIT_PROFILE, payload: { user } })
        } catch (e) {
            console.log(e)
            alert(e)
        }
    }
}

/* DEV: EJA - Event for updating email */
export const updateLocation = user_location => {
    return {
        type: UPDATE_LOCATION_DETAIL,
        payload: { user_location }
    }
}

/* DEV: EJA - Event for updating email */
export const updateFromHourLocation = date => {

    return {
        type: UPDATE_FROM_HOUR_DETAIL,
        payload: { date }
    }
}
/* DEV: EJA - Event for updating email */
export const updateToHourLocation = date => {

    return {
        type: UPDATE_TO_HOUR_DETAIL,
        payload: { date }
    }
}

/* DEV: EJA - Event for updating email */
export const updateDayLocation = user_location => {

    return {
        type: UPDATE_DAY_DETAIL,
        payload: { user_location }
    }
}

/* DEV: EJA - Event for updating email */
export const detailKey = (text, key) => {
    const detail = {
        text: text,
        key: key
    }
    return {
        type: UPDATE_DETAIL_KEY,
        payload: { detail }
    }
}
export const getReviews = uid => {
    return async (dispatch, getState) => {
        try {
            // await db.collection('users').where("userType","==","CONSULTANT").get()
            //    const singleConsultant = await db 
            //    .collection('users')
            //    .doc(uid)
            //    .get()
            const reviews = await db
                .collection('reviews')
                .where("reviewer_id", "==", uid)
                .get().then(function (querySnapshot) {
                    //console.log(querySnapshot)
                })

            const user = await db.collection('users').doc(uid).get();
            // console.log("get reviews");
            // console.log(user.data());
            // console.log(reviews.data());
            // console.log("aw")
            const reviews_users = {
                user: user.data(),
                reviews: reviews.data(),
            }

            dispatch({ type: GET_REVIEWS, payload: { reviews_users } })
        } catch (e) {
            alert(e)
        }
    }
}