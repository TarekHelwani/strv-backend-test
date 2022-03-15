const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const UserAlreadyRegistered = require("../errors/UserAlreadyRegistered");
const UserNotFound = require("../errors/UserNotFound");
const User = require('../models/User')


const register = async (user) => {
    let { email, password } = user
    // check if the user exists
    if (await userExists(user)) {
        throw new UserAlreadyRegistered('User has already been registered.')
    }

    // encrypt the password
    const hashedPassword = await hashPassword(password)
    let createdUser = await User.create({
        ...user,
        password: hashedPassword
    })

    // in order not to return password
    createdUser.password = undefined

    return {
        user: createdUser,
        accessToken: await createJWTToken(email)
    };
}

const userExists = async (user) => {
    const foundUser = await User.findOne({ email: user.email }).exec()
    if (! foundUser) {
        return false
    }
    return bcrypt.compare(user.password, foundUser.password);
}

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

const login = async (user) => {

    const { email } = user

    // check if the user exists
    if (! await userExists(user)) {
        throw new UserNotFound('User not found.')
    }

    // create JWT and return it
    return await createJWTToken(email)
}

const createJWTToken = (email) => {
    return jwt.sign(
        { "email": email },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: '7d' }
    )
}

module.exports = {
    register,
    login,
    createJWTToken
}