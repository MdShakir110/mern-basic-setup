const User = require("../models/User");

/**
 * @desc Get all users from database
 */
exports.getAllUsers = async () => {
  return await User.find();
};

/**
 * @desc Register a new user
 */
exports.registerUser = async (userData) => {
  return await User.create(userData);
};
