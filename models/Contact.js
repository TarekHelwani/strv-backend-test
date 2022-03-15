const admin = require('firebase-admin')

const db = admin.firestore()
const Contact = db.collection('contacts')

module.exports = Contact