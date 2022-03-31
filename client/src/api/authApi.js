import axiosClient from './axiosClient';

const authApi = {
    login: async ({username, password}) => {
        const url = '/auth/login';
        return await axiosClient.post(url, {username, password});
    },

    register: async ({username, password, name, address, phone}) => {
        const url = '/auth/register';
        return await axiosClient.post(url, {username, password, name, address, phone})
    }
}

export default authApi;