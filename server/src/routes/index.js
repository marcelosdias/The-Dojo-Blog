const express = require('express')
const userRouter = require('./usersRouter')
const postRouter = require('./postsRouter')
const router = express.Router()

router.use(userRouter)
router.use(postRouter)

module.exports = router
