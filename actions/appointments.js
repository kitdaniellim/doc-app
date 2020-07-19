import Firebase, { db, storage } from '../config/Firebase';
import uuid from 'react-native-uuid';

export const bookAppointment = (data) => {
    return async dispatch => {
        dispatch(loadBegin());
        const new_id = uuid.v1();
        data.uid = new_id;
        data.files.map(async (file) => {
            const response = await fetch(file.uri);
            const blob = await response.blob();
            let ref = storage.ref().child(`appointments/${new_id}/${file.name}`) ;
            ref.put(blob).catch(error => {
                console.log(error);
                dispatch(bookAppointmentFailure(error));
            });
        });
        db.collection('appointments').doc(data.uid).set(data)
            .then(() => {
                dispatch(bookAppointmentSuccess("Booking Successful"));
            })
            .catch((error) => {
                dispatch(bookAppointmentFailure(error));
            });
    }
}


//CALL BEFORE EVERY OPERATION
export const loadBegin = () => ({
    type: 'LOAD_BEGIN'
});

//BOOK APPOINTMENT STATUS
export const bookAppointmentSuccess = (result) => ({
    type: 'BOOK_APPOINTMENT_SUCCESS',
    payload: { result }
});

export const bookAppointmentFailure = (error) => ({
    type: 'BOOK_APPOINTMENT_FAILURE',
    payload: { error }
});
