class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = null
  ) {
    super(message);

    this.success = false;
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

export default ApiError;