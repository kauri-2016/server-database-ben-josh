var config = require('./knexfile')

var knex = require('knex')(config.development)


knex('users')
  .where({
    profile_id: 1
  })
  .join('profile', 'users.profile_id', '=', 'profile.id')
  .join('pets', 'users.profile_id', '=', 'pets.id')
  .select('users.firstName', 'profile.nickName', 'pets.name', 'pets.type', 'pets.breed', 'pets.age')
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.error(error)
  })
