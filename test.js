var config = require('./knexfile')

var knex = require('knex')(config.development)


knex('users')
  .where({
    profile_id: 1
  })
  .join('profile', 'users.profile_id', '=', 'profile.id')
  .select('users.firstName', 'profile.nickName', 'profile.lucky_number')
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.error(error)
  })
