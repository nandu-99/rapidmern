class ErrorResponse extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const handleError = (err, req, res, next) => {
  const message = err.message || "Server Error";
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message,
  });
};

module.exports = { ErrorResponse, handleError };
