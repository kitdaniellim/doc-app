import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_FULL_NAME, UPDATE_MOBILE_NUMBER, UPDATE_BIRTH_DAY, UPDATE_USER_TYPE, UPDATE_USER_LIC, UPDATE_USER_SPECIALTY, UPDATE_USER_SUB_SPECIALTY, UPDATE_OFFICE_LOCATION, UPDATE_OFFICE_HOURS } from '../actions/users';
import { GET_ALL_CONSULTANT, GET_REVIEWS, GET_CONSULTANT, UPDATE_PROFILE_IMAGE, UPDATE_OFFICE_IMAGE, UPDATE_OFFICE_DETAILS, UPDATE_LOCATION_DETAIL, UPDATE_TO_HOUR_DETAIL, UPDATE_FROM_HOUR_DETAIL, UPDATE_DAY_DETAIL } from '../actions/users';

const reducerDefaultState = {
    loading: false,
    error: null,
    items: [],
    item: {},
    officeImage: {},
    add_office: [],
    location: {},
    to_hour: {},
    from_hour: {},
    email: '',
    password: '',
    fullName: '',
    birthDay: '',
    userType: '',
    userLIC: '',
    userSpecialty: '',
    userSubSpecialty: '',
    userOfficeLocation: '',
    officeHours: ''
}

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'RECOVER_PASS_SUCCESS':
            return {
                ...state,
                loading: false,
                item: action.payload.result
            };
        case 'RECOVER_PASS_FAILURE':
            return {
                ...state,
                loading: false,
                item: {},
                error: action.payload.error
            };
        case GET_CONSULTANT:
            return action.payload
        case GET_REVIEWS:
            return { reviews_users: action.payload }
        case UPDATE_PROFILE_IMAGE:
            return state.map((value, i) => {
                if (action.payload.index === i) {
                    return value
                }
            })
        case UPDATE_OFFICE_IMAGE:
            return { ...state, officeImage: action.payload }
        case UPDATE_OFFICE_DETAILS:
            return { ...state, add_office: [...state.arr, action.payload] }
        case UPDATE_LOCATION_DETAIL:
            return { ...state, location: action.payload }
        case UPDATE_TO_HOUR_DETAIL:
            return { ...state, to_hour: action.payload }
        case UPDATE_FROM_HOUR_DETAIL:
            return { ...state, from_hour: action.payload }
        case UPDATE_DAY_DETAIL:
            return { ...state, day: action.payload }
        case GET_ALL_CONSULTANT:
            return action.payload
        case LOGIN:
            return action.payload
        case SIGNUP:
            return action.payload
        case UPDATE_EMAIL:
            return { ...state, email: action.payload }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload }
        case UPDATE_FULL_NAME:
            return { ...state, fullName: action.payload }
        case UPDATE_MOBILE_NUMBER:
            return { ...state, mobileNumber: action.payload }
        case UPDATE_BIRTH_DAY:
            return { ...state, birthDay: action.payload }
        case UPDATE_USER_TYPE:
            return { ...state, userType: action.payload }
        case UPDATE_USER_LIC:
            return { ...state, userLIC: action.payload }
        case UPDATE_USER_SPECIALTY:
            return { ...state, userSpecialty: action.payload }
        case UPDATE_USER_SUB_SPECIALTY:
            return { ...state, userSubSpecialty: action.payload }
        case UPDATE_OFFICE_LOCATION:
            return { ...state, userOfficeLocation: action.payload }
        case UPDATE_OFFICE_HOURS:
            return { ...state, officeHours: action.payload }
        default:
            return state;
    }
}