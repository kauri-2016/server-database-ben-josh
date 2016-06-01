exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('other_stuff', function (table) {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('username')
      table.integer('profile_id').references('profile.id')
    })
  ])
}
exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('other_stuff')
  ])
}
