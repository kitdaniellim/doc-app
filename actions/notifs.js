import Firebase, { db } from '../config/Firebase';
import { Alert } from 'react-native';
import uuid from 'react-native-uuid';


export const addNotif = (id, text) => {
    return async dispatch => {
        dispatch(loadBegin());

        const snapshot = await db.collection('notifs').where("uid", "==", id).get()

        let arr = snapshot.docs.map(doc =>
            doc.data()
        )

        let user_notifs = arr[0];
        console.log('Showing user notifications')
        console.log(user_notifs)

        // db.collection('users').doc(response.user.uid).set(user);

        // db.collection("notifs")
        //     .doc(id)
        //     .set(data)
        //     .then(() => {
        //         dispatch(addNotifSuccess(data));
        //     })
        //     .catch((error) => {
        //         dispatch(addNotifFailure(error));
        //     });
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
                    notifs.sort((a, b) => b.created_at - a.created_at);
                    await dispatch(getNotifsSuccess(notifs));
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