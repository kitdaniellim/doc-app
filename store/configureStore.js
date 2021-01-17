import { applyMiddleware, createStore, combineReducers } from 'redux';
import appointmentsReducer from '../reducers/appointments';
import usersReducer from '../reducers/users';
import reviewsReducer from '../reducers/reviews';
import thunk from "redux-thunk";

export default () => {
    // Store Creation
    const store = createStore(
        combineReducers({
            appointments: appointmentsReducer,
            users: usersReducer,
            reviews: reviewsReducer,
        }),
        applyMiddleware(thunk)
    );
    return store;
}
