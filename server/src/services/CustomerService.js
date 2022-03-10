const customerRepo = require('../repositories/CustomerRepository');

class CustomerService {
    async getAllCustomer(userId){
        const customers = await customerRepo.getAllCustomer(userId);
        if(customers.length<1)
            return {
                status: 404,
                error: 1,
                message: 'customer_not_found',
                data: null
            }

        return {
            status: 200,
            error: 0,
            message: 'success',
            data: {
                customers: customers
            }
        }
    }

    async createCustomer({name, address, gender, birthday, job_title, phone, userId}){
        const customer = await customerRepo.create({name, address, gender, birthday, job_title, phone, userId});
        if(!customer)
            return {
                status: 400,
                error: 1,
                message: 'create_customer_failed',
                data: null
            }
        return {
            status: 200,
            error: 0,
            message: 'success',
            data: customer
        }
    }

    async updateCustomer({id, name, address, gender, birthday, job_title, phone, user_id}) {
        const result = await customerRepo.update({id, name, address, gender, birthday, job_title, phone, user_id});
        if(!result)
            return {
                status: 404,
                error: 1,
                message: 'customer_not_found',
                data: null
            }

        return {
            status: 200,
            error: 0,
            message: 'success',
            data: null
        }
    }

    async deleteCustomer({id, user_id}){
        const result = await customerRepo.delete({id, user_id});
        if(!result)
            return {
                status: 404,
                error: 1,
                message: 'customer_not_found',
                data: null
            }

        return {
            status: 200,
            error: 0,
            message: 'success',
            data: null
        }
    }
}

module.exports = new CustomerService();