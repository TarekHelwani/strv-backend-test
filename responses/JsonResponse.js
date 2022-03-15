const success = (params) => {
    return {
        metadata: {
            status: true,
            statusCode: 200,
        },
        message: params.message || "Success",
        data: params.data
    };
}


module.exports = success