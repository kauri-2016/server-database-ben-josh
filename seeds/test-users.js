exports.seed = function (knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('users').del(),

    // Inserts seed entries
    knex('users').insert({
      firstName: 'J',
      lastName: 'Jacobsen',
      username: 'JiJi'
    }),
    knex('users').insert({
      firstName: 'Ben',
      lastName: 'Drydan',
      username: 'Dry'
    }),
    knex('users').insert({
      firstName: 'Ricky',
      lastName: 'Kynd',
      username: 'RK'
    }),
    knex('users').insert({
      firstName: 'Steph',
      lastName: 'Jennings',
      username: 'SJ'
    }),
    knex('users').insert({
      firstName: 'Zippo',
      lastName: 'Yap',
      username: 'ZY'
    }),
    knex('users').insert({
      firstName: 'Ricky',
      lastName: 'Kynd',
      username: 'RK'
    }),
    knex('users').insert({
      firstName: 'Abhi',
      lastName: 'Kala',
      username: 'AK'
    })
  );
};
