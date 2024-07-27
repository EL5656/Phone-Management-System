const { constants } = require("../constants");

const errorHandler = (err, req, res, next) => {
   
    const statusCode = err.statusCode;

    // Set response status code
    err.status(statusCode);

    // Define error response structure
    const errorResponse = {
        title: getErrorTitle(statusCode),
        message: err.message,
        stackTrace: err.stack
    };

    // Send JSON response
    res.json(errorResponse);
};

// Function to determine error title based on status code
const getErrorTitle = (statusCode) => {
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            return "Validation Failed";
        case constants.NOT_FOUND:
            return "Not Found";
        case constants.FORBIDDEN:
            return "Forbidden";
        case constants.UNAUTHORISED:
            return "Unauthorized";
        case constants.SERVER_ERROR:
            return "Server Error";
        default:
            return "No Error";
    }
};

module.exports = errorHandler;
