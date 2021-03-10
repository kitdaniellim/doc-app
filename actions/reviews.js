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

export const getReviews = (id) => {
    console.log('went in')
    return async dispatch => {
        console.log('buuuuut did it go in here??')
        try {
            dispatch(loadBegin());
            db.collection("reviews")
                .where("review_to", "==", id)
                .onSnapshot(async (querySnapShot) => {
                    let results = [];
                    querySnapShot.forEach((doc) => {
                        results.push(doc.data());
                    });
                    results.sort((a, b) => b.created_at - a.created_at);
                    await dispatch(getReviewsSuccess(results));
                })
        } catch (error) {
            console.log('idfk what happened lol')
            dispatch(getReviewsFailure(error))
        }
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

//GET REVIEWS STATUS
export const getReviewsSuccess = (results) => ({
    type: "GET_REVIEWS_SUCCESS",
    payload: { results }
});

export const getReviewsFailure = (error) => ({
    type: "GET_REVIEWS_FAILURE",
    payload: { error }
})