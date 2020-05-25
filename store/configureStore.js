import { applyMiddleware, createStore, combineReducers } from 'redux';
import usersReducer from '../reducers/users';
import thunk from "redux-thunk";

export default () => {
    // Store Creation
    const store = createStore(
        combineReducers({
            users: usersReducer
        }),
        applyMiddleware(thunk)
    );
    return store;
}