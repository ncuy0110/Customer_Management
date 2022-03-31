import {combineReducers, createStore} from 'redux';
import authReducer from './auth';
import customerReducer from './customer';

const reducer = combineReducers({
    auth: authReducer,
    customer: customerReducer
});

export default createStore(reducer);