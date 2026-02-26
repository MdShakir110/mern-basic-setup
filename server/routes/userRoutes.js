const express = require("express");
const { getUsers, createUser } = require("../controllers/userController");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

router
  .route("/")
  .get(getUsers) // Example without middleware
  .post(protect, createUser); // Example with middleware

module.exports = router;
