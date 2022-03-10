const db = require('../models/index');

class UserRepository {
    async findUserByUsername({username}) {
        const user = await db.user.findOne({
            where: {
                username: username
            }
        });
        return user;
    }

    async register({username, password, name, address, phone}) {
        const newUserRegister = await db.user.create({username, password, name, address, phone});
        return newUserRegister;
    }
}

module.exports = new UserRepository();