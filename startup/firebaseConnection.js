const admin = require('firebase-admin')
const serviceAccount = require('./../config/firebaseConfig.json')

module.exports = function () {
    try {
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount)
        })
    } catch (err) {
        console.log(err)
    }
}
