const customerService = require('../services/CustomerService');

class CustomerController {
    async getAllCustomer(req, res) {
        try{
            const userId = req.payload.id;
            const response = await customerService.getAllCustomer(userId);
            return res.status(200).json(response);
        }catch (err){
            console.log(err);
            return res.status(500).json({
                status: 500,
                error: 1,
                message: err.message,
                data: null
            });
        }
    }

    async findCustomerById(req, res) {
        try{
            const id = req.params.id;
            const response = await customerService.findCustomerById(id);
            return res.status(200).json(response);
        }catch (err){
            console.log(err);
            return res.status(500).json({
                status: 500,
                error: 1,
                message: err.message,
                data: null
            })
        }
    }

    async createCustomer(req, res) {
        try{
            const userId = req.payload.id;
            const {name, address, gender, birthday, job_title, phone} = req.body;
            const response = await customerService.createCustomer({name, address, gender, birthday, job_title, phone, userId});
            return res.status(200).json(response);
        }catch (err){
            console.log(err);
            return res.status(500).json({
               status: 500,
               error: 1,
               message: err.message,
               data: null
            });
        }
    }

    async updateCustomer(req, res) {
        try{
            const id = req.params.id;
            const user_id = req.payload.id;
            const {name, address, gender, birthday, job_title, phone} = req.body;
            const response = await customerService.updateCustomer({id, name, address, gender, birthday, job_title, phone, user_id});
            return res.status(200).json(response);
        }catch(err){
            console.log(err);
            return res.status(500).json({
                status: 500,
                error: 1,
                message: err.message,
                data: null
            })
        }
    }

    async deleteCustomer(req, res) {
        try {
            const id = req.params.id;
            const user_id = req.payload.id;
            const response = await customerService.deleteCustomer({id, user_id});
            return res.status(200).json(response);
        }catch (err){
            console.log(err);
            return res.status(500).json({
                status: 500,
                error: 1,
                message: err.message,
                data: null
            });
        }
    }

    async searchCustomer(req, res) {
        try{
            const {name} = req.body;
            const user_id = req.payload.id;
            const response = await customerService.searchCustomer({name, user_id});
            return res.status(200).json(response);
        } catch (err){
            console.log(err);
            return res.status(500).json({
                status: 500,
                error: 1,
                message: err.message,
                data: null
            });
        }
    }
}



module.exports = new CustomerController();