class ApiResponse {
  constructor(
    statusCode,
    message = "Success",
    data = null,
    requestId = null
  ) {
    this.success = true;
    this.statusCode = statusCode;
    this.message = message;
    this.data = data;
    this.requestId = requestId;
  }
}

export default ApiResponse;