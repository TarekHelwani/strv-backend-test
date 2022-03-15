const express = require('express')
const router = express.Router()
const contactController = require('../../controllers/contactController')
const { check } = require("express-validator");
const buildValidators = require("../validation/validation");

const contactValidator = buildValidators([
    check('firstName').isString(),
    check('lastName').isString(),
    check('phoneNumber').isMobilePhone('any'),
    check('address').isString()
])

router.post('/create', ...contactValidator,
    /* 	#swagger.tags = ['Contact']
        #swagger.description = 'Endpoint to add a contact' */

    /*	#swagger.parameters['obj'] = {
            in: 'body',
            required: true,
            schema: { $ref: '#/definitions/Contact' }
    } */
    contactController.addNewContact)

module.exports = router