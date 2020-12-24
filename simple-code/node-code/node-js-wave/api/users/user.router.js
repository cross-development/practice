//Router
const { Router } = require('express');
//Controller
const UserController = require('./user.controller');
//Middleware
const userMiddleware = require('./user.middleware');

const { validateUserId } = userMiddleware;
const { validateCreateUser, validateUpdateUser } = userMiddleware;
const { getUsers, createUser, updateUser, deleteUser } = UserController;

const userRouter = Router();

userRouter.get('/', getUsers);

userRouter.post('/', validateCreateUser, createUser);

userRouter.put('/:userId', validateUserId, validateUpdateUser, updateUser);

userRouter.delete('/:userId', validateUserId, deleteUser);

module.exports = userRouter;
