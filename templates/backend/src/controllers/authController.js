const authService = require('../services/authService');
const jwt = require('jsonwebtoken');

const signupUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  try {
    const newUser = await authService.signupUser(name, email, password);
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({
      success: true,
      data: { token },
    });
  } catch (err) {
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await authService.loginUser(email, password);
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({
      success: true,
      data: { token },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  signupUser,
  loginUser,
};
