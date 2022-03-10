const authService = require('../services/AuthService');

class AuthController{
    async register(req, res) {
        try{
            const {username, password, name, address, phone} = req.body;
            const response = await authService.register({username, password, name, address, phone});
            return res.status(200).json(response);
        } catch (err) {
            console.log(err);
            return res.status(500).json({
                status: 500,
                error: 1,
                message: err.message,
                data: null
            })
        }
    }

    async login(req, res) {
        try{
            const {username, password} = req.body;
            const response = await authService.login({username, password});
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
}

module.exports = new AuthController();