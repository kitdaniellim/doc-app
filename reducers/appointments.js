const reducerDefaultState = {
    loading: false,
    error: null,
    items: [],
    item: {}
}

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
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
        default:
            return state;
    }
}