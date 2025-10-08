
const express = require('express');
const { getAllUsers, createUser, getUser, updateUser, deleteUser } = require('../controllers/userController.js');
const userRouter = express.Router();

// routes   
userRouter.route('/')
    .get(getAllUsers)
    .post(createUser); 
userRouter.route('/:id')
    .get(getUser)
    .patch(updateUser)
    .delete(deleteUser);


module.exports = userRouter;