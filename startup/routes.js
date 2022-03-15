const express = require("express");
const verifyJWT = require("../middlewares/verifyJWT");
const errorHandler = require("../middlewares/ٌerrorHandler");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require('../swagger-output.json')

module.exports = function (app) {
    // global middlewares
    app.use(express.urlencoded({ extended: false }))
    app.use(express.json())

    app.use('/api/users', require('../routes/api/users'))
    app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

    // protected routes after this middleware
    app.use(verifyJWT)
    app.use('/api/contacts', require('../routes/api/contacts'))


    app.all('*', (req, res) => {
        res.sendStatus(404).withMessage('404 Not found.')
    })

    app.use(errorHandler)
}