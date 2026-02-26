const asyncHandler = require("../utils/asyncHandler");
const userService = require("../services/userService");

// @desc    Get all users
// @route   GET /api/users
// @access  Public
exports.getUsers = asyncHandler(async (req, res, next) => {
  const users = await userService.getAllUsers();

  res.status(200).json({
    success: true,
    count: users.length,
    data: users,
  });
});

// @desc    Register new user
// @route   POST /api/users
// @access  Public
exports.createUser = asyncHandler(async (req, res, next) => {
  const user = await userService.registerUser(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});
