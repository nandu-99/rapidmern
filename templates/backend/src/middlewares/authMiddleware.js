const jwt = require('jsonwebtoken');
const { ErrorResponse } = require('../utils/errorHandler');

const protect = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return next(new ErrorResponse('Not authorized, no token', 401));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return next(new ErrorResponse('Not authorized, token failed', 401));
  }
};

module.exports = { protect };
