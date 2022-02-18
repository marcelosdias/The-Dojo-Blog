const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/usersController')

const { authConf: authMiddleware } = require('../middlewares/auth')

userRouter.get('/users', authMiddleware, userController.index)
userRouter.post('/users', authMiddleware, userController.create)
userRouter.post('/login', userController.login)

module.exports = userRouter
