const errorHandler = (err, req, res, next) => {

    const code = 'statusCode' in err ? err.statusCode() : 500
    const message = 'message' in err ? err.message : 'Something went wrong'

    res.status(code).send({
        metadata: {
            status: false,
            statusCode: code
        },
        error: {
            message
        }
    });
}

module.exports = errorHandler