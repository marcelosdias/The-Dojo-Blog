const knex = require('../database/knex')

const postController = {
  index: async (req, res) => {
    const posts = await knex('posts')
      .join('users', 'users.id', 'posts.users_id')
      .select('posts.*', 'users.name')
      .orderBy('created_at', 'desc')

    return res.json(posts)
  },

  getById: async (req, res) => {
    const { id: postId } = req.params

    const [post] = await knex('posts').where('id', postId)

    const { users_id } = post

    const [user] = await knex('users').where('id', users_id)

    return res.json({ ...user, post })
  },

  getByUser: async (req, res) => {
    const { id: usersId } = req.params

    const posts = await knex('posts')
      .where('users_id', usersId)
      .join('users', 'users.id', 'posts.users_id')
      .select('posts.*', 'users.name')
      .orderBy('created_at', 'desc')

    return res.json(posts)
  },

  create: async (req, res) => {
    const { title, description, text, users_id } = req.body

    const newPost = await knex('posts')
      .insert({ title, description, text, users_id })
      .returning('*')

    return res.json(newPost)
  },
}

module.exports = postController
