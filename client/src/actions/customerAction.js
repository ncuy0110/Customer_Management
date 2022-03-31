import {ADD_CUSTOMER, SET_CUSTOMERS} from '../constants/customerConstants';

export const setCustomers = (items) => ({
    type: SET_CUSTOMERS,
    payload: items
});

export const addCustomer = (customer) => ({
    type: ADD_CUSTOMER,
    payload: customer
});