import Firebase, { db } from '../config/Firebase';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
export const GET_ALL_CONSULTANT = 'GET_ALL_CONSULTANT';
export const GET_CONSULTANT = 'GET_CONSULTANT';
export const GET_REVIEWS = 'GET_REVIEWS';
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
export const SIGNUP = 'SIGNUP';

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
export const login = () => {
    return async (dispatch, getState) => {
        try {
            console.log("Attempting to login...")
            const { email, password } = getState().users
            console.log(email);
            console.log(password);
            const response = await Firebase.auth().signInWithEmailAndPassword(email, password)
            //console.log("response")
            //console.log(response.user.uid);
            dispatch(getUser(response.user.uid))

        } catch (e) {
            Alert.alert(
                'Error!',
                `Invalid email or password`,
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
            dispatch({ type: LOGIN, payload: { user: user.data() } })
        } catch (e) {
            alert(e)
        }
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
            const { email, password, fullName, mobileNumber, birthDay, userType } = getState().users

            const response = await Firebase.auth().createUserWithEmailAndPassword(email, password)

            if (response.user.uid) {
                const getUser = getState().users.userType;
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
                    profilePicture: await Firebase.storage().ref('users/default/default.jpg').getDownloadURL().catch((error) => { alert("error sa geturl") }),
                    officeImage: await Firebase.storage().ref('users/default/office.jpg').getDownloadURL().catch((error) => { alert("error sa geturl") })
                }
                db.collection('users').doc(response.user.uid).set(user);
                dispatch({ type: SIGNUP, payload: { user: response.user } })
                // }


            }

        } catch (e) {
            alert(e)
        }
    }
}

/*Default profile pics */
export const display_default_pic = () => {

}

export const getReviewsConsultant = uid => {
    return async (dispatch, getState) => {
        try {
            const user = await db
                .collection('reviews')
                .doc(uid)
                .get()

            //console.log("sa get user ni")
            //console.log(user.data());
            //console.log(uid);
            dispatch({ type: LOGIN, payload: { user: user.data() } })
        } catch (e) {
            alert(e)
        }
    }
}

/*DEV: EJA - get all CONSULTANT  */
export const getAllConsultant = () => {

    return async (dispatch, getState) => {
        try {
            const snapshot = await db.collection('users').where("userType", "==", "CONSULTANT").get()
            // const consultant = snapshot.docs.map( {
            //     if(  doc.data().profilePicture !== "DEFAULT" )
            //     {
            //            Firebase.storage().ref('users/default/default.jpg').getDownloadURL().then(imgUrl => { doc.data.profilePicture })
            //     }
            // }
            // reviews.map((data) => {
            //    console.log("Snapshot");
            //     console.log(snapshot);
            const consultant = snapshot.docs.map(doc =>

                doc.data()

            )
            //  console.log("conz01");
            //  console.log(consultant);
            consultant.map((data) => {
                //var reviews_details = _.keyBy(data.userReviews);
                //var reviews = _.values(data.userReviews);

                var i = 0;
                data.userReviews.map((data1) => {
                    i += data1.rating;

                })
                data.rating = i;
                return data;
            })

            consultant.sort(function (a, b) {
                return parseInt(b.rating) - parseInt(a.rating);
            })
            //Firebase.storage().ref('users/default/default.jpg').getDownloadURL().then((imgUrl) => { console.log(imgUrl)  })
            //console.log(consultant);

            dispatch({ type: GET_ALL_CONSULTANT, payload: { consultant } })

        } catch (e) {
            alert("puta1")
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

/* DEV: EJA - Event for updating consultant profile picture*/
export const updateProfileImage = uri => {
    return {
        type: UPDATE_PROFILE_IMAGE,
        payload: { uri }
    }
}
/* DEV: EJA - Event for updating consultant profile picture*/
export const updateOfficeImage = uri => {
    return {
        type: UPDATE_OFFICE_IMAGE,
        payload: { uri }
    }
}
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

export const profileImage = async (uid, profilePicture) => {
    try {
        var uuid_profile = uuid.v1();
        const response = await fetch(profilePicture);
        const blob = await response.blob();
        const ref = Firebase.storage().ref().child("users/" + uuid_profile);
        const snapshot = await ref.put(blob);

        blob.close();

        const url = await snapshot.ref.getDownloadURL();
        //return url;
        //console.log(url);
        db.collection("users").doc(uid).update({ profilePicture: url });
    } catch (e) {
        alert("error prof image")
    }


}
export const officePicture = async (uid, officeImage) => {
    try {
        var uuid_office = uuid.v1();
        const response_office = await fetch(officeImage);
        const blob_office = await response_office.blob();

        const ref_office = Firebase.storage().ref().child("users/" + uuid_office);
        const snapshot_office = await ref_office.put(blob_office);

        blob_office.close();

        const url_office = await snapshot_office.ref.getDownloadURL();
        db.collection("users").doc(uid).update({ officeImage: url_office });
    } catch (e) {
        alert(e)
    }


}
/* DEV: EJA - Event for updating consultant profile picture*/
export const editProfile = () => {
    return async (dispatch, getState) => {
        try {

            const { uid, profilePicture, officeImage, day, from_hour, to_hour } = getState().singleConsultant
            //alert(officeImage)

            if (profilePicture) {
                profileImage(uid, profilePicture);
            }
            if (officeImage) {
                //alert("hi")

                officePicture(uid, officeImage);
            }


            // //const{ arr } = getState().locArray;
            // console.log("sa edit prof ni nga consultant");
            // console.log(getState());
            // const response = await fetch(profilePicture);
            // //const response_office = await fetch(officeImage);

            // const blob = await response.blob();

            // const ref = Firebase.storage().ref().child("users/" + uid + getCurrentDate());

            // const snapshot = await ref.put(blob);

            // blob.close();

            // const url = await snapshot.ref.getDownloadURL();
            //  


        } catch (e) {
            alert(e);
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