const contactService = require("../services/contactService");
const success = require("../responses/JsonResponse");

const addNewContact = async (req, res, next) => {
    try {
        const message = await contactService.addNewContact(req.body)
        res.send(success({ message: message }))
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addNewContact
}