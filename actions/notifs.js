import Firebase, { db } from '../config/Firebase';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';

import moment from "moment";

//Accepts user type, appointment id, and type of notification as string
export const addNotif = (userType, uid, type) => {
    return async dispatch => {
        dispatch(loadBegin());
        console.log('-------ADD NOTIF VALS--------')
        console.log(userType)
        console.log(uid)
        console.log(type)
        console.log('---------------')
        let result = false;
        let snapshot = await db.collection('appointments').where("uid", "==", uid).get()
        let arr = snapshot.docs.map(doc =>
            doc.data()
        )
        let appoint_details = arr[0];
        // console.log('Showing appointment details')
        // console.log(appoint_details)

        //types
        //'Book' - Client '-client name- would like to schedule an appointment with you!'
        //'Approve' - Consultant 'Your appointment with -consultant name- at -location- has been approved.'
        //'Cancel' - either 'Your appointment at -location- was cancelled.'
        //'Review' - Client 'Your last appointment with -client name- has just been reviewed.'
        //'Notify' - Consultant '-custom message-'
        //'Finish' or Mark as Done - Consultant 'Your appointment with -consultant name- has finished. Please leave a review for feedback for the consultant!'

        //id represents who will be notified
        const id = (userType == 'CLIENT') ? appoint_details.consultant_id : appoint_details.client_id

        snapshot = await db.collection('notifs').where("uid", "==", id).get()
        arr = snapshot.docs.map(doc =>
            doc.data()
        )

        let notif_details = arr[0];
        // console.log(notif_details)

        let text = '';
        let title = appoint_details.consultant_name + ' sent you a message.';
        console.log('Showing ntifs shit')
        console.log(appoint_details.date)
        console.log(moment(appoint_details.date, "YYYY-MM-DD").format('MMMM Do, YYYY').toString())
        switch (type) {
            case 'BOOK':
                text = appoint_details.client_name + ' would like to schedule an appointment with you on ' + moment(appoint_details.date, "YYYY-MM-DD").format('MMMM Do, YYYY').toString() + ' from ' + moment(appoint_details.time_start, "HH:mm:ss").format('h:mm a').toString() + ' to ' + moment(appoint_details.time_end, "HH:mm:ss").format('h:mm a').toString() + '.'
                title = 'You got an Appointment!'
                break;
            case 'APPROVE':
                text = 'Your ' + moment(appoint_details.time_start, "HH:mm:ss").format('h:mm a').toString() + ' to ' + moment(appoint_details.time_end, "HH:mm:ss").format('h:mm a').toString() + ' appointment at ' + appoint_details.location + ' with ' + appoint_details.consultant_name + ' has been approved.'
                title = 'Appointment Approved.'
                break;
            case 'Declined':
                text = 'Your ' + moment(appoint_details.time_start, "HH:mm:ss").format('h:mm a').toString() + ' to ' + moment(appoint_details.time_end, "HH:mm:ss").format('h:mm a').toString() + ' appointment at ' + appoint_details.location + ' with ' + appoint_details.consultant_name + ' was declined.'
                title = 'Appointment Declined.'
                break;
            case 'Cancelled':
                text = 'Your ' + moment(appoint_details.time_start, "HH:mm:ss").format('h:mm a').toString() + ' to ' + moment(appoint_details.time_end, "HH:mm:ss").format('h:mm a').toString() + ' appointment at ' + appoint_details.location + ' with ' + appoint_details.client_name + ' was cancelled.'
                title = 'Appointment Cancelled.'
                break;
            case 'REVIEW':
                text = 'Your last appointment with ' + appoint_details.client_name + ' has just been reviewed.'
                title = 'New Review.'
                break;
            case 'DONE': text = 'Your appointment with ' + appoint_details.consultant_name + ' has finished. Leave a review!'
                title = 'Appointment Finished.'
                break;
            default: text = type + ' - ' + appoint_details.consultant_name //meaning text is customized
        }

        const obj = {
            date: appoint_details.date,
            title: title,
            text: text,
            created_at: moment().format('hh:mm A').toString(),
        }

        if (notif_details !== undefined) {
            notif_details.notifs.unshift(obj)
            db.collection('notifs').doc(id).set(notif_details);
            result = true;
        } else {
            //create
            const doc = {
                notifs: [obj],
                uid: id,
            }

            db.collection('notifs').doc(id).set(doc);
            result = true;
        }

        if(result) {
            dispatch(addNotifSuccess(obj));
        } else {
            dispatch(addNotifFailure(error));
        }
        
    }
}

//GIVE REASON FUNCTIONALITY TAKEN OUT - Dan, edited on 24/03/2021
// export const updateAppointmentStatus = (id, status, reason = "") => {
//     return async (dispatch) => {
//       dispatch(loadBegin());
//       const ref = db.collection("appointments").doc(id);
//       ref.update({
//         status: status,
//         updated_at: moment().format('YYYY-MM-DD HH:mm:ss').toString()
//       })

//       .then((result) => {
//         dispatch(updateAppointmentStatusSuccess(result));
//       }).catch((error) => {
//         dispatch(updateAppointmentStatusFailure(error));
//       });

//     }
//   }

/*DEV: DAN - get notifications  */
//get notifs related to user 
export const getNotifs = (id) => {
    return async dispatch => {
        try {
            dispatch(loadBegin());
            db.collection("notifs")
                .where("uid", "==", id)
                .onSnapshot(async (querySnapShot) => {
                    let notifs = [];
                    querySnapShot.forEach((doc) => {
                        notifs.push(doc.data());
                    });
                    let obj = notifs[0]
                    await dispatch(getNotifsSuccess(obj));
                })
        } catch (error) {
            dispatch(getNotifsFailure(error))
        }
    }
}

export const getCurrentNotifs = (id) => {
    return async dispatch => {
        try {
            dispatch(loadBegin());
            db.collection("notifs")
                .where("uid", "==", id)
                .onSnapshot(async (querySnapShot) => {
                    let notifs = [];
                    querySnapShot.forEach((doc) => {
                        notifs.push(doc.data());
                    });
                    let obj = notifs[0]

                    await dispatch(getCurrentNotifsSuccess(obj));
                })
        } catch (error) {
            dispatch(getNotifsFailure(error))
        }
    }
}

//CALL BEFORE EVERY OPERATION
export const loadBegin = () => ({
    type: 'LOAD_BEGIN'
});

//GET NOTIFS STATUS
export const getNotifsSuccess = (notifs) => ({
    type: "GET_NOTIFS_SUCCESS",
    payload: { notifs }
});

export const getCurrentNotifsSuccess = (current_notifs) => ({
    type: "GET_CURRENT_NOTIFS_SUCCESS",
    payload: { current_notifs }
});

export const getNotifsFailure = (error) => ({
    type: "GET_NOTIFS_FAILURE",
    payload: { error }
})

//ADD NOTIFS STATUS
export const addNotifSuccess = (notif) => ({
    type: "ADD_NOTIF_SUCCESS",
    payload: { notif },
});

export const addNotifFailure = (error) => ({
    type: "ADD_NOTIF_FAILURE",
    payload: { error },
});