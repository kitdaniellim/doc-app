
/* Implementing user events in Redux, events such as updating email, updating password, login and signup.
/* Programmer: Eldrin Jake Augusto 
/* Date: May 2020 */

//import firebase from 'firebase';
import Firebase, { db } from '../config/Firebase'
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
/*DEV: EJA - get all CONSULTANT  */
export const getAllConsultant = () => {

    return async (dispatch, getState) => {
        try{
            const snapshot = await db.collection('users').where("userType","==","CONSULTANT").get()
            // const consultant = snapshot.docs.map( {
            //     if(  doc.data().profilePicture !== "DEFAULT" )
            //     {
            //            Firebase.storage().ref('users/default/default.jpg').getDownloadURL().then(imgUrl => { doc.data.profilePicture })
            //     }
            // }
            // reviews.map((data) => {
            //    console.log("Snapshot");
            //     console.log(snapshot);
            const consultant = snapshot.docs.map( doc => 
          
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

            consultant.sort(function(a,b){
                return parseInt(b.rating) - parseInt(a.rating);
            })
            //Firebase.storage().ref('users/default/default.jpg').getDownloadURL().then((imgUrl) => { console.log(imgUrl)  })
            //console.log(consultant);
            
            dispatch({type: GET_ALL_CONSULTANT, payload: consultant})      

        }catch(e){
            alert("puta1")
            console.log("puta1")
            console.log(e);
        }
    }
}

export const getDefaultImage = () => {
    return async (dispatch, getState) => {
        try{
            Firebase.storage().ref('users/default/default.jpg').getDownloadURL().then(imgUrl => {
            const defaultImage = imgUrl
            dispatch( {type: GET_DEFAULT_IMAGE, payload: defaultImage });
            })
        }catch(e){
            alert("puta2")
        }
    }
}

export const getConsultant = uid => {
    return async (dispatch, getState) => {
        try{

            const singleConsultant = await db 
                .collection('users')
                .doc(uid)
                .get()
                console.log("get consultant");
                console.log(uid);
                //console.log(singleConsultant.data());
             dispatch({ type: GET_CONSULTANT, payload: singleConsultant.data()})
         
        }catch(e){
            alert("puta3");
        }
    }
}

/* DEV: EJA - Event for updating consultant profile picture*/
export const updateProfileImage = uri  => {
    return {
        type: UPDATE_PROFILE_IMAGE,
        payload: uri
    }
}
/* DEV: EJA - Event for updating consultant profile picture*/
export const updateOfficeImage = uri  => {
    return {
        type: UPDATE_OFFICE_IMAGE,
        payload: uri
    }
}
/* DEV: EJA - Event for updating consultant profile picture*/
export const updateOfficeDetails = office_details  => {
    return {
        type: UPDATE_OFFICE_DETAILS,
        payload: office_details
    }
}

export const getCurrentDate = () => {
    var date = new Date().getDate(); //To get the Current Date
var month = new Date().getMonth() + 1; //To get the Current Month
var year = new Date().getFullYear(); //To get the Current Year
var hours = new Date().getHours(); //To get the Current Hours
var min = new Date().getMinutes(); //To get the Current Minutes
var sec = new Date().getSeconds(); //To get the Current Seconds
return date+month+year+hours+min+sec;
}

export const profileImage = async (uid, profilePicture) => {
    try{
        var uuid_profile = uuid.v1();
        const response = await fetch(profilePicture);
        const blob = await response.blob();
        const ref = Firebase.storage().ref().child("users/" + uuid_profile );
        const snapshot = await ref.put(blob);

        blob.close();

        const url = await snapshot.ref.getDownloadURL();
        //return url;
        //console.log(url);
        db.collection("users").doc(uid).update({profilePicture: url});
    }catch(e){
        alert("error prof image")
    }
    
    
}
export const officePicture = async (uid, officeImage) => {
    try{
        var uuid_office = uuid.v1();
        const response_office = await fetch(officeImage);
        const blob_office = await response_office.blob();

        const ref_office  = Firebase.storage().ref().child("users/" + uuid_office );
        const snapshot_office = await ref_office.put(blob_office);

        blob_office.close();

        const url_office = await snapshot_office.ref.getDownloadURL();
        db.collection("users").doc(uid).update({officeImage: url_office});
    }catch(e){
        alert(e)
    }
    
    
}
/* DEV: EJA - Event for updating consultant profile picture*/
export const editProfile = () => {
    return async(dispatch, getState) => {
        try{

            const { uid, profilePicture, officeImage, day, from_hour, to_hour } = getState().singleConsultant
            //alert(officeImage)
            
            if(profilePicture){
                profileImage(uid, profilePicture);
            }
            if(officeImage){
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


        }catch(e){
            alert(e);
        }
       
    }
}

/* DEV: EJA - Event for updating email */
export const updateLocation = user_location => {

    return {
        type: UPDATE_LOCATION_DETAIL,
        payload: user_location
    }
}

/* DEV: EJA - Event for updating email */
export const updateFromHourLocation = date => {

    return {
        type: UPDATE_FROM_HOUR_DETAIL,
        payload: date
    }
}
/* DEV: EJA - Event for updating email */
export const updateToHourLocation = date => {

    return {
        type: UPDATE_TO_HOUR_DETAIL,
        payload: date
    }
}

/* DEV: EJA - Event for updating email */
export const updateDayLocation = user_location => {

    return {
        type: UPDATE_DAY_DETAIL,
        payload: user_location
    }
}

/* DEV: EJA - Event for updating email */
export const detailKey = ( text, key ) => {
    const detail = {
        text: text,
        key: key
    }
    return {
        type: UPDATE_DETAIL_KEY,
        payload: detail
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
                .where("reviewer_id", "==",uid)
				.get().then(function(querySnapshot){
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

			dispatch({ type: GET_REVIEWS, payload: reviews_users })
		} catch (e) {
			alert(e)
		}
	}
}


