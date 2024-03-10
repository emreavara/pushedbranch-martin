function createError(statusCode, message) {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
}


const handleNotFound = (req, _res, next) => {
  const error = createError(404, `Route ${req.originalUrl} not found`);
  next(error);
}

const handleError = (err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }

  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.statusCode = (statusCode)
  res.json({
    message: message,

    stack: process.env.NODE_ENV === "production" ? undefined : err.stack
  });

}


export { handleNotFound, handleError, createError };
