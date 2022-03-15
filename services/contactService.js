const Contact = require('../models/Contact')

const addNewContact = async (contact) => {
    try {
        await Contact.add(contact)
        return 'Contact has been added.'
    } catch (err) {
        return err.message
    }
}

module.exports = {
    addNewContact
}

