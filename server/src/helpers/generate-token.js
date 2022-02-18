const jwt = require('jsonwebtoken')

const SECRET = 'BATATA'

const generateToken = (params = {}) => jwt.sign(params, SECRET)

module.exports = generateToken
