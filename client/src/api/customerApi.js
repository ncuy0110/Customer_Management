import axiosClient from './axiosClient';

const customerApi = {
    getAll: (token) => {
        const url = '/customers';
        return axiosClient.get(url, {headers: {Authorization: token}})
    },
    getById: (id) => {
        const url = '/customers/' + id;
        return axiosClient.get(url, {
            headers: {
                Authorization: localStorage.getItem('accessToken')
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
    update: (id, token, name, address, gender, birthday, job_title, phone) => {
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
                Authorization: token
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