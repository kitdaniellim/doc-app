import { db, storage } from "../config/Firebase";
import uuid from "react-native-uuid";
import _ from "lodash";

export const getFiles = (appointment_id) => {
  return async (dispatch) => {
    dispatch(loadBegin());
    console.log(`Fetching files from ${appointment_id} folder...`);
    var results = [];
    let ref = storage.ref().child(`appointments/${appointment_id}`);
    ref
      .listAll()
      .then((res) => {
        res.items.forEach((itemRef) => {
          itemRef.getDownloadURL().then((url) => {
            results.push({
              name: itemRef.name,
              file_url: url
            });
          });
        });
      })
      .then(() => {
        console.log(results.length);
        dispatch(getFilesSuccess(results));
      })
      .catch((error) => {
        console.log(error);
        dispatch(getFilesFailure(error));
      });
  };
};

export const getUserAppointments = (client_id) => {
  return async (dispatch) => {
    try {
      dispatch(loadBegin());
      db.collection("appointments")
        .where("client_id", "==", client_id)
        .onSnapshot((querySnapShot) => {
          let results = [];
          querySnapShot.forEach((doc) => {
            results.push(doc.data());
          });
          dispatch(getAppointmentsSuccess(results));
        });
    } catch (error) {
      dispatch(getAppointmentsFailure(error));
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
          consultant_id &&
            db
              .collection("appointments")
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
