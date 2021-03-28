const reducerDefaultState = {
    loading: false,
    error: null,
    current_notifs: {},
    notifs: {},
    notif: {},
    all_notifs: [],
}

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'ADD_NOTIF_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                notif: action.payload.notif
            };
        case 'ADD_NOTIF_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.notif
            };
        case 'GET_NOTIFS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                notifs: action.payload.notifs
            };
        case 'GET_CURRENT_NOTIFS_SUCCESS':
            return {
                ...state,
                loading: false,
                error: null,
                current_notifs: action.payload.current_notifs
            };
        case 'GET_NOTIFS_FAILURE':
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}