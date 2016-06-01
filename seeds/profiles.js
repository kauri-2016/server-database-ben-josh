exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('profile').del(),

    // Inserts seed entries
    knex('profile').insert({
      nickName: 'Bart',
      age: 37,
      starsign: 'Aquaros',
      lucky_number: 13
    }),
    knex('profile').insert({
      nickName: 'smason',
      age: 21,
      starsign: 'Zodiac',
      lucky_number: 9
    }),
    knex('profile').insert({
      nickName: 'lulu',
      age: 80,
      starsign: 'Leo',
      lucky_number: 21
    })
  )
}
