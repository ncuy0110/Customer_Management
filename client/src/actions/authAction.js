import {LOGIN_SUCCESS} from '../constants/authConstants';

export const loginSuccess = ({token, username}) => ({
    type: LOGIN_SUCCESS,
    payload: {
        token: token,
        username: username
    }
});