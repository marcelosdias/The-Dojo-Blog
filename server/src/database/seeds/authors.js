/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { id: 1, name: "Mario", email: "mario@test.com", password: "1234" },
    { id: 2, name: "Yoshi", email: "yoshi@test.com", password: "1234" },
  ]);
};
