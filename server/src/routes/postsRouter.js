const express = require('express')
const postRouter = express.Router()

const postController = require('../controllers/postsController')

const { authConf: authMiddleware } = require('../middlewares/auth')

postRouter.get('/posts', authMiddleware, postController.index)
postRouter.get('/posts/:id', authMiddleware, postController.getById)
postRouter.get('/users/:id/posts', authMiddleware, postController.getByUser)
postRouter.post('/posts', authMiddleware, postController.create)

module.exports = postRouter
