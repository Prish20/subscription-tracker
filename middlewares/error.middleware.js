/**
 * @description This is a global error handling middleware that catches errors and sends a formatted JSON response.
 * It handles specific Mongoose errors like CastError, duplicate key errors (code 11000), and ValidationErrors,
 * setting appropriate status codes and messages.  If the error is not a specific Mongoose error, it defaults
 * to a 500 Internal Server Error.
 * @param {Error} err - The error object.
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {NextFunction} next - The Express next middleware function.
 */
const errorMiddleware = (err, req, res, next) => {
    try {
        let error = { ...err };
        error.message = err.message;
        console.error(err);

        if (err.name === "CastError") {
            const message = "Resource not found";
            error = new Error(message);
            error.statusCode = 404;
        }

        if (err.code === 11000) {
            const message = "Duplicate field value entered";
            error = new Error(message);
            error.statusCode = 400;
        }

        if (err.name === "ValidationError") {
            const message = Object.values(err.errors).map((value) => value.message);
            error = new Error(message);
            error.statusCode = 400;
        }

        res.status(error.statusCode || 500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    } catch (error) {
        next(error);
    }
};

export default errorMiddleware;
