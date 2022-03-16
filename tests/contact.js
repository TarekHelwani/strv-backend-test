const chai = require('chai')
const chaiHttp = require('chai-http');
const { faker } = require('@faker-js/faker');
const server = require('../server')
const { createJWTToken } = require("../services/authService");

// Assertion
chai.should()
chai.use(chaiHttp);

describe('Contacts API', () => {
    it('POST /contacts/register --> should add a contact to firebase',  function (done) {
        const contact = {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            address: faker.address.streetAddress(),
            phoneNumber: faker.phone.phoneNumberFormat()
        }
        const token = createJWTToken(faker.internet.email())
        chai.request(server)
            .post('/api/contacts/create')
            .auth(token, { type: 'bearer' })
            .send(contact)
            .end((err, response) => {
                response.should.have.status(200)
                response.body.should.be.a('object')
                response.body.should.have.property('message')
                    .eq('Contact has been added.')
            })
        done()
    })
})