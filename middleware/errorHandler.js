const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {

    const statusCode = res.statusCode;
    let title;

    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            title = "Validation Failed";
            break;
        case constants.NOT_FOUND:
            title = "Not Found";
            break;
        case constants.FORBIDDEN:
            title = "Forbidden";
            break;
        case constants.UNAUTHORISED:
            title = "Unauthorized";
            break;
        case constants.SERVER_ERROR:
            title = "Server Error";
            break;
        default:
            title = "Unknown Error";
            break;
    }

    // Define error response structure
    const errorResponse = {
        title: title,
        message: err.message,
        stackTrace: err.stack
    };

    // Send JSON response with the appropriate status code
    res.json(errorResponse); 
    res.status(statusCode);
    
};

module.exports = errorHandler;
