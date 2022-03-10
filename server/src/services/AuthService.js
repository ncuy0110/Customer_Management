const userRepo = require('../repositories/UserRepository');
const hashPassword = require('../helpers/hashPassword');
const generateToken = require('../helpers/generateToken');
const checkPassword = require('../helpers/checkPassword');

class AuthService{
    async register({username, password, name, address, phone}) {
        const user = await userRepo.findUserByUsername({username});
        if(user)
            return {
                status: 400,
                error: 1,
                message: 'username_is_existed',
                data: null
            }
        const hashPass = await hashPassword(password);
        console.log(hashPass);
        const newUserRegister = await userRepo.register({username, password: hashPass, name, address, phone});
        if(!newUserRegister)
            return {
                status: 400,
                error: 2,
                message: 'register_failed',
                data: null
            }

        const token = await generateToken(newUserRegister);

        return {
            status: 200,
            error: 0,
            message: 'register_successfully',
            data: {
                username: username,
                name: name,
                address: address,
                phone: phone,
                accessToken: token
            }
        }
    }
    async login({username, password}) {
        const user = await userRepo.findUserByUsername({username});
        if(!user)
            return {
                status: 40001,
                error: 1,
                message: 'username_not_found_or_password_is_incorrect',
                data: null
            }

        if(!checkPassword(password, user.password))
            return {
                status: 40001,
                error: 1,
                message: 'username_not_found_or_password_is_incorrect',
                data: null
            }

        const token = generateToken(user);

        return {
            status: 200,
            error: 0,
            message: 'login_success',
            data: {
                username: user.username,
                name: user.name,
                address: user.address,
                phone: user.phone,
                accessToken: token
            }
        }

    }
}

module.exports = new AuthService();