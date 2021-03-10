import { db, storage } from "../config/Firebase";
import uuid from "react-native-uuid";
import _ from "lodash";
import moment from "moment";

export const getFiles = (appointment_id) => {
  return async (dispatch) => {
    dispatch(loadBegin());
    console.log(`Fetching files from ${appointment_id} folder...`);
    let ref = storage.ref().child(`appointments/${appointment_id}`);
    await ref
      .listAll()
      .then((res) => {
        let results = [];
        res.items.forEach((itemRef) => {
          results.push({
            name: itemRef.name,
            itemRef
          });
        });
        dispatch(getFilesSuccess(results));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getFilesFailure(error));
      });
  };
};

export const getUserAppointments = (id, type) => {
  return async (dispatch) => {
    try {
      await dispatch(loadBegin());
      if (type == "CLIENT") {
        db.collection("appointments")
          .where("client_id", "==", id)
          .onSnapshot(async (querySnapShot) => {
            let results = [];
            querySnapShot.forEach((doc) => {
              results.push(doc.data());
            });
            await dispatch(getAppointmentsSuccess(results));
          });
      } else if (type == "CONSULTANT") {
        db.collection("appointments")
          .where("consultant_id", "==", id)
          .onSnapshot(async (querySnapShot) => {
            let results = [];
            querySnapShot.forEach((doc) => {
              results.push(doc.data());
            });
            await dispatch(getAppointmentsSuccess(results));
          });
      } else {
        alert("Unknown user type");
      }
    } catch (error) {
      await dispatch(getAppointmentsFailure(error));
    }
  };
};

export const getAppointments = (client_id, consultant_id = null) => {
  return async (dispatch) => {
    try {
      dispatch(loadBegin());
      db.collection("appointments")
        .where("client_id", "==", client_id)
        .where("status", "in", ["Pending", "Approved"])
        .onSnapshot((querySnapShot) => {
          let results = [];
          querySnapShot.forEach((doc) => {
            results.push(doc.data());
          });
          db.collection("appointments")
            .where("consultant_id", "==", consultant_id)
            .where("status", "in", ["Pending", "Approved"])
            .onSnapshot((querySnapShot2) => {
              querySnapShot2.forEach((doc) => {
                results.push(doc.data());
              });
              results = _.uniqBy(results, "uid");
              dispatch(getAppointmentsSuccess(results));
            });
        });
    } catch (error) {
      dispatch(getAppointmentsFailure(error));
    }
  };
};

export const bookAppointment = (data) => {
  return async (dispatch) => {
    dispatch(loadBegin());


    let hasError = false;
    const new_id = uuid.v1();
    data.uid = new_id;
    data.files.map(async (file) => {
      const response = await fetch(file.uri);
      const blob = await response.blob();
      let ref = storage.ref().child(`appointments/${new_id}/${file.name}`);
      ref.put(blob).catch((error) => {
        console.log(error);
        hasError = true;
        dispatch(bookAppointmentFailure(error));
      });
    });
    if (!hasError) {

      // let consultantNotif = 'This client would like to book an appointment with you'
      // const notif = {
      //   notifs: consultantNotif,
      // }
      // db.collection("notifs").doc(data.uid).set(notif);

      db.collection("appointments")
        .doc(data.uid)
        .set(data)
        .then(() => {
          dispatch(bookAppointmentSuccess("Booking Successful"));
        })
        .catch((error) => {
          dispatch(bookAppointmentFailure(error));
        });




    } else {
      dispatch(bookAppointmentFailure("Error in Booking Appointment"));
    }
  };
};

export const updateAppointmentStatus = (id, status, reason = "") => {
  return async (dispatch) => {
    dispatch(loadBegin());
    const ref = db.collection("appointments").doc(id);
    ref.update({
      status: status,
      updated_at: moment().format('YYYY-MM-DD HH:mm:ss').toString()
    }).then(() => {
      if (reason != "") {
        ref.set({
          reason
        }, { merge: true });
      }
    }).then((result) => {
      dispatch(updateAppointmentStatusSuccess(result));
    }).catch((error) => {
      dispatch(updateAppointmentStatusFailure(error));
    });

  }
}

//CALL BEFORE EVERY OPERATION
export const loadBegin = () => ({
  type: "LOAD_BEGIN",
});

//GET FILES STATUS
export const getFilesSuccess = (results) => ({
  type: "GET_FILES_SUCCESS",
  payload: { results },
});

export const getFilesFailure = (error) => ({
  type: "GET_FILES_FAILURE",
  payload: { error },
});

//GET APPOINTMENT STATUS
export const getAppointmentsSuccess = (results) => ({
  type: "GET_APPOINTMENTS_SUCCESS",
  payload: { results },
});

export const getAppointmentsFailure = (error) => ({
  type: "GET_APPOINTMENTS_FAILURE",
  payload: { error },
});

//BOOK APPOINTMENT STATUS
export const bookAppointmentSuccess = (result) => ({
  type: "BOOK_APPOINTMENT_SUCCESS",
  payload: { result },
});

export const bookAppointmentFailure = (error) => ({
  type: "BOOK_APPOINTMENT_FAILURE",
  payload: { error },
});

//UPDATE APPOINTMENT STATUS STATUS
export const updateAppointmentStatusSuccess = (result) => ({
  type: "UPDATE_APPOINTMENT_STATUS_SUCCESS",
  payload: { result },
});

export const updateAppointmentStatusFailure = (error) => ({
  type: "UPDATE_APPOINTMENT_STATUS_FAILURE",
  payload: { error },
});

//RESET APPOINTMENTS ON LOGOUT
export const resetAppointments = () => ({
  type: "RESET_APPOINTMENTS"
});
