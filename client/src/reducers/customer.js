import {ADD_CUSTOMER, SET_CURRENT_CUSTOMER, SET_CUSTOMERS} from '../constants/customerConstants';

const initialState = {
    items: [],
    current: null
}

const customerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CUSTOMERS:
            return {
                ...state,
                items: action.payload
            }
        case ADD_CUSTOMER:
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case SET_CURRENT_CUSTOMER:
            return {
                ...state,
                current: action.payload
            }
        default:
            return state;
    }
}

export default customerReducer;