var bodyParser = require('body-parser');

var config = require('./knexfile')

var knex = require('knex')(config.development)

module.exports = {
  getdata: getdata,
  searchFirstName: searchFirstName
}

function getdata(req, res) {

  knex('users').where('firstName', 'Ben')
    .then(function (data) {
      res.render('getdata', data[0])
    })
    .catch(function (error) {
      console.error(error)
    })
}

function searchFirstName(req, res) {
  var last = req.body.last
  knex('users').where('lastName', last)
    .then(function (data) {
      var item = data[0]
      console.log(item);
      res.render('searchFirstName', item)
    })
    .catch(function (error) {
      console.error(error)
    })
}
