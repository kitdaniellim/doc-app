//USER PASSWORD RECOVERY OPERATION
export const recoverPassword = () => {
    try {
        loadBegin();
        //insert db query and operations here
        const result = "DB result here";
        recoverPassSuccess(result);
    } catch (error) {
        recoverPassFailure(error);
    }
}

export const loadBegin = () => ({
    type: 'LOAD_BEGIN'
});

//USER PASSWORD RECOVERY STATUS
export const recoverPassSuccess = result => ({
    type: 'RECOVER_PASS_SUCCESS',
    payload: result
});

export const recoverPassFailure = error => ({
    type: 'RECOVER_PASS_FAILURE',
    payload: error
});