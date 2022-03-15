const { validationResult } = require("express-validator");

const verifyValidators = (req, res, next) => {
    try {
        validationResult(req).throw();
        next()
    } catch (err) {
        res.status(400).json(err);
    }
}

const buildValidators = (handlers) => {
    return [...handlers, verifyValidators]
}

module.exports = buildValidators