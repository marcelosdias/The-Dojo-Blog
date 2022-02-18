const knex = require('../database/knex')
const generateToken = require('../helpers/generate-token')

const userController = {
  index: async (req, res) => {
    const users = await knex('users')

    return res.json(users)
  },

  create: async (req, res) => {
    const { name, email, password } = req.body

    const newUser = await knex('users')
      .insert({ name, email, password })
      .returning('*')

    return res.json(newUser)
  },

  login: async (req, res) => {
    const { email, password } = req.body

    const user = await knex('users').where({ email }).first()

    const isValidPassword = user.password === password

    if (!isValidPassword) {
      return res
        .status(403)
        .json({ error: 'Seu e-mail ou senha estão incorretos' })
    }

    const token = generateToken({ user_id: user.id })

    return res.json({ user, token })
  },
}

module.exports = userController
