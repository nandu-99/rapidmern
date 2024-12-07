const prisma = require('../config/db');
const { ErrorResponse } = require('../utils/errorHandler');

const getAllUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (err) {
    throw new ErrorResponse('Error fetching users', 500);
  }
};

const getUserById = async (id) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: Number(id) },
    });
    if (!user) {
      throw new ErrorResponse('User not found', 404);
    }
    return user;
  } catch (err) {
    throw new ErrorResponse('Error fetching user', 500);
  }
};

const getUserByEmail = async (email) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  } catch (err) {
    throw new ErrorResponse('Error fetching user by email', 500);
  }
};

const createUser = async (name, email, password) => {
  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    return newUser;
  } catch (err) {
    throw new ErrorResponse('Error creating user', 500);
  }
};

const updateUser = async (id, name, email) => {
  try {
    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: { name, email },
    });
    if (!updatedUser) {
      throw new ErrorResponse('User not found', 404);
    }
    return updatedUser;
  } catch (err) {
    throw new ErrorResponse('Error updating user', 500);
  }
};

const deleteUser = async (id) => {
  try {
    const deletedUser = await prisma.user.delete({
      where: { id: Number(id) },
    });
    if (!deletedUser) {
      throw new ErrorResponse('User not found', 404);
    }
    return deletedUser;
  } catch (err) {
    throw new ErrorResponse('Error deleting user', 500);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  createUser,
  updateUser,
  deleteUser,
};
