exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('pets').del(),

    // Inserts seed entries
    knex('pets').insert({
      name: 'Jeremiah',
      type: 'bandicoot',
      breed: 'orange-tailed',
      age: 16
    }),
    knex('pets').insert({
      name: 'Murder',
      type: 'dog',
      breed: 'ceberus',
      age: 197
    }),
    knex('pets').insert({
      name: 'George',
      type: 'jellyfish',
      breed: 'portugese man o war',
      age: 2
    })
  )
}
