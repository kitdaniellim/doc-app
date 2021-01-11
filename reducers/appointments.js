const reducerDefaultState = {
    loading: false,
    error: null,
    items: [],
    item: {},
    files: []
}

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'GET_APPOINTMENTS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload.results
            };
        case 'GET_APPOINTMENTS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'BOOK_APPOINTMENT_SUCCESS':
            return {
                ...state,
                loading: false,
                item: action.payload.result
            };
        case 'BOOK_APPOINTMENT_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'GET_FILES_SUCCESS':
            return {
                ...state,
                loading: false,
                files: action.payload.results
            };
        case 'GET_FILES_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'UPDATE_APPOINTMENT_STATUS_SUCCESS':
            return {
                ...state,
                loading: false,
                item: action.payload.result
            };
        case 'UPDATE_APPOINTMENT_STATUS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'RESET_APPOINTMENTS':
            return {
                state: reducerDefaultState
            }
        default:
            return state;
    }
}
