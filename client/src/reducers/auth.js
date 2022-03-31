import {LOGIN_SUCCESS} from '../constants/authConstants';

const initialState = {
    token: null,
    username: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case LOGIN_SUCCESS:
            localStorage.setItem('accessToken', action.payload.token);
            localStorage.setItem('username', action.payload.username);
            return {
                ...state,
                token: action.payload.token,
                username: action.payload.username
            }
        default:
            return state
    }
}

export default reducer;