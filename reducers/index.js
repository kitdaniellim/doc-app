/* Implementing reducers
/* Programmer: Eldrin Jake Augusto 
/* Date: May 2020 */
import { combineReducers } from 'redux';
import { LOGIN, SIGNUP, UPDATE_EMAIL, UPDATE_PASSWORD, UPDATE_FULL_NAME, UPDATE_MOBILE_NUMBER, UPDATE_BIRTH_DAY, UPDATE_USER_TYPE, UPDATE_USER_LIC, UPDATE_USER_SPECIALTY, UPDATE_USER_SUB_SPECIALTY, UPDATE_OFFICE_LOCATION, UPDATE_OFFICE_HOURS } from '../actions/user';
import { GET_ALL_CONSULTANT, GET_REVIEWS, GET_CONSULTANT, UPDATE_PROFILE_IMAGE, UPDATE_OFFICE_IMAGE, UPDATE_OFFICE_DETAILS, UPDATE_LOCATION_DETAIL, UPDATE_TO_HOUR_DETAIL, UPDATE_FROM_HOUR_DETAIL , UPDATE_DAY_DETAIL} from '../actions/consultant';

const initialConsultant = [{
    birthDay: "April012020",
    email: "initial@yahoo.com",
    emailVerified: false,
    fullName: "test",
    mobileNumber: "1",
    officeLocation: "City",
    office_details: {
        office_day: ['Monday'],
        office_hour_from: "0930am",
        office_hour_to: "0301pm"
    },
    profile_picture: "test.jpg",
    userLIC: ["12121"],
    userSpecialty: "Doctor",
    userType: "CONSULTANT"
        
}]
const user = ( state = {}, action ) => {
    switch(action.type){
        case LOGIN:
            //console.log("LOGIB");
            //console.log(action.payload)
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
            return state
    }
}

const consultant = ( state = {}, action) =>
{
   
    switch(action.type){
      
        case GET_ALL_CONSULTANT:
            return action.payload
     
        default:
            return state
    }

}

const singleConsultant = ( state = [], action) =>
{
    //console.log("putanes11")
    //console.log(action.type);
    switch(action.type){
      
        case GET_CONSULTANT:
            //console.log("swtich sa consultant")
            //console.log(action.payload);
            //return  {...state,  consultant: action.payload }
            return  action.payload 
        case GET_REVIEWS:
            return { reviews_users: action.payload }    
        case UPDATE_PROFILE_IMAGE:
            return state.map((value, i ) => {
                if(action.payload.index === i ){
                    return value    
                }
            })
            //return {...state, profilePicture: action.payload }
        case UPDATE_OFFICE_IMAGE:
            return {...state, officeImage: action.payload }
        case UPDATE_OFFICE_DETAILS:
            // state = state.slice();
            // state.push(action.payload);
            return  { ...state, add_office: [...state.arr, action.payload]}
        case UPDATE_LOCATION_DETAIL:
            return {... state, location: action.payload }
            //return  { ...state, arr: [...state.arr, action.payload]}
        case UPDATE_TO_HOUR_DETAIL:
            return {...state, to_hour: action.payload }
            case UPDATE_FROM_HOUR_DETAIL:
            return {...state, from_hour: action.payload }
        case UPDATE_DAY_DETAIL:
            return {...state, day: action.payload}
        default:
            return state
    }
}


const rootReducer = combineReducers ({
    user, consultant, singleConsultant
})

export default rootReducer;