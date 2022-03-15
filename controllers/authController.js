const authService = require('./../services/authService')
const success = require("../responses/JsonResponse");

const register = async (req, res, next) => {
    try {
        const userInfo = await authService.register(req.body)
        res.send(success({ data: userInfo }))
    } catch (error) {
        next(error)
    }
}

const login = async (req, res, next) => {
    try {
        const accessToken = await authService.login(req.body)
        res.send(success({ data: { accessToken } }))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    register,
    login
}
