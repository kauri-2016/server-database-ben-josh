exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('Users', function (table) {
      table.increments('id').primary()
      table.string('firstName')
      table.string('lastName')
      table.string('username')
      table.integer('profile_id')
        .references('profile.id')
        .references('pets.id')
    }),
    knex.schema.createTableIfNotExists('profile', function (table) {
      table.increments('id').primary()
      table.string('nickName')
      table.integer('age')
      table.string('starsign')
      table.integer('lucky_number')
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('Users'),
    knex.schema.dropTableIfExists('profile')
  ])
};
