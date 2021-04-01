import { LOGIN, LOGOUT, SIGNUP, EDIT_PROFILE, UPDATE_TOKEN, UPDATE_USER_TYPE, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_FULL_NAME, UPDATE_MOBILE_NUMBER, UPDATE_BIRTH_DAY, UPDATE_CURRENT_USER, UPDATE_USER_LIC, UPDATE_USER_SPECIALTY, UPDATE_USER_SUB_SPECIALTY, UPDATE_OFFICE_LOCATION, UPDATE_OFFICE_HOURS } from '../actions/users';
import { GET_ALL_CONSULTANT, GET_CONSULTANT, UPDATE_PROFILE_IMAGE, UPDATE_OFFICE_IMAGE, UPDATE_OFFICE_DETAILS, UPDATE_LOCATION_DETAIL, UPDATE_TO_HOUR_DETAIL, UPDATE_FROM_HOUR_DETAIL, UPDATE_DAY_DETAIL } from '../actions/users';

const reducerDefaultState = {
    loading: false,
    error: null,
    items: [],
    item: {},
    consultant: [],

    add_office: [],
    location: {},
    to_hour: {},
    from_hour: {},
    token: '',
    email: '',
    password: '',
    fullName: '',
    birthDay: '',
    userType: undefined,
    current_user: undefined,
    userLIC: '',
    userSpecialty: '',
    userSubSpecialty: '',
    userOfficeLocation: [],
    profilePicture: {},
    officeImage: {},
    office_details: [],
    officeHours: []
}

export default (state = reducerDefaultState, action) => {
    switch (action.type) {
        case 'LOAD_BEGIN':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'LOAD_END':
            return {
                ...state,
                loading: false,
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
            return {
                ...state,
                loading: false,
                singleConsultant: action.payload.singleConsultant
            };
        case UPDATE_PROFILE_IMAGE:
            return { ...state, profilePicture: action.payload.uri }
        case UPDATE_OFFICE_IMAGE:
            return { ...state, officeImage: action.payload.uri }
        case UPDATE_LOCATION_DETAIL:
            return { ...state, location: action.payload.user_location }
        case UPDATE_TO_HOUR_DETAIL:
            return { ...state, to_hour: action.payload.date }
        case UPDATE_FROM_HOUR_DETAIL:
            return { ...state, from_hour: action.payload.date }
        case UPDATE_DAY_DETAIL:
            return { ...state, day: action.payload.user_location }
        case GET_ALL_CONSULTANT:
            return { ...state, loading: false, consultant: action.payload.consultant }
        case LOGIN:
            return { ...state, loading: false, user: action.payload.user }
        case LOGOUT:
            return { state: reducerDefaultState }
        case SIGNUP:
            return { ...state, user: action.payload.user }
        case EDIT_PROFILE:
            return { ...state, loading: false, user: action.payload.user }
        case UPDATE_EMAIL:
            return { ...state, email: action.payload.email }
        case UPDATE_PASSWORD:
            return { ...state, password: action.payload.password }
        case UPDATE_FULL_NAME:
            return { ...state, fullName: action.payload.fullName }
        case UPDATE_MOBILE_NUMBER:
            return { ...state, mobileNumber: action.payload.mobileNumber }
        case UPDATE_BIRTH_DAY:
            return { ...state, birthDay: action.payload.birthday }
        case UPDATE_USER_TYPE:
            return { ...state, userType: action.payload.userType }
        case UPDATE_CURRENT_USER:
            return { ...state, loading: false, current_user: action.payload.current_user }
        case UPDATE_USER_LIC:
            return { ...state, userLIC: action.payload.userLIC }
        case UPDATE_USER_SPECIALTY:
            return { ...state, userSpecialty: action.payload.userSpecialty }
        case UPDATE_USER_SUB_SPECIALTY:
            return { ...state, userSubSpecialty: action.payload.userSubSpecialty }
        case UPDATE_OFFICE_LOCATION:
            return { ...state, userOfficeLocation: action.payload }
        case UPDATE_OFFICE_HOURS:
            return { ...state, officeHours: action.payload.officeHours }
        case UPDATE_OFFICE_DETAILS:
            return { ...state, office_details: action.payload.office_details }
        case UPDATE_TOKEN:
            return { ...state, token: action.payload.token }
        default:
            return state;
    }
}