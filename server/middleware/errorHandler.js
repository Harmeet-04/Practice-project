const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCod : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR: res.json({
            title: "Validation Failed",
            message: err.message,
            stackTrace: err.stack,
        });
            break;
        case constants.NOT_FOUND: res.json({
            title: "Not Found",
            message: err.message,
            stackTrace: err.stac,
        });
        case constants.UNAUTHORIZED: res.json({
            title: "Unauthorizated",
            message: err.message,
            stackTrace: err.stack,
        });
        case constants.SERVER_ERROR: res.json({
            title: "Server Error",
            message: err.message,
            stackTrace: err.stack,
        });
        default:
            console.log("No error, All Good!");
            break;
    }
};
module.exports = errorHandler;