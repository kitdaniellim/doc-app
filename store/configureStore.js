import { applyMiddleware, createStore, combineReducers } from 'redux';
import appointmentsReducer from '../reducers/appointments';
import thunk from "redux-thunk";

export default () => {
    // Store Creation
    const store = createStore(
        combineReducers({
            appointments: appointmentsReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}
