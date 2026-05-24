import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";
import { uploadToCloudinary } from "../utils/cloudinary.util.js";
import { CLOUDINARY_FOLDERS } from "../constants/cloudinary.js";

class UploadService {
  async uploadImage(file, folder = CLOUDINARY_FOLDERS.POSTS) {
    if (!file) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, "Image file is required");
    }

    const result = await uploadToCloudinary(file.buffer, folder);

    return {
      publicId: result.public_id,
      url: result.secure_url
    };
  }

  async deleteImage(publicId) {
    await cloudinary.uploader.destroy(publicId);

    return true;
  }
}

export default new UploadService();
