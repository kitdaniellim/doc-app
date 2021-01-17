import { db } from "../config/Firebase";
import uuid from "react-native-uuid";

export const addReview = (data) => {
    return async dispatch => {
        dispatch(loadBegin());
        const new_id = uuid.v1();
        data.uid = new_id
        db.collection("reviews")
            .doc(data.uid)
            .set(data)
            .then(() => {
                dispatch(addReviewSuccess("Review submitted. Thank you!"));
            })
            .catch((error) => {
                dispatch(addReviewFailure(error));
            });
    }
}

//CALL BEFORE EVERY OPERATION
export const loadBegin = () => ({
    type: "LOAD_BEGIN",
});

//ADD REVIEW STATUS
export const addReviewSuccess = (result) => ({
    type: "ADD_REVIEW_SUCCESS",
    payload: { result },
});

export const addReviewFailure = (error) => ({
    type: "ADD_REVIEW_FAILURE",
    payload: { error },
});