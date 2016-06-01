var config = require('./knexfile')

var knex = require('knex')(config.development)


knex('users').where('firstName', 'Ben')
  .then(function (data) {
    console.log(typeof data)
    console.log(data);
    console.log(data[0])

    console.log(data[0].firstName)
  })
  .catch(function (error) {
    console.error(error)
  })
