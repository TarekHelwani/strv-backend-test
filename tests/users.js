const chai = require('chai')
const chaiHttp = require('chai-http');
const User = require('../models/User')
const { faker } = require('@faker-js/faker');
const server = require('../server')

// Assertion
chai.should()

chai.use(chaiHttp);

describe('Users API', () => {

    const user = {
        email: faker.internet.email(),
        password: faker.internet.password()
    }

    describe('POST /api/users/register', () => {
        it('Register a new user.', function (done) {
            chai.request(server)
                .post('/api/users/register')
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('message')
                        .eq('Success')
                    response.body.should.have.property('data')
                        .should.be.a('object')
                    response.body.data.user.should.have.property('email').eq(user.email)
                    response.body.data.should.have.property('accessToken')
                })
            done()
        });
    })

    describe('POST /api/users/login', () => {
        it('Login a user.', function (done) {
            console.log(user)
            chai.request(server)
                .post('/api/users/register')
                .send(user)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                    response.body.should.have.property('message')
                        .eq('Success')
                    response.body.should.have.property('data')
                        .should.be.a('object')
                    response.body.data.should.have.property('accessToken')
                })
            done()
        });
    })
})