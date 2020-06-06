import Firebase, { db } from '../config/Firebase';

//USER PASSWORD RECOVERY OPERATION
export const recoverPassword = (token) => {
    return async dispatch => {
        try {
            dispatch(loadBegin());
            //insert db query and operations here
            await Firebase.auth().sendPasswordResetEmail(token)
                .then(() => {
                    const result = {
                        message: "Email has been sent for " + token + ". \n\n Please check the email for instructions in resetting the password."
                    }
                    dispatch(recoverPassSuccess(result));
                })
                .catch((error) => {
                    dispatch(recoverPassFailure(error));
                });
        } catch (error) {
            dispatch(recoverPassFailure(error));
        }
    }
}

//CALL BEFORE EVERY OPERATION
export const loadBegin = () => ({
    type: 'LOAD_BEGIN'
});

//USER PASSWORD RECOVERY STATUS
export const recoverPassSuccess = result => ({
    type: 'RECOVER_PASS_SUCCESS',
    payload: { result }
});

export const recoverPassFailure = error => ({
    type: 'RECOVER_PASS_FAILURE',
    payload: { error }
});