const express = require('express')
const router = express.Router()
const authController = require('../../controllers/authController')
const { check } = require("express-validator");
const buildValidators = require('./../validation/validation')

const emailPasswordValidator = buildValidators([
    check('email').isEmail(),
    check('password').exists()
])

router.post('/register',...emailPasswordValidator,
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Endpoint to register a user' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/User' }
    } */

    authController.register)
router.post('/login',...emailPasswordValidator,
    /* 	#swagger.tags = ['User']
        #swagger.description = 'Log in a user' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/User' }
    } */
    authController.login)

module.exports = router