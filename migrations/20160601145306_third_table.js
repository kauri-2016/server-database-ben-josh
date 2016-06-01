exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('pets', function (table) {
      table.increments('id')
      table.string('name')
      table.string('type')
      table.string('breed')
      table.integer('age')
    })
  ])
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('pets'),
  ])
};
