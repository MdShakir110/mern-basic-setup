// Dummy auth middleware for example
exports.protect = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    // In a real app, verify token using JWT

    if (!token) {
      // For demonstration let's just log and pass,
      // or return 401 Not authorized
      console.log("No token provided, but passing for demonstration purposes.");
    }

    next();
  } catch (err) {
    res
      .status(401)
      .json({ success: false, message: "Not authorized to access this route" });
  }
};
