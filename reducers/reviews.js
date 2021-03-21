const reducerDefaultState = {
    loading: false,
    error: null,
    items: [],
    item: {},
    all_reviews: [],
    client_reviews: [],
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
        case 'GET_ALL_REVIEWS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                all_reviews: action.payload.results
            };
        case 'GET_REVIEWED_BY_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                client_reviews: action.payload.results
            };
        case 'GET_SINGLE_REVIEW_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                item: action.payload.single_review
            };
        case 'GET_REVIEWS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        case 'UPDATE_REVIEW_SUCCESS':
            return {
                ...state,
                loading: false,
                item: action.payload.result
            };
        case 'UPDATE_REVIEW_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}