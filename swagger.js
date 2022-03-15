const swaggerAutogen = require('swagger-autogen')()

const doc = {
    info: {
        version: "1.0.0",
        title: "STRV Address Book API",
        description: "API made for STRV backend test"
    },
    schemes: [ 'http', 'https' ],
    definitions: {
        User: {
            email: 'tarek.helewani22@gmail.com',
            password: 'testing123'
        },
        Contact: {
            firstName: 'tarek',
            lastName: 'helwani',
            phoneNumber: '0991951584',
            address: 'Damascus,Syria'
        }
    }
}

const outputFile = './swagger-output.json'
const endpointsFiles = [ './startup/routes.js' ]

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    console.log('Documentation has been generated.')
})
