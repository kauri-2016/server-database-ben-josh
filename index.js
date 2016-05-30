var config = require('./knexfile')

var knex = require('knex')(config.development);


knex('users').where('firstName', 'Ben')
  .then(function (data) {
    console.log(data)
  })
  .catch(function (error) {
    console.error(error)
  })
