import User from "../models/User.js";

class AuthRepository {
  async createUser(userData) {
    return User.create(userData);
  }

  async findByEmail(email) {
    return User.findOne({
      email,
      isDeleted: false
    }).select("+password");
  }

  async findById(userId) {
    return User.findOne({
      _id: userId,
      isDeleted: false
    }).select("-password");
  }

  async updateLastLogin(userId) {
    return User.findByIdAndUpdate(
      userId,
      {
        lastLoginAt: new Date()
      },
      {
        new: true
      }
    );
  }
}

export default new AuthRepository();
