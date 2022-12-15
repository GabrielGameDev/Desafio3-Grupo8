const { UnauthorizedError } = require('express-jwt');
const { ValidationError } = require('express-validation');

module.exports = (err, req, res, next) => {
    if(err instanceof ValidationError) {
        return res.status(err.statusCode).json(err);
    }

    if(err instanceof UnauthorizedError) {
        return res.status(err.status).json(err);
    }

    return res.status(500).json(err);
};