const knex = require("knex");

const knexFile = require("../../knexfile");

const knexConfig = knex(knexFile.development);

module.exports = knexConfig;
