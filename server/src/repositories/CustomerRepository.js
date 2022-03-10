const db = require('../models/index');

class CustomerRepository {
    async getAllCustomer(userId) {
        const customers = await db.customer.findAll({
            where: {
                user_id: userId
            },
            attributes: {exclude: ['user_id']}
        });
        return customers;
    }

    async create({name, address, gender, birthday, job_title, phone, userId}) {
        const newCustomer = await db.customer.create({name, address, gender, birthday, job_title, phone, user_id: userId});
        return newCustomer;
    }

    async update({id, name, address, gender, birthday, job_title, phone, user_id}) {
        return await db.customer.update(
            {
                name: name,
                address: address,
                gender: gender,
                birthday: birthday,
                job_title: job_title,
                phone: phone
            },
            {
                where: {
                    id: id,
                    user_id: user_id
                }
            }
        )
    }

    async delete({id, user_id}){
        return await db.customer.destroy({
            where: {
                user_id: user_id,
                id: id
            }
        });
    }

    // async search(name, user_id){
    //     return await db.customer.findAll({
    //         where: {
    //             name: {
    //                 [Sequelize.Op.like]: `%${name}%`
    //             },
    //             user_id: user_id
    //         }
    //     });
    // }
}

module.exports = new CustomerRepository();