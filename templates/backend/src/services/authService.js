const bcrypt = require('bcryptjs');
const { ErrorResponse } = require('../utils/errorHandler');
const userService = require('./userService'); 

const signupUser = async (name, email, password) => {
  const existingUser = await userService.getUserByEmail(email);
  if (existingUser) {
    throw new ErrorResponse('User already exists, please sign in', 400);
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await userService.createUser(name, email, hashedPassword);
  return newUser;
};

const loginUser = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ErrorResponse('User not found', 404);
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new ErrorResponse('Invalid credentials', 401);
  }

  return user;
};

module.exports = {
  signupUser,
  loginUser,
};
