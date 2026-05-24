import authRepository from "../repositories/auth.repository.js";
import ApiError from "../utils/ApiError.js";
import { HTTP_STATUS } from "../constants/httpStatus.js";

class AuthService {
  async register(data) {
    const existingUser =
      await authRepository.findByEmail(
        data.email
      );

    if (existingUser) {
      throw new ApiError(
        HTTP_STATUS.CONFLICT,
        "Email already exists"
      );
    }

    const user =
      await authRepository.createUser(data);

    const createdUser =
      await authRepository.findById(
        user._id
      );

    return createdUser;
  }

  async login(email, password) {
    const user =
      await authRepository.findByEmail(
        email
      );

    if (!user) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHORIZED,
        "Invalid credentials"
      );
    }

    const isPasswordValid =
      await user.comparePassword(
        password
      );

    if (!isPasswordValid) {
      throw new ApiError(
        HTTP_STATUS.UNAUTHORIZED,
        "Invalid credentials"
      );
    }

    const token =
      user.generateAccessToken();

    await authRepository.updateLastLogin(
      user._id
    );

    const userObject = user.toObject();

    delete userObject.password;

    return {
      token,
      user: userObject
    };
  }

  async getProfile(userId) {
    const user =
      await authRepository.findById(
        userId
      );

    if (!user) {
      throw new ApiError(
        HTTP_STATUS.NOT_FOUND,
        "User not found"
      );
    }

    return user;
  }
}

export default new AuthService();