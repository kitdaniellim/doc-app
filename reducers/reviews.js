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
        case 'ADD_REVIEW_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                item: action.payload.result
            };
        case 'ADD_REVIEW_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'GET_REVIEWS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                items: action.payload.results
            };
        case 'GET_REVIEWS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}