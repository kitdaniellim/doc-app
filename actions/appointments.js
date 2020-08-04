import { db, storage } from "../config/Firebase";
import uuid from "react-native-uuid";
import _ from "lodash";

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
          consultant_id && db.collection("appointments")
            .where("consultant_id", "==", consultant_id)
            .where("status", "in", ["Pending", "Approved"])
            .onSnapshot((querySnapShot2) => {
              querySnapShot2.forEach((doc) => {
                results.push(doc.data());
              });
              results = _.uniqBy(results, "uid");
            });
            dispatch(getAppointmentsSuccess(results));
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

//CALL BEFORE EVERY OPERATION
export const loadBegin = () => ({
  type: "LOAD_BEGIN",
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
