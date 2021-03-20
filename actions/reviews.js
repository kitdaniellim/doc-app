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

export const getAllReviews = (id) => {
    return async dispatch => {
        try {
            dispatch(loadBegin());
            db.collection("reviews")
                .onSnapshot(async (querySnapShot) => {
                    let results = [];
                    querySnapShot.forEach((doc) => {
                        results.push(doc.data());
                    });
                    results.sort((a, b) => b.created_at - a.created_at);
                    await dispatch(getReviewsSuccess(results));
                })
        } catch (error) {
            dispatch(getReviewsFailure(error))
        }
    }
}

//get reviews for consultant profile display
export const getReviews = (id) => {
    return async dispatch => {
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
            dispatch(getReviewsFailure(error))
        }
    }
}

//get reviews for client reviewpage display
export const getReviewedBy = (id) => {
    return async dispatch => {
        try {
            dispatch(loadBegin());
            db.collection("reviews")
                .where("reviewer_id", "==", id)
                .onSnapshot(async (querySnapShot) => {
                    let results = [];
                    querySnapShot.forEach((doc) => {
                        results.push(doc.data());
                    });
                    results.sort((a, b) => b.created_at - a.created_at);
                    console.log('=====showing getReviewedBy results ======')
                    console.log(results)
                    console.log('=====showing results ======')
                    await dispatch(getReviewsSuccess(results));
                })
        } catch (error) {
            dispatch(getReviewsFailure(error))
        }
    }
}

export const getReviewByUID = (id) => {
    return async dispatch => {
        try {
            dispatch(loadBegin());
            db.collection("reviews")
                .where("uid", "==", id)
                .onSnapshot(async (querySnapShot) => {
                    let results = [];
                    querySnapShot.forEach((doc) => {
                        results.push(doc.data());
                    });
                    console.log('=====showing getReviewByUID results ======')
                    console.log(results)
                    console.log('=====showing results ======')
                    await dispatch(getSingleReviewSuccess(results));
                })
        } catch (error) {
            dispatch(getReviewsFailure(error))
        }
    }
}

export const updateReview = (id, rating, text) => {
    return async (dispatch) => {
      dispatch(loadBegin());
      const ref = db.collection("reviews").doc(id);
      ref.update({
        comment: text,
        rating: rating
      }).then((result) => {
        dispatch(updateReviewSuccess(result));
      }).catch((error) => {
        dispatch(updateReviewFailure(error));
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

//GET REVIEWS STATUS
export const getReviewsSuccess = (results) => ({
    type: "GET_REVIEWS_SUCCESS",
    payload: { results }
});

export const getSingleReviewSuccess = (single_review) => ({
    type: "GET_SINGLE_REVIEW_SUCCESS",
    payload: { single_review }
});

export const getReviewsFailure = (error) => ({
    type: "GET_REVIEWS_FAILURE",
    payload: { error }
})

export const updateReviewSuccess = (results) => ({
    type: "UPDATE_REVIEW_SUCCESS",
    payload: { results }
});

export const updateReviewFailure = (error) => ({
    type: "UPDATE_REVIEW_FAILURE",
    payload: { error }
})