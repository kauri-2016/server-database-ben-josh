var bodyParser = require('body-parser');

var config = require('./knexfile')

var knex = require('knex')(config.development)

module.exports = {
  getdata: getdata,
  searchFirstName: searchFirstName,
  addData: addData
}

function getdata(req, res) {

  knex('users')
    .then(function (data) {
      var model = {
        people: data
      }
      console.log(model);
      res.render('getdata', model)
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

function addData(req, res) {
  var userFirstName = req.body.firstName
  var userLastName = req.body.lastName
  var userUsername = req.body.username
  knex('users')
    .insert({
      firstName: userFirstName,
      lastName: userLastName,
      username: userUsername
    })
    .then(function (response) {
      console.log(response)
    })
    .catch(function (error) {
      console.error(error)
    })
}
