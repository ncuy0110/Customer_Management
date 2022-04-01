import axiosClient from './axiosClient';
import {ACCESS_TOKEN} from '../constants/authConstants';

const customerApi = {
    getAll: () => {
        const url = '/customers';
        return axiosClient.get(url, {headers: {Authorization: localStorage.getItem(ACCESS_TOKEN)}})
    },
    getById: (id) => {
        const url = '/customers/' + id;
        return axiosClient.get(url, {
            headers: {
                Authorization: localStorage.getItem(ACCESS_TOKEN)
            }
        });
    },
    create: ({token, name, address, gender, birthday, job_title, phone}) => {
        const url = '/customers';
        return axiosClient.post(url, {
            name, address, gender, birthday, job_title, phone
        }, {
            headers: {Authorization: token}
        })
    },
    update: ({id, name, address, gender, birthday, job_title, phone}) => {
        const url = '/customers/' + id;
        return axiosClient.put(url, {
            name,
            address,
            gender,
            birthday,
            job_title,
            phone
        }, {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        });
    },
    delete: (id, token) => {
        const url = '/customers/' + id;
        return axiosClient.delete(url, {
            headers: {
                Authorization: token
            }
        });
    },
    search: (name) => {
        const url = '/customers/search';
        return axiosClient.post(url, {name}, {
            headers: {
                Authorization: localStorage.getItem('accessToken')
            }
        });
    }
}

export default customerApi;