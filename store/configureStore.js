import { applyMiddleware, createStore, combineReducers } from 'redux';
import appointmentsReducer from '../reducers/appointments';
import usersReducer from '../reducers/users';
import thunk from "redux-thunk";

export default () => {
    // Store Creation
    const store = createStore(
        combineReducers({
            appointments: appointmentsReducer,
            users: usersReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}
