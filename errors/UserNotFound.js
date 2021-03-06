class UserNotFound extends Error {
    constructor (message) {
        super(message)
        Object.setPrototypeOf(this, new.target.prototype)
        Error.captureStackTrace(this, this.constructor);
        this.name = this.constructor.name
        this.status = 404
    }

    statusCode() {
        return this.status
    }
}

module.exports = UserNotFound