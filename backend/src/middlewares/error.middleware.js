import logger from "../config/logger.js";
import multer from "multer";

const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;

  logger.error({
    requestId: req.requestId,
    method: req.method,
    url: req.originalUrl,
    statusCode,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined
  });

  if (err instanceof multer.MulterError) {
    err.statusCode = 400;

    if (err.code === "LIMIT_FILE_SIZE") {
      err.message = "File size cannot exceed 5MB";
    }
  }

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message: err.message || "Internal Server Error",
    errors: err.errors || null,
    requestId: req.requestId
  });
};

export default errorMiddleware;
