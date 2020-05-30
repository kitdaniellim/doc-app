//USER PASSWORD RECOVERY OPERATION
export const recoverPassword = (token) => {
    return dispatch => {
        try {
            dispatch(loadBegin());
            //insert db query and operations here
            const result = {
                message: `DB result here using token: ${token}`
            };
            dispatch(recoverPassSuccess(result));
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