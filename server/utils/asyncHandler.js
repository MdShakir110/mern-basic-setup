// Simple wrapper for async express handlers to handle errors without try-catch everywhere
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

module.exports = asyncHandler;
