import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import uploadService from "../services/upload.service.js";

export const uploadImage = asyncHandler(async (req, res) => {
  const result = await uploadService.uploadImage(req.file);

  return res
    .status(200)
    .json(
      new ApiResponse(200, "Image uploaded successfully", result, req.requestId)
    );
});
