require("dotenv").config();

const path = require("path");

module.exports = {
  development: {
    client: process.env.CLIENT,
    connection: {
      host: process.env.DATABASE_HOST,
      port: process.env.DATABASE_PORT,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_SCHEMA,
    },
    migrations: {
      directory: path.resolve(__dirname, "src", "database", "migrations"),
    },
    seeds: {
      directory: path.resolve(__dirname, "src", "database", "seeds"),
    },
  },
};
